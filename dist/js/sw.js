self.addEventListener('install', e => e.waitUntil(
  caches
    .open('deckerrubin-v0')
    .then(cache => cache.addAll([
      '/',
      '/index.html',
      '/css/app.css',
      '/js/index.js'
    ]))
));

self.addEventListener('fetch', e => console.log(e.request.url) && e.respondWith(
  caches
    .match(e.request)
    .then(response => response || fetch(e.request))
));
