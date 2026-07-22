import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const context = {};
vm.runInNewContext(`${source}\nglobalThis.__cards=cards;`, context);
const cards = context.__cards;
const expectedCounts = {say:100, arabish:160, ayah:60, trivia:80, identity:70, mizan:45, reflection:90};

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

console.log('content: 605 object records, stable IDs, schemas, split decks, and labels passed');
