<template>
  <section class="page-podcast" itemscope itemtype="http://schema.org/WebPage">
    <headline>Podcast</headline>

    <div itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Organization">
      <ul>
        <li v-for="item in items">
          <router-link
            v-bind:to="`/podcast/${item.permalink}`"
            v-bind:data-podcast-id='item.id'
            v-bind:data-podcast-title='item.title'>
            {{item.title}}
          </router-link>
        </li>
      </ul>

      <div class="player">
        <iframe
          v-if="item"
          v-bind:title="item.title"
          itemprop="audio"
          itemscope
          itemtype="http://schema.org/AudioObject"
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          v-bind:src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.id}&${config}`"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';

  const podcastPath = '/p/json';

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
      this.setContent();
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
      async setContent (id) {
        id = id || this.$route.params.id;

        const response = await fetch(podcastPath);
        const { collection = [] } = await response.json();
        this.items = collection.filter(item => item.public);

        if (id) {
          this.item = this.items.find(({ permalink }) => permalink === id);
        }
      }
    }
  };
</script>

<style scoped>
  .page-podcast {
    background-color: var(--theme-white);
    margin: 14rem 0 10rem 0;
    padding: 0;
  }

  div[itemprop=mainContentOfPage] {
    margin: 0 auto;
    padding: 10rem;
    max-width: var(--page-content-max-width);
    display: grid;
    grid-template-columns: 20rem auto;
    grid-template-rows: auto;
    grid-column-gap: 10rem;
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
    color: var(--theme-gray);
    text-decoration: none;
    font-weight: 200;
  }

  a.router-link-active {
    color: var(--theme-red);
  }

  a:hover {
    color: var(--theme-red);
  }
</style>
