const CACHE_NAME = 'swnq-v1';
const ASSETS_TO_CACHE = [
  '/SWNQ/',
  '/SWNQ/index.html',
  '/SWNQ/manifest.json',
  '/SWNQ/icon-192.png',
  '/SWNQ/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
