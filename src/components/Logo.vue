<template>
  <router-link
    to="/"
    v-bind:class="{small: isSmall, large: !isSmall}"
    itemprop="image"
    aria-label="Decker-Rubin Logo"
  ></router-link>
</template>

<script>
  export default {
    props: {
      isSmall: Boolean
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
    margin: 5.4rem 0;
    width: 24.5rem;
  }

  .small {
    background-image: url('../img/logo.svg');
    height: 2.6rem;
    width: 18rem;
  }
</style>
