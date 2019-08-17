(async () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/js/sw.js')
      .then(function () { console.log('Service Worker Registered'); });
  }

  const $anchors = [...document.querySelectorAll('a')];
  const $validAnchors = $anchors.filter($el => $el.getAttribute('href'));
  const $externalAnchors = $validAnchors.filter($el => $el.hostname !== location.hostname);
  const $navAnchors = $validAnchors
    .filter($el => $el.getAttribute('href') !== '#')
    .filter($el => $el.getAttribute('href').startsWith('#'));

  // Open external links in new window
  $externalAnchors.forEach($el => $el.target = '_blank');

  // Navigation
  // @todo Tighten this up. Contact page can never be active.
  const $sections = [...document.querySelectorAll('section')];

  const intersectionObserver = new IntersectionObserver(entries => {
    const firstVisible = entries.find(entry => entry.intersectionRatio > 0);

    if (firstVisible) {
      const id = firstVisible.target.id;
      const $activeNavAnchors = $navAnchors.filter($el => $el.getAttribute('href') === `#${id}`);

      if ($activeNavAnchors.length) {
        $navAnchors.forEach($el => $el.classList.remove('active'));
        $activeNavAnchors.forEach($el => $el.classList.add('active'));
      }
    }
  });

  $sections.forEach($el => intersectionObserver.observe($el));

  // Podcast

  //const podcastRSS = '/podcast/rss';
  //const response = await fetch(podcastRSS);
  const podcastJSON = '/podcast/json';
  const response = await fetch(podcastJSON);

  const result = await response.json();
  console.log(result);
})();
