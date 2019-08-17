(async () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/js/sw.js')
      .then(function () { console.log('Service Worker Registered'); });
  }

  // Open external links in new window
  [...document.getElementsByTagName('a')]
    .filter($el => $el.getAttribute('href'))
    .filter($el => $el.hostname !== location.hostname)
    .forEach($el => $el.target = '_blank');


  // Podcast

  //const podcastRSS = '/podcast/rss';
  //const response = await fetch(podcastRSS);
  const podcastJSON = '/podcast/json';
  const response = await fetch(podcastJSON);

  const result = await response.json();
  console.log(result);
})();
