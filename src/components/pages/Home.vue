<template>
  <section class="page page-home" itemprop="description">
    <div>
      <h1 itemprop="headline" class="squares-md">Our Advantages</h1>
      <p>
        The Attorneys of Decker & Rubin, PC have dedicated their careers to the representation of
        workers and their unions, with a special focus on the needs and interests of public safety
        workers. We have extensive experience representing unions in the public and private sectors,
        from organizing to collective bargaining to contract servicing.
      </p>
    </div>
  </section>
</template>

<style scoped>
  .page-home {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .page-home > div {
    margin: 0 auto;
    padding: 10rem 0 20rem 0;
    text-align: left;
    max-width: 86rem;
  }

  .page-home h1 {
    position: relative;
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 200;
    margin: 0 0 1em 0;
    color: rgb(var(--theme-white));
    left: calc(var(--size-square-md) * -1);
    top: calc(var(--size-square-md) * -1);
    padding-top: var(--size-square-md);
  }

  .page-home h1::before {
    left: -1rem;
    top: calc(var(--size-square-md) * -1)
  }

  .page-home p {
    color: rgb(var(--theme-ship-cove));
    font-size: 1.6rem;
    line-height: 2em;
    margin: 0;
    padding: 0;
  }
</style>
