<template>
  <header>
    <div>
      <logo/>
    </div>

    <navigation v-bind:items="navigation"/>
  </header>
</template>

<script>
  import Logo from './Logo.vue';
  import Navigation from './Navigation.vue';

  export default {
    components: {
      Logo,
      Navigation
    },
    props: {
      navigation: Array
    }
  };
</script>

<style scoped>
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
</style>
