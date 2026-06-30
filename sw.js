const CACHE_NAME = 'airbridge-v2'; // Changing this triggers an update

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Force the new SW to activate immediately
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.delete(CACHE_NAME)); // Delete old cache
});

self.addEventListener('fetch', () => {});