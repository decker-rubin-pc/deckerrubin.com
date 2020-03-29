<template>
  <section class="page page-practice-areas" itemscope itemtype="http://schema.org/CollectionPage">
    <headline>Practice Areas</headline>

    <div itemprop="mainContentOfPage">
      <div v-for="area in areas">
        <div class="squares-sm"></div>
        <h2>{{area.title}}</h2>
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
  [itemprop="mainContentOfPage"] > div {
    position: relative;
    margin: 0 20rem;
  }

  h2 {
    position: relative;
    color: rgb(var(--theme-white));
    font-weight: 400;
    border-bottom: 2px solid rgb(var(--theme-midnight));
    padding: 0 0 1em 0;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.75em;
    padding: 2em 0 8em 0;
    margin: 0;
    color: rgb(var(--theme-alto));
    font-weight: 300;
  }

  .squares-sm {
    position: absolute;
    left: calc(var(--size-square-sm) * -1);
    top: calc(var(--size-square-sm) * -0.5);
  }

  @media (max-width: 899px) {
    [itemprop="mainContentOfPage"] {
      text-align: left;
    }

    [itemprop="mainContentOfPage"] > div {
      border-bottom: 2px solid rgb(var(--theme-midnight));
      margin: 0 0 4rem 0;
    }

    h2 {
      font-size: 2.4rem;
      border: none;
      padding: 0;
      display: inline-block;
    }

    .squares-sm {
      margin-bottom: 2rem;
      position: relative;
      left: auto;
      top: auto;
    }

    .squares-sm::before {
      background-size: var(--size-square-md) var(--size-square-md);
      width: var(--size-square-md);
      height: var(--size-square-md);
    }

    p {
      font-size: 1.8rem;
      padding: 2em 0 3em 0;
    }
  }
</style>
