const CACHE_NAME = 'kline-practice-pwa-v3';
const OFFLINE_PAGE = './index.html';

const STATIC_ASSETS = [
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/K線新手完整教學圖.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(STATIC_ASSETS);
      const response = await fetch('./index.html', { cache: 'reload' });
      await cache.put(OFFLINE_PAGE, response);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Always try the network first for page navigation.
  // This prevents an old index.html from remaining visible after a GitHub update.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(OFFLINE_PAGE, copy));
          return response;
        })
        .catch(() => caches.match(OFFLINE_PAGE))
    );
    return;
  }

  // Static files: return cache quickly, while updating it in the background.
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkRequest = fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
      return cached || networkRequest;
    })
  );
});
