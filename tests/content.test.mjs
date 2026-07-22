import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const context = {};
vm.runInNewContext(`${source}\nglobalThis.__cards=cards;`, context);
const cards = context.__cards;
const expectedCounts = {say:100, arabish:160, ayah:60, trivia:80, identity:70, mizan:45, reflection:90};

assert.equal(cards.length, 605, 'total card count');
for (const [type, expected] of Object.entries(expectedCounts)) assert.equal(cards.filter(card => card[0] === type).length, expected, `${type} count`);

const ids = cards.map(card => card[card[0] === 'ayah' ? 8 : 4]);
assert.equal(new Set(ids).size, cards.length, 'card IDs must be unique');
assert.ok(ids.every(id => /^(WORD|DECODE|AYAH|TRIVIA|RIDDLE|DILEMMA|SURFACE)-\d{3}$/.test(id)), 'card ID format');

const prompts = cards.map(card => card[1].trim().toLocaleLowerCase());
assert.equal(new Set(prompts).size, cards.length, 'prompts must be unique');

for (const card of cards) {
  assert.ok(card[1]?.trim(), `${card.at(-1)} needs a prompt`);
  if (card[0] !== 'reflection') assert.ok(card[2]?.trim(), `${card.at(-1)} needs an answer or guide`);
  const sourceIndex = card[0] === 'ayah' ? 7 : 3;
  assert.ok(card[sourceIndex]?.trim(), `${card.at(-1)} needs a source or content label`);
  if (card[0] === 'ayah') {
    assert.equal(card.length, 9, `${card.at(-1)} ayah schema`);
    assert.match(card[7], /^Qur’an \d{1,3}:\d{1,3}(?:–\d{1,3})?$/, `${card.at(-1)} ayah reference`);
    assert.ok(/[\u0600-\u06ff]/.test(card[1]) && /[\u0600-\u06ff]/.test(card[4]), `${card.at(-1)} Arabic text`);
  } else assert.equal(card.length, 5, `${card.at(-1)} standard schema`);
}

const objectiveTypes = new Set(['say','arabish','ayah','trivia','identity']);
const conversationTypes = new Set(['mizan','reflection']);
const gameNight = cards.filter(card => objectiveTypes.has(card[0]));
const conversation = cards.filter(card => conversationTypes.has(card[0]));
assert.equal(gameNight.length, 470, 'Game Night Shuffle count');
assert.ok(gameNight.every(card => !conversationTypes.has(card[0])), 'Game Night Shuffle excludes subjective prompts');
assert.equal(conversation.length, 135, 'Conversation Shuffle count');
assert.ok(conversation.every(card => conversationTypes.has(card[0])), 'Conversation Shuffle includes conversation prompts only');
assert.ok(!cards.some(card => /^(Syrian|Lebanese|Palestinian|Jordanian) Arabic$/.test(card[3] || '')), 'dialect labels must not imply exclusivity');

console.log('content: 605 cards, stable IDs, schemas, split decks, and labels passed');
