<template>
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
</template>

<script>
  import Copyright from './Copyright.vue';
  import Logo from './Logo.vue';
  import Navigation from './Navigation.vue';

  export default {
    components: {
      Copyright,
      Logo,
      Navigation
    },
    props: {
      navigation: Array
    }
  };
</script>

<style scoped>
  footer {
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

  footer > a {
    grid-area: logo;
  }

  footer > nav {
    grid-area: navigation;
  }

  footer > .body {
    grid-area: body;
  }

  footer > .copyright {
    grid-area: copyright;
  }

  @media (max-width: 899px) {
    footer {
      display: block;
      padding: 14rem 3.5rem;
    }

    footer .body {
      font-size: 2.4rem;
      line-height: 1.5em;
    }

    footer .copyright {
      font-size: 2.4rem;
      line-height: 1.5em;
    }
  }
</style>
