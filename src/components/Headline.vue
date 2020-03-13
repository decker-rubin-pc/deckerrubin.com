<template>
  <div itemprop="headline">
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<style scoped>
  div[itemprop=headline] {
    background-color: rgb(var(--theme-darkest-gray));
    padding: 12rem 0 8rem 0;
    text-align: center;
  }

  h1 {
    display: inline-block;
    position: relative;
    left: -5rem;
    margin: 0;
    padding: 0 0 0 10rem;
    font-size: 4.8rem;
    font-weight: normal;
    color: rgb(var(--theme-white));
    background-image: url('../img/squares-large.svg');
    background-repeat: no-repeat;
  }
</style>
