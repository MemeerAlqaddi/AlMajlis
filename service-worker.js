const CACHE = 'al-majlis-v38';
const ASSETS = [
  './', './index.html', './styles.css?v=38', './cards-data.js?v=38', './app.js?v=38',
  './manifest.webmanifest', './al-majlis-icon.svg', './apple-touch-icon.png',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  './assets/marble-light.webp', './assets/marble-dark.webp',
  './majlis-open.mp3', './majlis-select.mp3', './majlis-correct.mp3', './majlis-complete.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) caches.open(CACHE).then(cache => cache.put('./index.html', response.clone()));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) caches.open(CACHE).then(cache => cache.put(request, response.clone()));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
