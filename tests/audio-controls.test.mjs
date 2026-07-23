import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cardsSource = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const dom = new JSDOM(html, {runScripts: 'outside-only', url: 'https://example.test/'});
const {window} = dom;
const audioPlays = [];
const tones = [];

window.Audio = class {
  constructor(src) { this.src = src; this.volume = 1; }
  load() {}
  play() { audioPlays.push(this.src); return Promise.resolve(); }
};
window.AudioContext = class {
  constructor() { this.currentTime = 0; this.state = 'running'; this.destination = {}; }
  createOscillator() { return {type: '', frequency: {setValueAtTime: value => tones.push(value)}, connect() {}, start() {}, stop() {}}; }
  createGain() { return {gain: {setValueAtTime() {}, exponentialRampToValueAtTime() {}}, connect() {}}; }
  resume() { return Promise.resolve(); }
};
window.scrollTo = () => {};
window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
window.navigator.serviceWorker = {register: () => Promise.resolve({update: () => Promise.resolve()})};
window.navigator.vibrate = () => true;
window.navigator.wakeLock = {request: async () => ({release: async () => {}, addEventListener() {}})};
window.fetch = async () => ({ok: true, json: async () => ({success: 'true'})});
const nativeSetInterval = window.setInterval.bind(window);
const nativeSetTimeout = window.setTimeout.bind(window);
window.setInterval = (callback, delay) => nativeSetInterval(callback, delay === 1000 ? 3 : delay);
window.setTimeout = (callback, delay) => nativeSetTimeout(callback, delay === 420 ? 4 : delay);

window.eval(`${cardsSource}\n${appSource}\nwindow.__majlisTest = {
  showShuffleCard(type) {
    const selected = cards.find(card => card.type === type);
    const next = cards.find(card => card.type !== type && ['say','arabish','ayah','trivia','identity'].includes(card.type));
    deck = [selected, next];
    cardIndex = 0;
    restoredAnswerVisible = false;
    render();
  },
  cueTenSeconds() {
    pauseTimer();
    seconds = 11;
    timerRunning = true;
    timerDeadline = Date.now() + 9500;
    lastTimerCueSecond = null;
    timerFrame();
  }
};`);

const $ = id => window.document.getElementById(id);
const click = element => element.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

$('openSetup').dispatchEvent(new window.Event('pointerdown', {bubbles: true}));
click($('openSetup'));
assert.ok(audioPlays.some(src => src.endsWith('majlis-open.mp3')), 'opening cue starts from the initiating control');
assert.equal(window.document.querySelectorAll('.styleChoice').length, 3);
assert.equal(window.document.querySelector('[data-style="solo"]'), null);

click(window.document.querySelector('[data-mode="all"]'));
click(window.document.querySelector('[data-style="teams"]'));
click($('beginGame'));
await wait(35);
assert.deepEqual(tones.slice(0, 5), [392, 440, 523.25, 659.25, 880], 'countdown is followed by the round-start chime');
assert.deepEqual(tones.slice(0, 3), [392, 440, 523.25], '3, 2, and 1 each keep their own subtle countdown note');
assert.deepEqual(tones.slice(3, 5), [659.25, 880], 'the round-start cue remains distinct from the countdown notes');
assert.equal($('playTimer').textContent, '60', 'the round starts at exactly 60 seconds');

window.__majlisTest.showShuffleCard('trivia');
assert.equal($('reveal').hidden, false);
click($('reveal'));
assert.equal($('answer').hidden, false, 'Reveal works in Shuffle');
click($('reveal'));
assert.equal($('answer').hidden, true, 'Hide works in Shuffle');
const beforePass = $('question').textContent;
const toneCountBeforePass = tones.length;
click($('skip'));
assert.notEqual($('question').textContent, beforePass, 'Pass advances in Shuffle');
assert.deepEqual(tones.slice(toneCountBeforePass, toneCountBeforePass + 2), [246.94, 174.61], 'Pass plays a distinct descending negative cue');
await wait(8);

window.__majlisTest.showShuffleCard('arabish');
assert.equal($('question').textContent, 'SHOOBE DUCK-MEANY', 'manually balanced Decode wording is rendered exactly as reviewed');
assert.equal($('decodeDialect').hidden, false, 'Arabic variety is visible before Reveal');
assert.equal($('decodeDialect').textContent, 'Levantine Arabic');
assert.equal($('ref').hidden, true, 'Decode variety is not shown in the white source bar');

window.__majlisTest.showShuffleCard('say');
assert.equal($('reveal').hidden, true, 'Guess the Word removes the inapplicable Reveal control');
assert.equal([...window.document.querySelectorAll('.actions .action')].filter(button => !button.hidden).length, 3);
assert.equal(window.document.querySelectorAll('.forbiddenWord').length, 7, 'seven forbidden clues are rendered as separate, scannable items');
const toneCountBeforePoint = tones.length;
click($('correct'));
assert.ok(audioPlays.some(src => src.endsWith('majlis-correct.mp3')), 'Correct +1 plays the positive chime');
assert.equal(tones.length, toneCountBeforePoint, 'the positive file cue does not stack with a second tone');
assert.equal($('pointToast'), null, 'Correct +1 does not open an Undo point pop-up');
await wait(8);

const toneCountBeforeTicks = tones.length;
window.__majlisTest.cueTenSeconds();
assert.equal(tones[toneCountBeforeTicks], 760, 'the final ten seconds begin with one subtle tick');

click($('finishRound'));
assert.equal($('roundScreen').hidden, false, 'End Turn works');
assert.ok(audioPlays.some(src => src.endsWith('majlis-complete.mp3')), 'round completion cue plays');
assert.match(css, /\.actions\{[^}]*display:flex[^}]*justify-content:center/);
assert.match(css, /\.roundActions\{[^}]*align-items:center[^}]*justify-content:center/, 'round-complete buttons share one centered layout');

dom.window.close();
console.log('audio and controls: opening, countdown, round start, ten-second ticks, scoring, and Shuffle controls passed');
