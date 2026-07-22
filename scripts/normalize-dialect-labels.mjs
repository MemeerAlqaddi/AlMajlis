import fs from 'node:fs';

const path = new URL('../cards-data.js', import.meta.url);
let source = fs.readFileSync(path, 'utf8');
const replacements = new Map([
  ['Syrian Arabic', 'Levantine Arabic · common in Syria'],
  ['Lebanese Arabic', 'Levantine Arabic · common in Lebanon'],
  ['Palestinian Arabic', 'Levantine Arabic · common in Palestine'],
  ['Jordanian Arabic', 'Levantine Arabic · common in Jordan'],
  ['Colloquial Arabic', 'Common colloquial Arabic']
]);
for (const [from, to] of replacements) source = source.replaceAll(`"${from}"`, `"${to}"`);
fs.writeFileSync(path, source);
