import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cardsSource = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const dom = new JSDOM(html, {runScripts: 'outside-only', url: 'https://example.test/'});
const {window} = dom;

window.Audio = class { play() { return Promise.resolve(); } };
window.scrollTo = () => {};
window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
window.navigator.serviceWorker = {register: () => Promise.resolve()};
window.navigator.vibrate = () => true;
window.fetch = async () => ({ok: true, json: async () => ({success: 'true'})});
const nativeSetInterval = window.setInterval.bind(window);
const nativeSetTimeout = window.setTimeout.bind(window);
window.setInterval = (callback, delay) => nativeSetInterval(callback, delay === 700 ? 3 : delay);
window.setTimeout = (callback, delay) => nativeSetTimeout(callback, delay === 450 ? 3 : delay);

window.eval(`${cardsSource}\n${appSource}`);
const $ = id => window.document.getElementById(id);
const click = element => element.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

assert.equal($('welcomeScreen').hidden, false);
click($('openSetup'));
click(window.document.querySelector('[data-mode="mizan"]'));
assert.equal(window.document.querySelector('[data-style="teams"]').disabled, true);
assert.equal(window.document.querySelector('[data-style="duel"]').disabled, true);
click(window.document.querySelector('[data-style="casual"]'));
click($('beginGame'));
await wait(30);
assert.equal($('countdownScreen').hidden, true);
assert.equal($('skip').hidden, true);
assert.equal($('correct').textContent, 'Next Prompt');
assert.equal($('answer').hidden, true);
click($('reveal'));
assert.equal($('answer').hidden, false);
assert.equal($('answer').getAttribute('aria-hidden'), 'false');
click($('finishRound'));
assert.equal($('roundScreen').hidden, false);
click($('roundHome'));

click($('openSetup'));
click(window.document.querySelector('[data-mode="all"]'));
click(window.document.querySelector('[data-style="teams"]'));
click($('beginGame'));

for (let turn = 0; turn < 6; turn++) {
  await wait(30);
  if (!$('reveal').hidden) {
    assert.equal($('answer').hidden, true);
    assert.equal($('answer').getAttribute('aria-hidden'), 'true');
  }
  click($('correct'));
  click($('correct'));
  click($('finishRound'));
  if (turn === 0) {
    assert.equal($('undoPoint').hidden, false);
    click($('undoPoint'));
    assert.match($('roundScore').textContent, /earned 1 point/);
  }
  if (turn < 5) click($('nextRound'));
}

assert.equal($('roundHeading').textContent, 'MATCH COMPLETE');
assert.equal($('roundHistory').children.length, 6);
assert.equal($('finalA').textContent, '5');
assert.equal($('finalB').textContent, '6');
assert.match($('roundResult').textContent, /Player 2 wins|Team B wins/);

dom.window.close();
console.log('dom: conversation restrictions, reveal accessibility, 3-round scoring, undo, and winner passed');
