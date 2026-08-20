import WebSocket from 'ws';

const targetUrl = process.argv[2];
const port = process.argv[3];
if (!targetUrl || !port) throw new Error('Pass the page URL and Edge debugging port.');

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
const errors = [];
const dialogs = [];
socket.on('message', raw => {
  const message = JSON.parse(String(raw));
  if (message.method === 'Page.javascriptDialogOpening') {
    dialogs.push({type: message.params.type, message: message.params.message});
    const id = ++nextId;
    socket.send(JSON.stringify({
      id,
      method: 'Page.handleJavaScriptDialog',
      params: {accept: false}
    }));
  }
  if (message.method === 'Runtime.exceptionThrown') {
    errors.push(message.params.exceptionDetails?.text || 'JavaScript exception');
  }
  if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') {
    errors.push(message.params.entry.text);
  }
  if (message.method === 'Network.responseReceived' && message.params.response.status >= 400) {
    errors.push(`${message.params.response.status} ${message.params.response.url}`);
  }
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

async function evaluate(expression) {
  const result = await call('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await call('Page.enable');
await call('Runtime.enable');
await call('Log.enable');
await call('Network.enable');
await call('Page.navigate', {url: targetUrl});
await new Promise(resolve => setTimeout(resolve, 4000));

const before = await evaluate(`JSON.stringify((() => {
  const button = document.getElementById('openSetup');
  const rect = button?.getBoundingClientRect();
  const top = rect ? document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2) : null;
  return {
    url: location.href,
    readyState: document.readyState,
    title: document.title,
    appLoaded: typeof showScreen === 'function',
    buttonPresent: Boolean(button),
    buttonDisabled: Boolean(button?.disabled),
    buttonHandler: typeof button?.onclick,
    buttonAtTapPoint: top?.id || top?.tagName || null,
    welcomeHidden: document.getElementById('welcomeScreen')?.hidden,
    setupHidden: document.getElementById('setupScreen')?.hidden,
    visibleDialogs: [...document.querySelectorAll('[role="dialog"]')]
      .filter(element => !element.hidden).map(element => element.id)
  };
})())`);

await evaluate(`document.getElementById('openSetup')?.click()`);
await new Promise(resolve => setTimeout(resolve, 500));

const after = await evaluate(`JSON.stringify({
  welcomeHidden: document.getElementById('welcomeScreen')?.hidden,
  setupHidden: document.getElementById('setupScreen')?.hidden,
  categoryHidden: document.getElementById('categoryChoices')?.hidden
})`);

console.log(JSON.stringify({
  before: JSON.parse(before),
  after: JSON.parse(after),
  dialogs,
  errors
}, null, 2));
socket.close();
