<template>
  <div class="podcast-player">
    <a href="#" class="podcast-player-close-button">×</a>
    <div class="content"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .podcast-player {
    position: fixed;
    bottom: calc(-1 * var(--podcast-player-height));
    left: 0;
    right: 0;
    height: var(--podcast-player-height);
    background: var(--theme-white);
    border-top: 1px solid var(--theme-light-gray);
    transition: bottom 1s;
  }

  .podcast-player .content {
    margin-right: 2.5rem;
  }

  .podcast-player-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    color: var(--theme-dark-gray);
    font-size: 3rem;
    font-weight: bold;
    text-decoration: none;
    background: var(--theme-soundcloud-gray);
    padding: 0 1rem;
    height: var(--podcast-player-height);
  }

  .podcast-player-close-button:hover {
    color: var(--theme-red);
  }

  body.podcast-active article {
    margin-bottom: var(--podcast-player-height);
  }

  body.podcast-active .podcast-player {
    bottom: 0;
  }
</style>
