<template>
  <section class="page page-podcast" itemscope itemtype="http://schema.org/WebPage">
    <headline>Podcast</headline>

    <div itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Organization">
      <div class="squares-sm"></div>

      <p>
        Welcome to our podcast!
        <br/>We plan to post a podcast monthly (on or around the 1st of the month) in which we will both
        <br/>discuss cases and news stories regarding public safety unions and public safety officials in Massachusetts.
        <br/>We hope you enjoy. Please let us know what you think by emailing us.
      </p>

      <podcast-player
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:id="item.id"
        v-bind:title="item.title"
        v-bind:date="new Date(item.created_at).toLocaleDateString().replace(/\//gim, '.')"
        v-bind:description="item.description"
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
  div[itemprop=mainContentOfPage] p {
    font-size: 1.8rem;
    font-weight: 100;
    text-align: center;
    margin: 0 0 10rem 0;
  }

  .squares-sm {
    margin: 0 auto 4rem auto;
    width: 1.6rem;
    height: 1.6rem;
  }

  p {
    line-height: 1.5em;
  }
</style>
