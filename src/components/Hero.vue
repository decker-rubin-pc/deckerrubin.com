<template>
  <section class="hero">
    <div>
      <div itemprop="alternativeHeadline">
        <h1>Proudly serving<br/><b>Unions</b></h1>
        <p>and their members in both the public and private sectors.</p>
        <br/>
        <router-link to="/contact" itemprop="url">Let's Talk</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    position: relative;
    background-color: rgb(var(--theme-white));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vw * (800 / 1920));
    max-height: 100rem;
    margin-top: 13.6rem;
  }

  body.no-webp .hero {
    background-image: url('../img/decker-rubin-feature-banner.jpg');
  }

  body.webp-lossy .hero {
    background-image: url('../img/decker-rubin-feature-banner.webp');
  }

  .hero > div {
    width: 100%;
    height: 100%;
    max-width: var(--page-content-max-width);
    margin: 0 auto;
    position: relative;
  }

  .hero div[itemprop=alternativeHeadline] {
    position: absolute;
    right: -5rem;
    bottom: -10rem;
    background: rgba(var(--theme-midnight), 0.9);
    color: rgb(var(--theme-white));
    padding: 5rem;
    width: 55rem;
    height: 31rem;
  }

  .hero h1 {
    font-size: 3.6rem;
    font-weight: 100;
    margin: 0 0 0.5em 0;
  }

  .hero p {
    font-size: 1.8rem;
    font-weight: 100;
    display: inline-block;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    margin: 0 0 2em 0;
  }

  .hero b {
    display: inline-block;
    font-weight: 300;
  }

  .hero a {
    background-color: rgb(var(--theme-shiraz));
    border-radius: 2em;
    padding: 1em 2em;
    color: rgb(var(--theme-white));
    font-size: 1.6rem;
    font-weight: 300;
    display: inline-block;
    text-decoration: none;
  }

  .hero a:hover {
    background-color: rgb(var(--theme-red-ribbon));
  }

  @media (max-width: 899px) {
    .hero {
      padding-top: calc(100vw * (1325 / 1920));
      margin-top: 12.9rem;
    }

    body.no-webp .hero {
      background-image: url('../img/decker-rubin-feature-banner-mobile.jpg');
    }

    body.webp-lossy .hero {
      background-image: url('../img/decker-rubin-feature-banner-mobile.webp');
    }

    .hero div[itemprop=alternativeHeadline] {
      position: relative;
      right: auto;
      bottom: auto;
      background: rgba(var(--theme-midnight), 1);
      padding: 5rem;
      width: 100%;
      height: auto;
    }

    .hero p {
      font-size: 1.8rem;
    }

    .hero a {
      display: block;
      font-weight: 400;
      width: 100%;
      text-align: center;
    }
  }
</style>
