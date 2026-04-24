self.addEventListener('install', e => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  // basic offline support (can expand later)
});
