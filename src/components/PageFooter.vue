<template>
  <footer>
    <div class="inner">
      <logo is-small/>

      <navigation v-bind:items="navigation" is-footer/>

      <p class="body">
        The material presented on this site is included with the understanding and agreement that Decker &amp;
        Rubin, PC is not engaged in rendering legal or other professional services by posting said material. The
        services of a competent professional should be sought if legal or other specific expert assistance is
        required.
      </p>

      <copyright/>
    </div>
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
    background: rgb(var(--theme-white-whale));
    color: rgb(var(--theme-gray));
    padding: 10rem 1rem;
  }

  .inner {
    margin: 0 auto;
    max-width: var(--page-content-max-width);
    display: grid;
    grid-template-columns: 18rem auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "logo navigation" "body body" "copyright copyright";
  }

  a {
    grid-area: logo;
  }

  nav {
    grid-area: navigation;
  }

  .body {
    grid-area: body;
  }

  .copyright {
    grid-area: copyright;
  }

  @media (max-width: 899px) {
    footer {
      display: block;
      padding: 5rem 3.5rem 2rem 3.5rem;
    }

    .inner {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
      grid-template-areas: "logo" "navigation" "body" "copyright";
    }

    .body {
      font-size: 1.8rem;
      line-height: 1.5em;
    }

    .copyright {
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
</style>
