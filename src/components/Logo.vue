<template>
  <router-link
    to="/"
    @click.native="onClick"
    v-bind:class="{small: isSmall, large: !isSmall}"
    itemprop="image"
    aria-label="Decker-Rubin Logo"
  ></router-link>
</template>

<script>
  export default {
    props: {
      isSmall: Boolean
    },
    methods: {
      onClick: function () {
        window.scrollTo(0, 0);
      }
    }
  };
</script>

<style scoped>
  .large,
  .small {
    background-repeat: no-repeat;
    display: inline-block;
  }

  .large {
    background-image: url('../img/logo.svg');
    height: 4rem;
    justify-self: center;
    margin: 5rem 0 3rem 0;
    width: 24.5rem;
  }

  .small {
    background-image: url('../img/logo.svg');
    height: 2.6rem;
    width: 18rem;
  }

  @media (max-width: 899px) {
    .small {
      display: block;
      height: 3rem;
      width: 18.375rem;
    }

    .large {
      height: 3rem;
      width: 18.375rem;
      margin: 3rem 0 2rem 0;
    }
  }
</style>
