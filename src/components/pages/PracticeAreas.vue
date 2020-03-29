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
  h2 {
    position: relative;
    color: rgb(var(--theme-white));
    font-weight: 500;
    border-bottom: 2px solid rgb(var(--theme-midnight));
    padding: 0 0 1em 0;
    margin: 0;
  }

  h2::before {
    position: absolute;
    left: calc(var(--size-square-sm) * -2);
    top: calc(var(--size-square-sm) * -1);
  }

  p {
    font-size: 1.6rem;
    line-height: 1.75em;
    padding: 2em 0 8em 0;
    margin: 0;
  }

  @media (max-width: 899px) {
    [itemprop="mainContentOfPage"] {
      text-align: center;
    }

    [itemprop="mainContentOfPage"] > div {
      border-bottom: 2px solid rgb(var(--theme-midnight));
      margin-bottom: 8rem;
    }

    h2 {
      font-size: 3.6rem;
      border: none;
      padding: 0;
      display: inline-block;
      margin-top: calc(var(--size-square-sm) * 4);
    }

    h2::before {
      position: relative;
      left: 50%;
      top: calc(var(--size-square-sm) * -4);
      background-size: var(--size-square-md) var(--size-square-md);
      width: var(--size-square-md);
      height: var(--size-square-md);
    }

    p {
      font-size: 2.4rem;
      padding: 2em 0 6em 0;
    }
  }
</style>
