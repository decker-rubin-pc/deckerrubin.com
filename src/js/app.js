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

  const $podcastPlayerContent = document.querySelector('#podcast-player .content');
  const $podcastPlayerCloseButton = document.getElementById('podcast-player-close-button');

  const getPodcastPlayer = ({id, title}) => {
    const options = {
      color: '#f00045',
      inverse: false,
      auto_play: true,
      show_user: true,
      download: true,
      single_active: true,
      hide_related: false,
      show_comments: true,
      show_reposts: false,
      show_teaser: true
    };

    const sOptions = Object
      .keys(options)
      .reduce((arr, key) => [...arr, `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`], [])
      .join('&');

    const height = 166; // Full player

    return `<iframe
      title="${title}"
      itemprop="audio"
      itemscope
      itemtype="http://schema.org/AudioObject"
      width="100%"
      height="${height}"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&${sOptions}"
    ></iframe>`;
  };

  const getPodcastItemHTML = ({id, title}) =>
    `<a href='#' data-podcast-id='${id}' data-podcast-title='${title}'>${title}</a>`;

  const playPodcast = data => {
    $podcastPlayerContent.innerHTML = getPodcastPlayer(data);
    document.body.classList.add('podcast-active');
  };

  const stopPodcast = () => {
    $podcastPlayerContent.innerHTML = '';
    document.body.classList.remove('podcast-active');
  };

  $podcastPlayerCloseButton.addEventListener('click', e => {
    stopPodcast();
    e.preventDefault();
  });

  //const podcastRSS = '/podcast/rss';
  //const response = await fetch(podcastRSS);
  const podcastJSON = '/podcast/json';
  const response = await fetch(podcastJSON);

  const result = await response.json();
  console.log(result);

  // @todo Rework this so we have a player at the bottom of the page.
  if (result.collection) {
    const $podcastList = document.querySelector('#podcast ul');

    $podcastList.innerHTML = result
      .collection
      .filter(item => item.public)
      .map(getPodcastItemHTML)
      .map(html => `<li>${html}</li>`)
      .join('');
  }

  document.addEventListener('click', e => {
    const $el = e.target;
    const podcastID = $el.getAttribute('data-podcast-id');
    const podcastTitle = $el.getAttribute('data-podcast-title');

    if (podcastID) {
      playPodcast({id: podcastID, title: podcastTitle});
      e.preventDefault();
    }
  });
})();
