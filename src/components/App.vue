<template>
  <div id="app">
    <article itemscope itemtype="http://schema.org/WebSite">
      <page-header v-bind:navigation="navigation"/>

      <hero v-if="$route.path === '/'"/>

      <div class="view">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

      <page-footer v-bind:navigation="navigation"/>
    </article>
  </div>
</template>

<script>
  import Hero from './Hero.vue';
  import PageHeader from './PageHeader.vue';
  import PageFooter from './PageFooter.vue';

  export default {
    name: 'app',
    components: {
      Hero,
      PageHeader,
      PageFooter
    },
    props: {
      navigation: Array
    },
    methods: {
      checkWebP: () => {
        const features = ['lossy', 'lossless', 'alpha', 'animation'];

        const testImages = {
          lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
          lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
          alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
          animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
        };

        let hasWebPSupport = false;

        features.forEach(feature => {
          const img = new Image();

          img.onload = () => {
            if (img.width && img.height) {
              document.body.classList.add(`webp-${feature}`);
            }
          };

          img.src = 'data:image/webp;base64,' + testImages[feature];

          hasWebPSupport = true;
        });

        if (!hasWebPSupport) {
          document.body.classList.add('no-webp');
        }
      }
    },
    beforeMount () {
      this.checkWebP();
    }
  };
</script>

<style scoped>
  article {
    font-size: 1.4rem;
  }

  .view {
    background: rgb(var(--theme-blue-charcoal));
  }
</style>
