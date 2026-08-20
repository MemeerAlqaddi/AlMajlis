import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const contentScripts = [
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

function loadV52Content() {
  const context = {};
  for (const relativePath of contentScripts) {
    const source = fs.readFileSync(new URL(relativePath, root), 'utf8');
    vm.runInNewContext(source, context, {filename: relativePath});
  }
  vm.runInNewContext('globalThis.__cards = cards;', context);
  return {cards: context.__cards, culture: context.alMajlisV52CultureCards || []};
}

function loadOriginalCultureCards() {
  const source = fs.readFileSync(new URL('upgrade-v44.js', root), 'utf8');
  const marker = 'const cultureCards = [';
  const start = source.indexOf(marker);
  assert.notEqual(start, -1, 'original Islam vs Culture deck exists');
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
    if (depth === 0) return vm.runInNewContext(source.slice(arrayStart, index + 1));
  }
  throw new Error('Could not parse the original Islam vs Culture deck.');
}

const loaded = loadV52Content();
const originalCulture = loadOriginalCultureCards();
const cards = [...loaded.cards, ...originalCulture, ...loaded.culture];
const expectedCounts = {
  say: 300,
  arabish: 300,
  ayah: 300,
  trivia: 300,
  identity: 300,
  culture: 300,
  mizan: 300,
  reflection: 300
};

assert.equal(loaded.cards.length, 2100, 'seven main decks contain 300 cards each');
assert.equal(originalCulture.length, 15, 'the original reviewed Islam vs Culture cards remain intact');
assert.equal(loaded.culture.length, 285, 'v52 adds 285 Islam vs Culture cards');
assert.equal(cards.length, 2400, 'eight decks contain exactly 2,400 cards');
for (const [type, expected] of Object.entries(expectedCounts)) {
  assert.equal(cards.filter(card => card.type === type).length, expected, `${type} contains 300 cards`);
}

const ids = cards.map(card => card.id);
assert.equal(new Set(ids).size, cards.length, 'card IDs are unique across all decks');
assert.ok(ids.every(id => /^(WORD|DECODE|AYAH|TRIVIA|RIDDLE|CULTURE|DILEMMA|SURFACE)-\d{3}$/.test(id)), 'card IDs use the stable deck format');

const prompts = cards.map(card => card.prompt.trim().toLocaleLowerCase('en-US'));
assert.equal(new Set(prompts).size, cards.length, 'prompts are exactly unique across all decks');

for (const card of cards) {
  assert.equal(Array.isArray(card), false, `${card.id} uses an object schema`);
  assert.ok(card.prompt?.trim(), `${card.id} has a prompt`);
  if (card.type !== 'reflection') assert.ok(card.answer?.trim(), `${card.id} has an answer or guide`);
  assert.ok(card.source?.trim(), `${card.id} has a source or content label`);
}

const guessCards = cards.filter(card => card.type === 'say');
for (const card of guessCards) {
  const forbidden = card.answer.replace(/^Do not say:\s*/i, '').split('\u00b7').map(word => word.trim()).filter(Boolean);
  assert.equal(forbidden.length, 7, `${card.id} has exactly seven forbidden clues`);
  assert.equal(new Set(forbidden.map(word => word.toLocaleLowerCase('en-US'))).size, 7, `${card.id} has seven unique forbidden clues`);
}

const ayahCards = cards.filter(card => card.type === 'ayah');
for (const card of ayahCards) {
  assert.deepEqual(
    Object.keys(card),
    ['type','prompt','promptTransliteration','promptTranslation','answer','answerTransliteration','answerTranslation','source','id'],
    `${card.id} uses the complete ayah schema`
  );
  assert.match(card.source, /^Qur[^\d]*\d{1,3}:\d{1,3}(?:[^\d]+\d{1,3})?$/u, `${card.id} has a Qur'an reference`);
  assert.ok(/[\u0600-\u06ff]/u.test(card.prompt) && /[\u0600-\u06ff]/u.test(card.answer), `${card.id} contains Arabic text`);
  assert.ok(card.answer.trim().split(/\s+/u).length >= 2, `${card.id} leaves a meaningful multi-word continuation`);
}

const cultureCards = cards.filter(card => card.type === 'culture');
for (const card of cultureCards) {
  assert.ok(['islam', 'culture'].includes(card.classification), `${card.id} has a valid classification`);
  assert.equal(card.answer, card.classification === 'islam' ? 'Islam' : 'Culture', `${card.id} answer matches its classification`);
  assert.ok(/[\u0600-\u06ff]/u.test(card.arabic), `${card.id} includes Arabic evidence`);
  assert.ok(card.english?.trim(), `${card.id} includes an English meaning`);
  assert.ok(card.evidence?.trim(), `${card.id} includes a concise explanation`);
  assert.match(card.source, /^(?:Qur|Sahih)/u, `${card.id} identifies a primary text source`);
}

const riddleAnswers = cards
  .filter(card => card.type === 'identity')
  .map(card => card.answer.toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/g, ' ').trim());
assert.equal(new Set(riddleAnswers).size, 300, 'Riddles contain 300 distinct answers, not reworded repeats');

const objectiveTypes = new Set(['say','arabish','ayah','trivia','identity']);
const conversationTypes = new Set(['mizan','reflection']);
assert.equal(cards.filter(card => objectiveTypes.has(card.type)).length, 1500, 'Game Night Shuffle has five 300-card objective decks');
assert.equal(cards.filter(card => conversationTypes.has(card.type)).length, 600, 'Conversation Shuffle has two 300-card decks');
assert.ok(!cards.some(card => /^(Syrian|Lebanese|Palestinian|Jordanian) Arabic$/.test(card.source)), 'dialect labels do not imply exclusivity');

const reviewedDecode = cards.filter(card => card.type === 'arabish').slice(0, 100);
assert.equal(new Set(reviewedDecode.map(card => card.prompt)).size, 100, 'the original reviewed Decode prompts remain unique');
assert.ok(reviewedDecode.every(card => card.prompt.split(/\s+/u).length <= 4), 'the original reviewed Decode prompts preserve disguised word boundaries');

console.log('content: 2,400 unique records, 300 per deck, with complete schemas and evidence fields passed');
