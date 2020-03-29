<template>
  <div id="app">
    <article itemscope itemtype="http://schema.org/WebSite">
      <page-header v-bind:navigation="navigation"/>

      <hero v-if="$route.path === '/'"/>

      <div class="view">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

      <page-footer v-bind:navigation="navigation"/>
    </article>
  </div>
</template>

<script>
  import Hero from './Hero.vue';
  import PageHeader from './PageHeader.vue';
  import PageFooter from './PageFooter.vue';

  export default {
    name: 'app',
    components: {
      Hero,
      PageHeader,
      PageFooter
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

  .view {
    background: rgb(var(--theme-blue-charcoal));
  }
</style>
