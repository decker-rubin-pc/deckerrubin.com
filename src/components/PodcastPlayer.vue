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
      height="20"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      v-bind:title="title"
      v-bind:src="src"></iframe>

    <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src=""></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      id: Number,
      title: String,
      date: String,
      description: String
    },
    computed: {
      src () {
        return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.id}&color=%23f00045&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&inverse=true`;
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
    font-weight: 100;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 100;
    color: rgb(var(--theme-blue-jeans));
    margin: 0;
    padding: 0.5em 0;
  }

  p {
    margin: 0;
    padding: 2em 0 4em 0;
  }
</style>
