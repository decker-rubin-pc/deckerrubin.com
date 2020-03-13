<template>
  <section class="page-podcast" itemscope itemtype="http://schema.org/WebPage">
    <headline>Podcast</headline>

    <div itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Organization">
      <p>Welcome to our podcast! We plan to post a podcast monthly (on or around the 1st of the month) in which we will
        both discuss cases and news stories regarding public safety unions and public safety officials in Massachusetts.
        We hope you enjoy. Please let us know what you think by emailing us.</p>

      <div class="player">
        <ul>
          <li v-for="item in items">
            <router-link
              v-bind:to="`/podcast/${item.permalink}`"
              v-bind:data-podcast-id='item.id'
              v-bind:data-podcast-title='item.title'>
              {{new Date(item.created_at).toLocaleDateString()}} {{item.title}}
            </router-link>
          </li>
        </ul>

        <div class="sc-player">
          <span>Loading...</span>

          <iframe
            v-if="item"
            v-bind:title="item.title"
            itemprop="audio"
            itemscope
            itemtype="http://schema.org/AudioObject"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            v-bind:src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.id}&color=%23f00045&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';

  const podcastPath = '/p/json';
  let _cache;

  const options = {
    color: '#f00045',
    inverse: false,
    auto_play: true,
    show_user: true,
    download: true,
    single_active: true,
    hide_related: false,
    show_comments: true,
    show_reposts: false,
    show_teaser: true
  };

  const config = Object
    .keys(options)
    .reduce((arr, key) => [...arr, `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`], [])
    .join('&');

  export default {
    data: () => ({
      items: [],
      item: null,
      config
    }),

    components: {
      Headline
    },

    created () {
      if (this.$route.params.id) {
        this.setContent();
      } else {
        (async () => {
          const items = await this.getItems();
          const [{ permalink }] = items || [];
          await this.$router.push(`/podcast/${permalink}`);
        })();
      }
    },

    beforeRouteEnter (to, from, next) {
      next(vm => vm.setContent(to.params.id));
    },

    beforeRouteUpdate (to, from, next) {
      this.item = null;
      this.setContent(to.params.id);
      next();
    },

    methods: {
      async getItems () {
        if (_cache) return _cache;

        const response = await fetch(podcastPath);
        const { collection = [] } = await response.json();
        _cache = collection.filter(item => item.public);
        console.log(_cache);
        return _cache;
      },

      async setContent (id) {
        this.items = await this.getItems();

        id = id || this.$route.params.id;

        if (id) {
          this.item = this.items.find(({ permalink }) => permalink === id);
        } else {
          this.item = this.items[0];
        }
      }
    }
  };
</script>

<style scoped>
  .page-podcast {
    background-color: rgb(var(--theme-white));
    margin: 14rem 0 10rem 0;
    padding: 0;
  }

  div[itemprop=mainContentOfPage] {
    margin: 0 auto;
    padding: 10rem;
    max-width: var(--page-content-max-width);
  }

  div[itemprop=mainContentOfPage] p {
    font-size: 1.8rem;
    font-weight: 100;
    text-align: center;
    margin: 0 0 10rem 0;
  }

  .player {
    display: grid;
    grid-template-columns: 30rem auto;
    grid-template-rows: auto;
    grid-column-gap: 10rem;
  }

  .sc-player {
    width: 100%;
    height: 30rem;
    background: rgb(var(--theme-light-gray));
    position: relative;
  }

  .sc-player span {
    display: block;
    text-align: center;
    line-height: 30rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }

  .sc-player iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    line-height: 1.5em;
  }

  a {
    color: rgb(var(--theme-gray));
    text-decoration: none;
    font-weight: 200;
  }

  a.router-link-active {
    color: rgb(var(--theme-red));
  }

  a:hover {
    color: rgb(var(--theme-red));
  }
</style>
