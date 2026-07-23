import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cardsSource = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const dom = new JSDOM(html, {runScripts: 'outside-only', url: 'https://example.test/'});
const {window} = dom;
let visibilityState = 'visible';
Object.defineProperty(window.document, 'visibilityState', {configurable: true, get: () => visibilityState});

window.Audio = class { play() { return Promise.resolve(); } };
const countdownNotes = [];
window.AudioContext = class {
  constructor() { this.currentTime = 0; this.state = 'running'; this.destination = {}; }
  createOscillator() { return {type: '', frequency: {setValueAtTime: value => countdownNotes.push(value)}, connect() {}, start() {}, stop() {}}; }
  createGain() { return {gain: {setValueAtTime() {}, exponentialRampToValueAtTime() {}}, connect() {}}; }
  resume() { return Promise.resolve(); }
};
window.scrollTo = () => {};
window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
const viewportListeners = {};
window.visualViewport = {
  height: 640,
  addEventListener(type, listener) { viewportListeners[type] = listener; }
};
window.navigator.serviceWorker = {register: () => Promise.resolve()};
window.navigator.vibrate = () => true;
let wakeLockRequests = 0;
window.navigator.wakeLock = {request: async () => { wakeLockRequests++; return {release: async () => {}, addEventListener() {}}; }};
window.fetch = async () => ({ok: true, json: async () => ({success: 'true'})});
const nativeSetInterval = window.setInterval.bind(window);
const nativeSetTimeout = window.setTimeout.bind(window);
window.setInterval = (callback, delay) => nativeSetInterval(callback, delay === 1000 ? 3 : delay);
window.setTimeout = (callback, delay) => nativeSetTimeout(callback, delay === 420 ? 4 : delay);

window.eval(`${cardsSource}\n${appSource}`);
const $ = id => window.document.getElementById(id);
const click = element => element.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

assert.equal($('welcomeScreen').hidden, false);
assert.equal(window.document.documentElement.style.getPropertyValue('--game-height'), '640px');
window.visualViewport.height = 568;
viewportListeners.resize();
assert.equal(window.document.documentElement.style.getPropertyValue('--game-height'), '568px', 'visible phone height is followed automatically');
assert.equal($('install').hidden, false, 'Install App is available in a normal browser');
window.dispatchEvent(new window.Event('appinstalled'));
assert.equal($('install').hidden, false, 'Install App remains available on the regular website after installation');
Object.defineProperty(window.navigator, 'standalone', {configurable: true, value: true});
window.eval('updateInstallVisibility()');
assert.equal($('install').hidden, true, 'Install App is hidden inside the installed app');
Object.defineProperty(window.navigator, 'standalone', {configurable: true, value: false});
window.eval('updateInstallVisibility()');
assert.equal($('install').hidden, false, 'Install App returns when the regular website is opened');
click($('openSetup'));
assert.equal(window.document.querySelectorAll('.modeGroup').length, 2);
assert.equal(window.document.querySelectorAll('.modeGroup')[0].querySelectorAll('.setupMode').length, 6);
assert.equal(window.document.querySelectorAll('.modeGroup')[1].querySelectorAll('.setupMode').length, 3);
assert.ok([...window.document.querySelectorAll('.setupMode small')].every(element => !/\d+ cards/.test(element.textContent)));
assert.equal($('categoryChoices').hidden, false, 'game categories appear before individual modes');
assert.equal($('modeReveal').hidden, true, 'mode list waits for a category choice');

click(window.document.querySelector('[data-category="competitive"]'));
assert.equal(window.document.querySelector('[data-category="competitive"].modeGroup').hidden, false);
click($('categoryReturn'));
assert.equal($('categoryChoices').hidden, false, 'players can return to the two category panels');
click(window.document.querySelector('[data-category="conversation"]'));
assert.equal($('categoryChoices').hidden, true);
assert.equal($('modeReveal').hidden, false);
assert.equal(window.document.querySelector('[data-category="conversation"].modeGroup').hidden, false);
assert.equal(window.document.querySelector('[data-category="competitive"].modeGroup').hidden, true);
click(window.document.querySelector('[data-mode="mizan"]'));
assert.equal($('gameShell').hidden, false, 'conversation begins directly');
assert.equal(window.document.documentElement.classList.contains('roundActive'), true, 'root viewport locks during gameplay');
const gameplayPan = new window.Event('touchmove', {bubbles: true, cancelable: true});
$('gameCard').dispatchEvent(gameplayPan);
assert.equal(gameplayPan.defaultPrevented, true, 'gameplay cannot rubber-band scroll');
assert.equal($('setupScreen').hidden, true);
assert.equal($('countdownScreen').hidden, true, 'conversation has no countdown');
assert.equal(countdownNotes.length, 0);
assert.equal($('playTimer').hidden, true);
assert.equal($('skip').hidden, true);
assert.equal($('correct').textContent, 'Next Prompt');
assert.equal($('answer').hidden, true);
click($('reveal'));
assert.equal($('answer').hidden, false);
assert.equal($('answer').getAttribute('aria-hidden'), 'false');
assert.equal($('ref').hidden, false);
click($('ref'));
assert.equal($('sourceSheet').hidden, false);
assert.ok($('fullSource').textContent.length > 0);
click($('sourceClose'));

click($('cardHome'));
assert.equal($('exitSheet').hidden, false);
click($('keepPlaying'));
assert.equal($('gameShell').hidden, false);
const conversationPrompt = $('question').textContent;
click($('cardHome'));
click($('confirmHome'));
assert.equal($('welcomeScreen').hidden, false);
assert.equal($('resumeSavedGame').hidden, false);
click($('settingsOpen'));
click($('resumeSavedGame'));
assert.equal($('question').textContent, conversationPrompt, 'resume returns to the same card');

click($('cardHome'));
click($('confirmHome'));
click($('openSetup'));
click(window.document.querySelector('[data-category="competitive"]'));
click(window.document.querySelector('[data-mode="all"]'));
assert.equal($('styleStep').hidden, false);
click(window.document.querySelector('[data-style="teams"]'));
assert.match($('modeInstruction').textContent, /Pass the phone/);
click($('beginGame'));
await wait(35);
assert.deepEqual(countdownNotes.slice(-5), [392, 440, 523.25, 659.25, 880]);
assert.equal($('countdownScreen').hidden, true);
if (!$('reveal').hidden) assert.equal($('answer').getAttribute('aria-hidden'), 'true');
assert.ok(wakeLockRequests >= 1, 'active play requests a wake lock');
assert.equal($('playTimer').textContent, '60', 'timed play begins at 60 seconds');
assert.equal(JSON.parse(window.localStorage.getItem('al-majlis-active-game-v41')).timerRunning, true);

visibilityState = 'hidden';
window.document.dispatchEvent(new window.Event('visibilitychange'));
assert.equal(JSON.parse(window.localStorage.getItem('al-majlis-active-game-v41')).timerRunning, false, 'backgrounding pauses the saved timer');
visibilityState = 'visible';
window.document.dispatchEvent(new window.Event('visibilitychange'));
await wait(2);
assert.equal(JSON.parse(window.localStorage.getItem('al-majlis-active-game-v41')).timerRunning, true, 'returning resumes the timer');

click($('correct'));
click($('correct'));
assert.equal($('pointToast'), null, 'Next does not open an Undo point pop-up');
await wait(8);
click($('finishRound'));
assert.match($('roundScore').textContent, /scored 1 point/, 'rapid double tap awards only one point');
assert.equal($('matchScoreboard').hidden, false, 'team totals are separated into a clear scoreboard');
assert.equal($('finalLabelA').textContent, 'Team A');
assert.equal($('finalLabelB').textContent, 'Team B');
click($('undoPoint'));
assert.match($('roundScore').textContent, /scored 0 points/);

for (let turn = 1; turn < 6; turn++) {
  const endedCard = $('question').textContent;
  click($('nextRound'));
  await wait(35);
  assert.notEqual($('question').textContent, endedCard, `turn ${turn + 1} starts on a fresh card`);
  click($('correct'));
  await wait(8);
  click($('finishRound'));
}

assert.equal($('roundHeading').textContent, 'MATCH COMPLETE');
assert.equal($('roundHistory').children.length, 6);
assert.equal($('finalA').textContent, '2');
assert.equal($('finalB').textContent, '3');
assert.match($('roundResult').textContent, /Team B wins/);
assert.equal($('roundScore').textContent, 'Final score');

click($('roundHome'));
assert.equal($('resumeSavedGame').hidden, false, 'completed game remains recoverable until discarded or replaced');
click($('settingsOpen'));
assert.equal($('settingsSheet').hidden, false);
click($('themeDark'));
assert.equal(window.document.documentElement.dataset.theme, 'dark', 'dark design can be selected in Settings');
assert.equal(window.localStorage.getItem('al-majlis-theme-v1'), 'dark');
click($('themeLight'));
assert.equal(window.document.documentElement.dataset.theme, 'light', 'light Design A can be restored');
click($('discardSavedGame'));
assert.equal($('resumeSavedGame').hidden, true);

dom.window.close();
console.log('dom: direct conversations, source dialog, confirmed exit, recovery, tap lock, scoring, and winner passed');
