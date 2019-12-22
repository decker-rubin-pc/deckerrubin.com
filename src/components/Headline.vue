<template>
  <div itemprop="headline">
    <h1><slot/></h1>
  </div>
</template>

<style scoped>
  div[itemprop=headline] {
    background-color: #020a1f;
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
    color: var(--theme-white);
    background-image: url('../img/sqaures-large.png');
    background-repeat: no-repeat;
  }
</style>
