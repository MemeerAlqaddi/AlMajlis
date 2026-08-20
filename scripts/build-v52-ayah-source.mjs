import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'content', 'v52-ayah.js');
const translationKey = 'english_rwwad';
const expectedVersion = '1.0.19';
const newCardCount = 240;

async function fetchJson(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'AlMajlisContentAudit/52' } });
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  return response.json();
}

const list = await fetchJson('https://quranenc.com/api/v1/translations/list/en?localization=en');
const metadata = list.translations.find(item => item.key === translationKey);
if (!metadata) throw new Error(`QuranEnc translation ${translationKey} was not found.`);
if (metadata.version !== expectedVersion) {
  throw new Error(`Expected QuranEnc ${expectedVersion}, received ${metadata.version}. Review updates before regenerating.`);
}

const chapters = [];
for (let start = 1; start <= 114; start += 8) {
  const batch = Array.from({ length: Math.min(8, 115 - start) }, (_, offset) => start + offset);
  const responses = await Promise.all(batch.map(number => fetchJson(
    `https://quranenc.com/api/v1/translation/sura/${translationKey}/${number}`
  )));
  responses.forEach((payload, index) => chapters.push({ number: batch[index], verses: payload.result }));
}
chapters.sort((a, b) => a.number - b.number);

const baseSource = await fs.readFile(path.join(root, 'cards-data.js'), 'utf8');
const context = {};
vm.runInNewContext(`${baseSource}\nglobalThis.__cards = cards;`, context);
const usedReferences = new Set(
  context.__cards
    .filter(card => card.type === 'ayah')
    .flatMap(card => {
      const match = String(card.source).match(/^Qur’an (\d+):(\d+)(?:–(\d+))?$/);
      if (!match) return [];
      const [, surah, first, last = first] = match;
      return Array.from({ length: Number(last) - Number(first) + 1 }, (_, offset) => `${surah}:${Number(first) + offset}`);
    })
);

function cleanTranslation(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function candidatesFor(chapter) {
  return chapter.verses
    .map(verse => {
      const ref = `${verse.sura}:${verse.aya}`;
      const arabic = String(verse.arabic_text || '').trim();
      const translation = cleanTranslation(verse.translation);
      const words = arabic.split(/\s+/).filter(Boolean);
      return { ref, arabic, translation, footnotes: String(verse.footnotes || '').trim(), words };
    })
    .filter(item => !usedReferences.has(item.ref))
    .filter(item => !item.footnotes)
    .filter(item => item.words.length >= 12 && item.words.length <= 30)
    .filter(item => item.translation.length >= 55 && item.translation.length <= 230)
    .sort((a, b) => {
      const aScore = Math.abs(a.words.length - 19) + Math.abs(a.translation.length - 125) / 30;
      const bScore = Math.abs(b.words.length - 19) + Math.abs(b.translation.length - 125) / 30;
      return aScore - bScore || Number(a.ref.split(':')[1]) - Number(b.ref.split(':')[1]);
    });
}

const queues = new Map(chapters.map(chapter => [chapter.number, candidatesFor(chapter)]));
const selected = [];
for (let pass = 0; selected.length < newCardCount; pass += 1) {
  let added = 0;
  for (const chapter of chapters) {
    const queue = queues.get(chapter.number);
    const item = queue[pass];
    if (!item) continue;
    selected.push(item);
    added += 1;
    if (selected.length === newCardCount) break;
  }
  if (!added) break;
}
if (selected.length !== newCardCount) {
  throw new Error(`Only ${selected.length} eligible verses were found; ${newCardCount} are required.`);
}

const rows = selected.map(item => {
  const answerLength = Math.min(11, Math.max(4, Math.round(item.words.length * 0.38)));
  const cut = item.words.length - answerLength;
  if (cut < 7) throw new Error(`${item.ref} would create an underspecified prompt.`);
  return [item.ref, cut, item.arabic, item.translation];
});

const header = `/*\n` +
  ` * Generated from QuranEnc ${translationKey} v${metadata.version} on ${new Date().toISOString().slice(0, 10)}.\n` +
  ` * Arabic is stored verbatim and split at runtime without changing any word.\n` +
  ` * English is the unmodified full-verse meaning for source checking after reveal.\n` +
  ` * Publisher/source: QuranEnc.com. Regenerate only through scripts/build-v52-ayah-source.mjs.\n` +
  ` */\n`;
const body = `${header}const v52AyahRows = ${JSON.stringify(rows, null, 2)};\n\n` +
  `cards.push(...v52AyahRows.map(([reference, cut, arabic, meaning], index) => {\n` +
  `  const words = arabic.split(/\\s+/);\n` +
  `  return {\n` +
  `    type: 'ayah',\n` +
  `    prompt: words.slice(0, cut).join(' ') + ' …',\n` +
  `    promptTransliteration: '',\n` +
  `    promptTranslation: '',\n` +
  `    answer: words.slice(cut).join(' '),\n` +
  `    answerTransliteration: '',\n` +
  `    answerTranslation: meaning,\n` +
  `    source: 'Qur’an ' + reference,\n` +
  `    id: 'AYAH-' + String(index + 61).padStart(3, '0')\n` +
  `  };\n` +
  `}));\n`;

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, body, 'utf8');
console.log(`Wrote ${rows.length} source-backed ayah cards to ${outPath}`);
