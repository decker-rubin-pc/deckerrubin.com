<template>
  <section class="page page-podcast" itemscope itemtype="http://schema.org/WebPage">
    <headline>Podcast</headline>

    <div itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Organization">
      <div class="squares-sm"></div>

      <div class="body">
        <p>Welcome to our podcast!</p>

        <p>
          We plan to post a podcast monthly (on or around the 1st of the month) in which we will both discuss cases
          and news stories regarding public safety unions and public safety officials in Massachusetts.
          We hope you enjoy. Please let us know what you think by emailing us.
        </p>
      </div>

      <podcast-player
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:id="item.id"
        v-bind:title="item.title"
        v-bind:date="new Date(item.created_at).toLocaleDateString().replace(/\//gim, '.')"
        v-bind:description="item.description"
        size="md"
      />
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';
  import PodcastPlayer from '../PodcastPlayer.vue';

  const podcastPath = '/p/json';
  let _cache;

  export default {
    data: () => ({
      items: []
    }),

    components: {
      PodcastPlayer,
      Headline
    },

    created () {
      (async () => { this.items = await this.getItems(); })();
    },

    methods: {
      async getItems () {
        if (_cache) return _cache;

        const response = await fetch(podcastPath);
        const { collection = [] } = await response.json();
        _cache = collection.filter(item => item.public);
        console.log(_cache);
        return _cache;
      }
    }
  };
</script>

<style scoped>
  .body {
    margin: 0 auto 10rem auto;
    max-width: 50%;
  }

  p {
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 1.5em;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .squares-sm {
    margin: 0 auto 4rem auto;
    width: 1.6rem;
    height: 1.6rem;
  }

  @media (max-width: 899px) {
    .body {
      max-width: initial;
    }

    p {
      font-size: 2.4rem;
    }

    .squares-sm::before {
      background-size: var(--size-square-md) var(--size-square-md);
      width: var(--size-square-md);
      height: var(--size-square-md);
    }
  }
</style>
