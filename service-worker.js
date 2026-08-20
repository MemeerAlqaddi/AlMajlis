const CACHE = 'al-majlis-v52-content-review';
const ASSETS = [
  './', './index.html', './policies.html', './styles.css?v=51-launch', './monetization.css?v=5', './cards-data.js?v=52',
  './content/v52-words.js?v=52', './content/v52-decode.js?v=52', './content/v52-ayah.js?v=52', './content/v52-trivia.js?v=52', './content/v52-riddles.js?v=52',
  './content/v52-dilemmas.js?v=52', './content/v52-reflection.js?v=52', './content/v52-culture-evidence.js?v=52', './content/v52-culture.js?v=52',
  './app.js?v=52', './upgrade-v44.js?v=52', './monetization.js?v=5',
  './manifest.webmanifest?v=52-content', './owner-manifest.webmanifest', './owner?owner=1', './al-majlis-icon.svg', './apple-touch-icon.png',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  './assets/marble-light.webp', './assets/marble-dark.webp',
  './majlis-open.mp3', './majlis-select.mp3', './majlis-correct.mp3', './majlis-complete.mp3'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE).then(cache => cache.put('./index.html', response.clone()));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(fetch(request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(request, response.clone()));
    return response;
  }).catch(() => caches.match(request)));
});
