(async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/js/sw.js')
      .then(function () { console.log('Service Worker Registered'); });
  }

  //const podcastRSS = '/podcast/rss';
  //const response = await fetch(podcastRSS);
  const podcastJSON = '/podcast/json';
  const response = await fetch(podcastJSON);

  const result = await response.json();
  console.log(result);
})();
