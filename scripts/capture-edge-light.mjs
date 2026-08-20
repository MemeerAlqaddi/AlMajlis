import {writeFile} from 'node:fs/promises';
import WebSocket from 'ws';

const [targetUrl, port, outputPath] = process.argv.slice(2);
if (!targetUrl || !port || !outputPath) {
  throw new Error('Pass the page URL, Edge debugging port, and screenshot path.');
}

const targetResponse = await fetch(
  `http://127.0.0.1:${port}/json/new?${encodeURIComponent('about:blank')}`,
  {method: 'PUT'}
);
const target = await targetResponse.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.once('open', resolve);
  socket.once('error', reject);
});

let nextId = 0;
const pending = new Map();
socket.on('message', raw => {
  const message = JSON.parse(String(raw));
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  if (message.error) request.reject(new Error(message.error.message));
  else request.resolve(message.result);
});

function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, {resolve, reject});
    socket.send(JSON.stringify({id, method, params}));
    setTimeout(() => {
      if (!pending.has(id)) return;
      pending.delete(id);
      reject(new Error(`Edge did not answer ${method}.`));
    }, 10000);
  });
}

await call('Page.enable');
await call('Runtime.enable');
await call('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true
});
await call('Page.navigate', {url: targetUrl});
await new Promise(resolve => setTimeout(resolve, 3500));
await call('Runtime.evaluate', {
  expression: `localStorage.setItem('al-majlis-theme-v1', 'light'); document.documentElement.dataset.theme = 'light';`,
  returnByValue: true
});
await new Promise(resolve => setTimeout(resolve, 800));

const state = await call('Runtime.evaluate', {
  expression: `JSON.stringify({
    theme: document.documentElement.dataset.theme,
    marble: getComputedStyle(document.documentElement).getPropertyValue('--marble').trim(),
    background: getComputedStyle(document.body).backgroundImage,
    startGamePresent: Boolean(document.getElementById('openSetup'))
  })`,
  returnByValue: true
});
const screenshot = await call('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: false,
  fromSurface: true
});
await writeFile(outputPath, Buffer.from(screenshot.data, 'base64'));
console.log(state.result.value);
socket.close();
