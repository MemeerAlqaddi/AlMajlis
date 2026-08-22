const CACHE = 'al-majlis-v53-install-fix';

const ASSETS = [
  './',
  './index.html',
  './policies.html',
  './styles.css?v=51-launch',
  './monetization.css?v=5',
  './cards-data.js?v=52',
  './content/v52-words.js?v=52',
  './content/v52-decode.js?v=52',
  './content/v52-ayah.js?v=52',
  './content/v52-trivia.js?v=52',
  './content/v52-riddles.js?v=52',
  './content/v52-dilemmas.js?v=52',
  './content/v52-reflection.js?v=52',
  './content/v52-culture-evidence.js?v=52',
  './content/v52-culture.js?v=52',
  './app.js?v=52',
  './upgrade-v44.js?v=52',
  './monetization.js?v=6',
  './manifest.webmanifest?v=52-content',
  './owner-manifest.webmanifest',
  './al-majlis-icon.svg',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './assets/marble-light.webp',
  './assets/marble-dark.webp',
  './majlis-open.mp3',
  './majlis-select.mp3',
  './majlis-correct.mp3',
  './majlis-complete.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);

    // Cache each file separately so one unavailable optional file
    // cannot cause the entire service worker installation to fail.
    await Promise.allSettled(
      ASSETS.map(async asset => {
        const request = new Request(asset, { cache: 'reload' });
        const response = await fetch(request);

        if (!response.ok) {
          throw new Error(`Could not cache ${asset}`);
        }

        await cache.put(request, response);
      })
    );

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(key => key !== CACHE)
        .map(key => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);

        if (response.ok) {
          const cache = await caches.open(CACHE);
          cache.put('./index.html', response.clone()).catch(() => {});
        }

        return response;
      } catch {
        return (
          (await caches.match('./index.html')) ||
          (await caches.match('./'))
        );
      }
    })());

    return;
  }

  event.respondWith((async () => {
    try {
      const response = await fetch(request);

      if (response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone()).catch(() => {});
      }

      return response;
    } catch {
      return caches.match(request);
    }
  })());
});
