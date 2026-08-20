import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'content', 'v52-culture-evidence.js');
const refs = [
  '2:177','2:188','2:256','2:264','2:280','2:282','3:7','3:103','3:104','3:134','3:159',
  '4:3','4:4','4:7','4:19','4:29','4:35','4:58','4:86','4:94','4:135',
  '5:1','5:2','5:6','5:8','5:32','5:87','5:89','5:105','6:108','6:141',
  '7:26','7:31','7:199','8:27','8:61','9:6','9:60','9:71','9:119','10:99','11:85','12:55','13:11','14:7',
  '16:43','16:90','16:91','16:125','17:23-24','17:26-27','17:31','17:32','17:34','17:36','17:53',
  '18:28','18:109','22:40','23:8','24:4','24:11','24:27','24:30','24:31','24:58','25:63','25:67',
  '28:26','28:77','30:21','31:15','31:18','33:5','33:35','33:53','33:70','39:9','39:18','39:53',
  '41:34','42:38','42:40','42:43','49:6','49:9','49:11','49:12','49:13','53:32','58:11','60:8','61:2','64:15','65:2-3'
];
if (refs.length !== 95) throw new Error(`Expected 95 evidence references, found ${refs.length}.`);

const cache = new Map();
async function getVerse(surah, ayah) {
  const key = `${surah}:${ayah}`;
  if (cache.has(key)) return cache.get(key);
  const response = await fetch(`https://quranenc.com/api/v1/translation/aya/english_rwwad/${surah}/${ayah}`, {
    headers: { 'user-agent': 'AlMajlisContentAudit/52' }
  });
  if (!response.ok) throw new Error(`${response.status} while fetching ${key}`);
  const payload = await response.json();
  const verse = payload.result;
  const value = String(verse.arabic_text || '').trim();
  if (!value) throw new Error(`No Arabic text returned for ${key}.`);
  cache.set(key, value);
  return value;
}

const evidence = {};
for (const ref of refs) {
  const match = ref.match(/^(\d+):(\d+)(?:-(\d+))?$/);
  const [, surah, first, last = first] = match;
  const verses = [];
  for (let ayah = Number(first); ayah <= Number(last); ayah += 1) verses.push(await getVerse(surah, ayah));
  evidence[ref] = verses.join(' ');
}

const body = `/* Exact Arabic retrieved from QuranEnc english_rwwad v1.0.19 on ${new Date().toISOString().slice(0, 10)}.\n` +
  ` * Publisher/source: QuranEnc.com. Do not hand-edit; regenerate with scripts/build-v52-culture-evidence.mjs. */\n` +
  `globalThis.alMajlisV52CultureEvidence = ${JSON.stringify(evidence, null, 2)};\n`;
await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, body, 'utf8');
console.log(`Wrote ${Object.keys(evidence).length} exact Arabic evidence passages to ${outPath}`);
