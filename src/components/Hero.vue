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
    background-image: url('../img/decker-rubin-feature-banner.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 1325px auto;
    width: 100%;
    height: 85rem;
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
    width: 50rem;
    height: 50rem;
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
    padding: 0.5em 1em;
    color: rgb(var(--theme-white));
    font-size: 1.8rem;
    font-weight: 100;
    display: inline-block;
    text-decoration: none;
  }

  .hero a:hover {
    background-color: rgb(var(--theme-red-ribbon));
  }

  @media (max-width: 899px) {
    .hero {
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 85rem;
      padding-top: 85rem;
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
      font-size: 2.4rem;
    }

    .hero a {
      display: block;
      text-align: center;
      border-radius: 2em;
      padding: 0.5em 1em;
      font-size: 3.6rem;
    }
  }
</style>
