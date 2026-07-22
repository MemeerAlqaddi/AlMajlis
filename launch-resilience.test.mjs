import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cardsSource = fs.readFileSync(new URL('../cards-data.js', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const dom = new JSDOM(html, {runScripts: 'outside-only', url: 'https://example.test/'});
const {window} = dom;

window.Audio = class { play() { return Promise.resolve(); } };
window.AudioContext = class {
  constructor() { this.currentTime = 0; this.state = 'running'; this.destination = {}; }
  createOscillator() { return {frequency: {setValueAtTime() {}}, connect() {}, start() {}, stop() {}}; }
  createGain() { return {gain: {setValueAtTime() {}, exponentialRampToValueAtTime() {}}, connect() {}}; }
  resume() { return Promise.resolve(); }
};
window.scrollTo = () => {};
window.requestAnimationFrame = callback => window.setTimeout(callback, 0);
window.navigator.serviceWorker = {register: () => Promise.resolve({update: () => Promise.resolve()})};
window.navigator.vibrate = () => true;
window.fetch = async () => ({ok: true, json: async () => ({success: 'true'})});

const storagePrototype = Object.getPrototypeOf(window.localStorage);
storagePrototype.getItem = () => { throw new window.DOMException('Storage blocked', 'SecurityError'); };
storagePrototype.setItem = () => { throw new window.DOMException('Storage blocked', 'SecurityError'); };
storagePrototype.removeItem = () => { throw new window.DOMException('Storage blocked', 'SecurityError'); };

const nativeSetInterval = window.setInterval.bind(window);
window.setInterval = (callback, delay) => nativeSetInterval(callback, delay === 1000 ? 3 : delay);
window.eval(`${cardsSource}\n${appSource}`);

const $ = id => window.document.getElementById(id);
const click = element => element.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

click($('openSetup'));
click(window.document.querySelector('[data-mode="all"]'));
click(window.document.querySelector('[data-style="teams"]'));
click($('beginGame'));
await wait(35);

assert.equal($('gameShell').hidden, false, 'game opens even when browser storage is unavailable');
assert.equal($('countdownScreen').hidden, true, 'countdown completes when browser storage is unavailable');
assert.ok($('question').textContent.length > 0, 'first card renders when browser storage is unavailable');

dom.window.close();
console.log('launch resilience: blocked browser storage cannot prevent Start Game or countdown');
