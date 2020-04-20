self.addEventListener('install', e => e.waitUntil(
  caches
    .open('deckerrubin-v1.01')
    .then(cache => cache.addAll([
      '/',
      '/index.html',
      '/404.html',
      '/bundle.js',
      '/icon-32.png',
      '/icon-192.png',
      '/icon-512.png',
      '/icon.svg',
      '/9f5e7625ea26cf950a32b811314532fb.jpg',
      '/55e14af831dfb2273056a68b0f3be8fe.webp',
      '/fbe3c930b05b571162d834dbb92003d3.jpg'
    ]))
));

self.addEventListener('fetch', e => console.log(e.request.url) && e.respondWith(
  caches
    .match(e.request)
    .then(response => response || fetch(e.request))
));
