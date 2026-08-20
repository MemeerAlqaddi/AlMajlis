import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const contentFiles = [
  '../cards-data.js',
  '../content/v52-words.js',
  '../content/v52-decode.js',
  '../content/v52-ayah.js',
  '../content/v52-trivia.js',
  '../content/v52-riddles.js',
  '../content/v52-dilemmas.js',
  '../content/v52-reflection.js',
  '../content/v52-culture-evidence.js',
  '../content/v52-culture.js'
];
const cardsSource = contentFiles
  .map(relativePath => fs.readFileSync(new URL(relativePath, import.meta.url), 'utf8'))
  .join('\n');
const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const modes = [
  ['all', 'teams'],
  ['say', 'teams'],
  ['arabish', 'casual'],
  ['ayah', 'casual'],
  ['trivia', 'casual'],
  ['identity', 'casual'],
  ['conversation', null],
  ['mizan', null],
  ['reflection', null]
];

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const waitFor = async (predicate, timeout = 1000) => {
  const started = Date.now();
  while (!predicate() && Date.now() - started < timeout) await wait(10);
  return predicate();
};

for (const [mode, style] of modes) {
  const dom = new JSDOM(html, {runScripts: 'outside-only', url: 'https://example.test/'});
  const {window} = dom;
  const tones = [];
  const audioPlays = [];
  window.Audio = class { constructor(src) { this.src = src; } load() {} play() { audioPlays.push(this.src); return Promise.resolve(); } };
  window.AudioContext = class {
    constructor() { this.currentTime = 0; this.state = 'running'; this.destination = {}; }
    createOscillator() { return {frequency: {setValueAtTime: value => tones.push(value)}, connect() {}, start() {}, stop() {}}; }
    createGain() { return {gain: {setValueAtTime() {}, exponentialRampToValueAtTime() {}}, connect() {}}; }
    resume() { return Promise.resolve(); }
  };
  window.scrollTo = () => {};
  window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
  window.navigator.serviceWorker = {register: () => Promise.resolve({update: () => Promise.resolve()})};
  window.navigator.vibrate = () => true;
  window.fetch = async () => ({ok: true, json: async () => ({success: 'true'})});
  const nativeSetInterval = window.setInterval.bind(window);
  const nativeSetTimeout = window.setTimeout.bind(window);
  window.setInterval = (callback, delay) => nativeSetInterval(callback, delay === 1000 ? 3 : delay);
  window.setTimeout = (callback, delay) => nativeSetTimeout(callback, delay === 420 ? 4 : delay);
  window.eval(`${cardsSource}\n${appSource}`);

  const click = element => element.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
  click(window.document.getElementById('openSetup'));
  click(window.document.querySelector(`[data-category="${['conversation', 'mizan', 'reflection'].includes(mode) ? 'conversation' : 'competitive'}"]`));
  click(window.document.querySelector(`[data-mode="${mode}"]`));
  if (style) {
    click(window.document.querySelector(`[data-style="${style}"]`));
    click(window.document.getElementById('beginGame'));
    assert.equal(
      await waitFor(() => window.document.getElementById('countdownScreen').hidden),
      true,
      `${mode} completes its countdown`
    );
  }

  assert.equal(window.document.getElementById('gameShell').hidden, false, `${mode} opens gameplay`);
  assert.equal(window.document.getElementById('countdownScreen').hidden, true, `${mode} clears or skips countdown`);
  assert.ok(window.document.getElementById('question').textContent.length > 0, `${mode} renders its first card`);
  assert.equal(window.document.getElementById('playTimer').textContent, style ? '60' : '—', `${mode} uses the correct round duration`);

  const playsBeforeNext = audioPlays.length;
  click(window.document.getElementById('correct'));
  assert.ok(audioPlays.slice(playsBeforeNext).some(src => src.endsWith('majlis-correct.mp3')), `${mode} Correct/Next plays the positive cue`);
  await wait(8);

  if (style) {
    const beforePass = tones.length;
    click(window.document.getElementById('skip'));
    assert.deepEqual(tones.slice(beforePass, beforePass + 2), [246.94, 174.61], `${mode} Pass plays the negative cue`);
  }
  dom.window.close();
}

console.log('all modes: launch flows and consistent Correct/Next/Pass sounds passed');
