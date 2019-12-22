<template>
    <div id="app">
        <article itemscope itemtype="http://schema.org/WebSite">
            <header>
                <div>
                    <logo/>
                </div>

                <navigation v-bind:items="navigation"/>
            </header>

            <hero v-if="$route.path === '/'"/>

            <router-view></router-view>

            <footer>
                <div>
                    <logo is-small/>

                    <navigation v-bind:items="navigation" is-footer/>

                    <p>The material presented on this site is included with the understanding and agreement that Decker
                        &amp;amp; Rubin, PC is not engaged in rendering legal or other professional services by posting
                        said
                        material. The services of a competent professional should be sought if legal or other specific
                        expert assistance is required.</p>

                    <copyright/>
                </div>
            </footer>
        </article>

        <podcast-player/>
    </div>
</template>

<script>
  import Copyright from './Copyright.vue';
  import Hero from './Hero.vue';
  import Logo from './Logo.vue';
  import Navigation from './Navigation.vue';
  import PodcastPlayer from './PodcastPlayer.vue';

  export default {
    name: 'app',
    components: {
      Copyright,
      Hero,
      Logo,
      Navigation,
      PodcastPlayer
    },
    props: {
      navigation: Array
    }
  };
</script>

<style>

</style>
