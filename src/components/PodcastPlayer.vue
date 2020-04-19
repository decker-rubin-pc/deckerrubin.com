<template>
  <div class="podcast-player">
    <h3>{{date}}</h3>
    <h2>{{title}}</h2>
    <p>{{description}}</p>

    <iframe
      itemprop="audio"
      itemscope
      itemtype="http://schema.org/AudioObject"
      width="100%"
      v-bind:height="height"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      v-bind:title="title"
      v-bind:src="src"></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      title: String,
      date: String,
      description: String,
      size: String
    },
    computed: {
      height () {
        switch (this.size) {
          case 'sm':
            return 20;
          case 'lg':
            return 300;
          case 'md':
          default:
            return 166;
        }
      },
      src () {
        const options = {
          url: `https%3A//api.soundcloud.com/tracks/${this.id}`,
          color: '%23f00045',
          auto_play: false,
          hide_related: true,
          show_comments: false,
          show_user: false,
          show_reposts: false,
          show_teaser: false,
          inverse: true,
          visual: this.size !== 'sm'
        };

        const optionsStr = Object
          .keys(options)
          .map(key => `${key}=${options[key]}`)
          .join('&');

        return `https://w.soundcloud.com/player/?${optionsStr}`;
      }
    }
  };
</script>

<style scoped>
  .podcast-player {
    margin-bottom: 10rem;
  }

  h2 {
    border-bottom: 2px solid rgb(var(--theme-midnight));
    margin: 0 0 1em 0;
    padding: 0 0 1em 0;
    font-size: 2rem;
    font-weight: 300;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(var(--theme-blue-jeans));
    margin: 0;
    padding: 0.5em 0;
  }

  p {
    margin: 0;
    padding: 1em 0;
    line-height: 1.5em;
  }
</style>
