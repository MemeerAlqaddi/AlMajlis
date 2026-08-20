import WebSocket from 'ws';

const targetUrl = process.argv[2];
const port = process.argv[3] || '9223';
if (!targetUrl) throw new Error('Pass the page URL to audit.');

const targetResponse = await fetch(
  `http://127.0.0.1:${port}/json/new?${encodeURIComponent('about:blank')}`,
  {method: 'PUT'}
);
if (!targetResponse.ok) throw new Error('Could not create an Edge audit tab.');
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
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Edge did not answer ${method}.`));
    }, 10000);
    pending.set(id, {
      resolve: result => { clearTimeout(timeout); resolve(result); },
      reject: error => { clearTimeout(timeout); reject(error); }
    });
    socket.send(JSON.stringify({id, method, params}));
  });
}

await call('Page.enable');
await call('Runtime.enable');
await call('Page.navigate', {url: targetUrl});
await new Promise(resolve => setTimeout(resolve, 5000));

const page = await call('Runtime.evaluate', {
  expression: `(async () => {
    const manifestUrl = document.querySelector('link[rel="manifest"]')?.href;
    const manifestResponse = manifestUrl ? await fetch(manifestUrl) : null;
    const manifest = manifestResponse?.ok ? await manifestResponse.json() : null;
    const registration = await navigator.serviceWorker?.getRegistration();
    return JSON.stringify({
      url: location.href,
      manifestUrl,
      manifestStatus: manifestResponse?.status || null,
      manifest,
      serviceWorkerSupported: 'serviceWorker' in navigator,
      serviceWorkerRegistered: Boolean(registration),
      serviceWorkerActive: Boolean(registration?.active),
      serviceWorkerControlled: Boolean(navigator.serviceWorker?.controller)
    });
  })()`,
  returnByValue: true,
  awaitPromise: true
});
const installability = await call('Page.getInstallabilityErrors')
  .catch(error => ({auditError: error.message, installabilityErrors: []}));

console.log(JSON.stringify({
  page: JSON.parse(page.result.value),
  installabilityAuditError: installability.auditError || null,
  installabilityErrors: installability.installabilityErrors
}, null, 2));

socket.close();
