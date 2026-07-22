import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const context = {};
vm.runInNewContext(`${source}\nglobalThis.__cards=cards;`, context);
const cards = context.__cards;
const expectedCounts = {say:100, arabish:160, ayah:60, trivia:80, identity:70, mizan:45, reflection:90};

const guessCards = cards.filter(card => card.type === 'say');
assert.equal(guessCards.length, 100, 'Guess the Word retains all 100 cards');
for (const card of guessCards) {
  const forbidden = card.answer.replace(/^Do not say:\s*/i, '').split('·').map(word => word.trim()).filter(Boolean);
  assert.equal(forbidden.length, 7, `${card.id} has exactly seven useful forbidden clues`);
  assert.equal(new Set(forbidden.map(word => word.toLowerCase())).size, 7, `${card.id} has no duplicate forbidden clues`);
}

assert.equal(cards.length, 605, 'total card count');
for (const [type, expected] of Object.entries(expectedCounts)) assert.equal(cards.filter(card => card.type === type).length, expected, `${type} count`);

const ids = cards.map(card => card.id);
assert.equal(new Set(ids).size, cards.length, 'card IDs must be unique');
assert.ok(ids.every(id => /^(WORD|DECODE|AYAH|TRIVIA|RIDDLE|DILEMMA|SURFACE)-\d{3}$/.test(id)), 'card ID format');

const prompts = cards.map(card => card.prompt.trim().toLocaleLowerCase());
assert.equal(new Set(prompts).size, cards.length, 'prompts must be unique');

for (const card of cards) {
  assert.equal(Array.isArray(card), false, `${card.id} must use a readable object schema`);
  assert.ok(card.prompt?.trim(), `${card.id} needs a prompt`);
  if (card.type !== 'reflection') assert.ok(card.answer?.trim(), `${card.id} needs an answer or guide`);
  assert.ok(card.source?.trim(), `${card.id} needs a source or content label`);
  if (card.type === 'ayah') {
    assert.deepEqual(Object.keys(card), ['type','prompt','promptTransliteration','promptTranslation','answer','answerTransliteration','answerTranslation','source','id'], `${card.id} ayah schema`);
    assert.match(card.source, /^Qur’an \d{1,3}:\d{1,3}(?:–\d{1,3})?$/, `${card.id} ayah reference`);
    assert.ok(/[\u0600-\u06ff]/.test(card.prompt) && /[\u0600-\u06ff]/.test(card.answer), `${card.id} Arabic text`);
  } else assert.deepEqual(Object.keys(card), ['type','prompt','answer','source','id'], `${card.id} standard schema`);
}

const objectiveTypes = new Set(['say','arabish','ayah','trivia','identity']);
const conversationTypes = new Set(['mizan','reflection']);
const gameNight = cards.filter(card => objectiveTypes.has(card.type));
const conversation = cards.filter(card => conversationTypes.has(card.type));
assert.equal(gameNight.length, 470, 'Game Night Shuffle count');
assert.ok(gameNight.every(card => !conversationTypes.has(card.type)), 'Game Night Shuffle excludes subjective prompts');
assert.equal(conversation.length, 135, 'Conversation Shuffle count');
assert.ok(conversation.every(card => conversationTypes.has(card.type)), 'Conversation Shuffle includes conversation prompts only');
assert.ok(!cards.some(card => /^(Syrian|Lebanese|Palestinian|Jordanian) Arabic$/.test(card.source)), 'dialect labels must not imply exclusivity');

const ambiguousAyahPrompts = new Set([
  'ٱهۡدِنَا …', 'ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ …', 'لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا …',
  'حَسۡبُنَا ٱللَّهُ …', 'ٱعۡدِلُواْ …', 'مَن جَآءَ بِٱلۡحَسَنَةِ …',
  'إِذَا ذُكِرَ ٱللَّهُ وَجِلَتۡ قُلُوبُهُمۡ …', 'ٱتَّقُواْ ٱللَّهَ …', 'وَٱذۡكُر رَّبَّكَ …',
  'قَالَ رَبِّ …', 'وَقُل رَّبِّ …', 'قَدۡ أَفۡلَحَ …', 'ٱللَّهُ نُورُ …',
  'ٱذۡكُرُواْ ٱللَّهَ …', 'ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ …', 'وَمَن يَتَّقِ ٱللَّهَ …'
]);
assert.ok(cards.filter(card => card.type === 'ayah').every(card => !ambiguousAyahPrompts.has(card.prompt)), 'known multi-location Ayah fragments are extended');
assert.equal(cards.find(card => card.id === 'AYAH-044').source, 'Qur’an 23:1–2');
assert.equal(cards.find(card => card.id === 'AYAH-059').source, 'Qur’an 65:2–3');

const correctedAyahIds = [
  'AYAH-002','AYAH-004','AYAH-010','AYAH-017','AYAH-020','AYAH-021','AYAH-024','AYAH-027',
  'AYAH-040','AYAH-041','AYAH-042','AYAH-044','AYAH-046','AYAH-053','AYAH-055','AYAH-059'
];
for (const id of correctedAyahIds) {
  const card = cards.find(item => item.id === id);
  assert.ok(card.answer.trim().split(/\s+/).length >= 2, `${id} must leave a meaningful multi-word continuation`);
}
assert.equal(cards.find(card => card.id === 'AYAH-002').source, 'Qur’an 1:5–6');
assert.equal(cards.find(card => card.id === 'AYAH-041').source, 'Qur’an 20:24–25');

const reviewedDecode = cards.filter(card => card.type === 'arabish').slice(0, 100);
assert.equal(reviewedDecode.length, 100, 'the everyday Decode set must contain 100 reviewed cards');
assert.equal(new Set(reviewedDecode.map(card => card.prompt)).size, 100, 'reviewed Decode prompts must remain unique');
assert.ok(reviewedDecode.every(card => card.prompt.split(/\s+/).length <= 4), 'reviewed Decode prompts must disguise obvious word boundaries');

console.log('content: 605 object records, balanced Ayah continuations, reviewed Decode prompts, schemas, and labels passed');
