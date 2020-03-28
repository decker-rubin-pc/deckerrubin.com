<template>
  <div id="app">
    <article itemscope itemtype="http://schema.org/WebSite">
      <header>
        <div>
          <logo/>
        </div>

        <navigation v-bind:items="navigation"/>
      </header>

      <hero v-if="$route.path === '/'"/>

      <div class="view">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

      <footer>
        <logo is-small/>

        <navigation v-bind:items="navigation" is-footer/>

        <p class="body">
          The material presented on this site is included with the understanding and agreement that Decker &amp;
          Rubin, PC is not engaged in rendering legal or other professional services by posting said material. The
          services of a competent professional should be sought if legal or other specific expert assistance is
          required.
        </p>

        <copyright/>
      </footer>
    </article>
  </div>
</template>

<script>
  import Copyright from './Copyright.vue';
  import Hero from './Hero.vue';
  import Logo from './Logo.vue';
  import Navigation from './Navigation.vue';

  export default {
    name: 'app',
    components: {
      Copyright,
      Hero,
      Logo,
      Navigation
    },
    props: {
      navigation: Array
    }
  };
</script>

<style scoped>
  article {
    font-size: 1.4rem;
  }

  header {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    height: 20rem;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  header > div {
    background: rgb(var(--theme-white));
    border-bottom: 1px solid rgb(var(--theme-alto));
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .view {
    background: rgb(var(--theme-blue-charcoal));
  }

  article > footer {
    background: rgb(var(--theme-white));
    color: rgb(var(--theme-gray));
    margin: 0 auto;
    max-width: var(--page-content-max-width);
    padding: 10rem 1rem;

    display: grid;
    grid-template-columns: 18rem auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "logo navigation" "body body" "copyright copyright";
  }

  article > footer > a {
    grid-area: logo;
  }

  article > footer > nav {
    grid-area: navigation;
  }

  article > footer > .body {
    grid-area: body;
  }

  article > footer > .copyright {
    grid-area: copyright;
  }
</style>
