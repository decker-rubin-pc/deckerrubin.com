self.addEventListener('install', e => e.waitUntil(
  caches
    .open('deckerrubin-v1')
    .then(cache => cache.addAll([
      '/',
      '/index.html',
      '/404.html',
      '/bundle.js',
      '/icon.png',
      '/icon.svg',
      '/9f5e7625ea26cf950a32b811314532fb.jpg',
      '/83423b18bd3836acada79f4db7bcd47f.jpg'
    ]))
));

self.addEventListener('fetch', e => console.log(e.request.url) && e.respondWith(
  caches
    .match(e.request)
    .then(response => response || fetch(e.request))
));
