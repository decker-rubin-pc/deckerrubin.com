<template>
  <section class="page page-practice-areas" itemscope itemtype="http://schema.org/CollectionPage">
    <headline>Practice Areas</headline>

    <div itemprop="mainContentOfPage">
      <div v-for="area in areas">
        <h2 class="squares-sm">{{area.title}}</h2>
        <p>{{area.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';
  import areas from '../../data/practice-areas';

  export default {
    components: {
      Headline
    },

    data: () => ({ areas })
  };
</script>

<style scoped>
  div[itemprop=mainContentOfPage] > div > h2 {
    position: relative;
    color: rgb(var(--theme-white));
    font-weight: 500;
    border-bottom: 2px solid rgb(var(--theme-midnight));
    padding: 0 0 1em 0;
    margin: 0;
  }

  div[itemprop=mainContentOfPage] > div > h2::before {
    position: absolute;
    left: calc(var(--size-square-sm) * -2);
    top: calc(var(--size-square-sm) * -1);
  }

  div[itemprop=mainContentOfPage] > div > p {
    font-size: 1.6rem;
    line-height: 1.75em;
    padding: 2em 0 8em 0;
    margin: 0;
  }
</style>
