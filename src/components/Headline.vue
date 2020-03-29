<template>
  <div itemprop="headline">
    <div class="squares-lg"></div>
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<style scoped>
  div[itemprop=headline] {
    position: relative;
    top: 8.4rem;
    max-width: var(--page-content-max-width);
    margin: 0 auto;
    height: var(--size-square-lg);
  }

  .squares-lg {
    position: absolute;
    top: -1rem;
  }

  h1 {
    position: relative;
    display: inline-block;
    margin: 0;
    font-size: 2.6rem;
    font-weight: 400;
    color: rgb(var(--theme-white));
    z-index: 2;
    line-height: var(--size-square-lg);
    padding-top: 1.25rem;
  }

  @media (max-width: 899px) {
    div[itemprop=headline] {
      top: 2rem;
      height: var(--size-square-lg);
      margin: 0 auto;
    }

    .squares-lg::before {
      background-size: var(--size-square-lg) var(--size-square-lg);
      width: var(--size-square-lg);
      height: var(--size-square-lg);
    }

    h1 {
      font-size: 2.4rem;
      line-height: var(--size-square-lg);
    }
  }
</style>
