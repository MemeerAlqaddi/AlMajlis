import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');

const DECKS = Object.freeze({
  say: 'Guess the Word',
  arabish: 'Decode the Gibberish',
  ayah: 'Complete the Ayah',
  trivia: 'Trivia',
  identity: 'Riddles',
  culture: 'Islam vs Culture',
  mizan: 'Dilemmas',
  reflection: 'Under the Surface'
});

const FACTUAL_TYPES = new Set(['say', 'ayah', 'trivia', 'identity', 'culture']);
const SOURCE_REQUIRED_TYPES = new Set([...FACTUAL_TYPES, 'mizan']);
const MINIMUM_PER_DECK = 300;
const QURAN_VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99,
  128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34,
  30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18,
  45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30,
  52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22,
  17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5,
  4, 7, 3, 6, 3, 5, 4, 5, 6
];

function loadBaseCards() {
  const context = {};
  const sources = [
    'cards-data.js',
    'content/v52-words.js',
    'content/v52-decode.js',
    'content/v52-ayah.js',
    'content/v52-trivia.js',
    'content/v52-riddles.js',
    'content/v52-dilemmas.js',
    'content/v52-reflection.js',
    'content/v52-culture-evidence.js',
    'content/v52-culture.js'
  ];
  for (const relativePath of sources) {
    const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
    vm.runInNewContext(source, context, {filename: relativePath});
  }
  vm.runInNewContext('globalThis.__cards = cards;', context);
  return {cards: context.__cards, culture: context.alMajlisV52CultureCards || []};
}

function loadCultureCards() {
  const source = fs.readFileSync(path.join(root, 'upgrade-v44.js'), 'utf8');
  const marker = 'const cultureCards = [';
  const start = source.indexOf(marker);
  if (start < 0) return [];

  const arrayStart = source.indexOf('[', start);
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char !== ']') continue;
    depth -= 1;
    if (depth !== 0) continue;
    const literal = source.slice(arrayStart, index + 1);
    return vm.runInNewContext(literal);
  }
  throw new Error('Could not parse the Islam vs Culture card array.');
}

function normalize(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '')
    .toLocaleLowerCase('en-US')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function tokens(value) {
  return new Set(normalize(value).split(' ').filter(word => word.length > 2));
}

function jaccard(left, right) {
  if (!left.size || !right.size) return 0;
  let common = 0;
  for (const token of left) if (right.has(token)) common += 1;
  return common / (left.size + right.size - common);
}

function groupBy(items, keyFor) {
  const groups = new Map();
  for (const item of items) {
    const key = keyFor(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function top(items, count = 20) {
  return items.slice(0, count);
}

const loaded = loadBaseCards();
const cards = [...loaded.cards, ...loadCultureCards(), ...loaded.culture];
const byDeck = groupBy(cards, card => card.type);
const exactPromptGroups = groupBy(cards, card => normalize(card.prompt));
const exactDuplicates = [...exactPromptGroups.values()]
  .filter(group => group.length > 1)
  .map(group => group.map(card => card.id));

const nearDuplicates = [];
for (const [type, deck] of byDeck) {
  const prepared = deck.map(card => ({card, words: tokens(card.prompt)}));
  for (let left = 0; left < prepared.length; left += 1) {
    for (let right = left + 1; right < prepared.length; right += 1) {
      const a = prepared[left];
      const b = prepared[right];
      if (a.words.size < 2 || b.words.size < 2) continue;
      const score = jaccard(a.words, b.words);
      if (score < 0.82) continue;
      if (normalize(a.card.prompt) === normalize(b.card.prompt)) continue;
      nearDuplicates.push({
        deck: DECKS[type] || type,
        ids: [a.card.id, b.card.id],
        similarity: Number(score.toFixed(2)),
        prompts: [a.card.prompt, b.card.prompt]
      });
    }
  }
}
nearDuplicates.sort((a, b) => b.similarity - a.similarity);

const awkward = [];
const sourceFlags = [];
const invalidQuranReferences = [];
const clichePatterns = [
  /^what does .+ mean\??$/i,
  /^who was .+\??$/i,
  /^name (?:the|a|one) /i,
  /^describe a time /i,
  /^what is one way /i,
  /^how can (?:you|we) /i,
  /^what would you do if /i
];
const weakSource = /^(?:concept|general|reflection|discussion|common knowledge|islamic principle)(?:\b|;|:)/i;
const checkableSource = /(?:Qur['’]an\s+\d|Sahih\s|Sunan\s|Jami[^\p{L}\p{N}]?\s|Muwatta|Musnad\s|Ibn al-Salah)/iu;
const repeatedWord = /\b([\p{L}']{3,})\s+\1\b/iu;

for (const card of cards) {
  const prompt = String(card.prompt || '').trim();
  const answer = String(card.answer || '').trim();
  const source = String(card.source || '').trim();
  const promptWords = normalize(prompt).split(' ').filter(Boolean);

  const repeatedPromptWord = card.type !== 'arabish' && repeatedWord.test(prompt);
  if (/\s{2,}|\s+[,.!?;:]/.test(prompt) || repeatedPromptWord) {
    awkward.push({id: card.id, reason: 'spacing or repeated-word problem', prompt});
  }
  if (/[!?]{2,}|\.{3,}/.test(prompt)) {
    awkward.push({id: card.id, reason: 'over-punctuated prompt', prompt});
  }
  if (clichePatterns.some(pattern => pattern.test(prompt))) {
    awkward.push({id: card.id, reason: 'cliche or overly familiar prompt frame', prompt});
  }
  if (card.type === 'trivia' && promptWords.length < 7) {
    awkward.push({id: card.id, reason: 'trivia prompt may be too short or obvious', prompt});
  }
  if (card.type === 'identity' && promptWords.length < 10) {
    awkward.push({id: card.id, reason: 'riddle may provide too little layered context', prompt});
  }
  if (card.type === 'ayah' && answer.split(/\s+/u).filter(Boolean).length < 2) {
    awkward.push({id: card.id, reason: 'ayah continuation may be too easy', prompt});
  }
  if (card.type === 'reflection' && !/[?؟]$/.test(prompt)) {
    awkward.push({id: card.id, reason: 'reflection prompt is not framed as a clear question', prompt});
  }
  if (answer && repeatedWord.test(answer)) {
    awkward.push({id: card.id, reason: 'answer contains an accidental repeated word', prompt});
  }
  if (FACTUAL_TYPES.has(card.type) && weakSource.test(source)) {
    awkward.push({id: card.id, reason: `imprecise factual source: ${source}`, prompt});
  }
  if (SOURCE_REQUIRED_TYPES.has(card.type) && !checkableSource.test(source)) {
    sourceFlags.push({id: card.id, deck: DECKS[card.type], source, prompt});
  }
  if (/Qur['’]an/iu.test(source)) {
    for (const match of source.matchAll(/\b(\d{1,3}):(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?/gu)) {
      const chapter = Number(match[1]);
      const startVerse = Number(match[2]);
      const endVerse = Number(match[3] || match[2]);
      const lastVerse = QURAN_VERSE_COUNTS[chapter];
      if (!lastVerse || startVerse < 1 || endVerse < startVerse || endVerse > lastVerse) {
        invalidQuranReferences.push({id: card.id, source, reference: match[0]});
      }
    }
  }
}

const openings = [];
for (const [type, deck] of byDeck) {
  const groups = groupBy(deck, card => normalize(card.prompt).split(' ').slice(0, 2).join(' '));
  for (const [opening, group] of groups) {
    if (!opening || group.length < 4) continue;
    openings.push({deck: DECKS[type] || type, opening, count: group.length, ids: group.map(card => card.id)});
  }
}
openings.sort((a, b) => b.count - a.count);

const counts = Object.fromEntries(Object.keys(DECKS).map(type => [type, byDeck.get(type)?.length || 0]));
const shortfalls = Object.entries(counts)
  .filter(([, count]) => count < MINIMUM_PER_DECK)
  .map(([type, count]) => ({deck: DECKS[type], count, missing: MINIMUM_PER_DECK - count}));
const ids = cards.map(card => card.id);
const duplicateIds = [...groupBy(cards, card => card.id).values()]
  .filter(group => group.length > 1)
  .map(group => group.map(card => card.id));
const duplicateRiddleAnswers = [...groupBy(byDeck.get('identity') || [], card => normalize(card.answer)).values()]
  .filter(group => group.length > 1)
  .map(group => group.map(card => `${card.id}: ${card.answer}`));

const report = {
  summary: {
    uniqueCards: new Set(ids).size,
    cardRecords: cards.length,
    requiredUniqueCards: Object.keys(DECKS).length * MINIMUM_PER_DECK,
    counts,
    shortfalls,
    duplicateIds: duplicateIds.length,
    duplicateRiddleAnswers: duplicateRiddleAnswers.length,
    invalidQuranReferences: invalidQuranReferences.length,
    exactDuplicatePrompts: exactDuplicates.length,
    nearDuplicatePairs: nearDuplicates.length,
    editorialFlags: awkward.length,
    sourceReviewFlags: sourceFlags.length,
    repeatedOpeningPatterns: openings.length
  },
  samples: {
    exactDuplicates: top(exactDuplicates),
    duplicateRiddleAnswers: top(duplicateRiddleAnswers),
    invalidQuranReferences: top(invalidQuranReferences),
    nearDuplicates: top(nearDuplicates),
    editorialFlags: top(awkward, 40),
    sourceReviewFlags: top(sourceFlags, 40),
    repeatedOpeningPatterns: top(openings)
  }
};

console.log(JSON.stringify(report, null, 2));

if (strict) {
  const failed = shortfalls.length || duplicateIds.length || duplicateRiddleAnswers.length || invalidQuranReferences.length || exactDuplicates.length || nearDuplicates.length || awkward.length || sourceFlags.length;
  if (failed) process.exitCode = 1;
}
