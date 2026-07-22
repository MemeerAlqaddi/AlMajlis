const CACHE='al-majlis-v24';
const ASSETS=['./','./index.html','./styles.css','./cards-data.js','./app.js','./manifest.webmanifest','./al-majlis-icon.svg','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./majlis-open.mp3','./majlis-select.mp3','./majlis-ready.mp3','./majlis-correct.mp3','./majlis-complete.mp3'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));return response}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response})));
});
