<template>
  <div itemprop="headline" class="squares-xl">
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<style scoped>
  div[itemprop=headline] {
    position: relative;
    top: 6.4rem;
    max-width: var(--page-content-max-width);
    margin: 0 auto;
    height: var(--size-square-xl);
  }

  div[itemprop=headline]::before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-position-x: 10rem;
    width: 100%;
  }

  h1 {
    position: relative;
    display: inline-block;
    margin: 0;
    font-size: 2.6rem;
    font-weight: 400;
    color: rgb(var(--theme-white));
    z-index: 2;
    line-height: var(--size-square-xl);
    padding-top: 1.25rem;
  }
</style>
