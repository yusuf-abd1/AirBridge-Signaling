const CACHE_NAME = 'airbridge-v2'; 
self.addEventListener('install', (event) => {
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.delete(CACHE_NAME)); 
});

self.addEventListener('fetch', () => {});
