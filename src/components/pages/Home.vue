<template>
  <section class="page page-home" itemprop="description">
    <div>
      <div class="squares-md"></div>
      <h1 itemprop="headline">Our Advantages</h1>
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
    margin: 0;
    padding: 10rem 0 20rem 0;
  }

  .page-home > div {
    margin: 0 auto;
    text-align: left;
    max-width: 86rem;
    position: relative;
  }

  .page-home .squares-md {
    position: absolute;
    left: calc((var(--size-square-md) * -1) - 1rem);
    top: calc(var(--size-square-md) * -1.5);
    padding-top: var(--size-square-md);
  }

  .page-home h1 {
    position: relative;
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 200;
    margin: 0 0 1em 0;
    color: rgb(var(--theme-white));
  }

  .page-home p {
    color: rgb(var(--theme-ship-cove));
    font-size: 1.6rem;
    line-height: 2em;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 899px) {
    .page-home {
      margin-top: 35rem;
      padding: 10rem 4.5rem;
    }

    .page-home > div {
      text-align: center;
    }

    .page-home h1 {
      font-size: 4.8rem;
      margin-top: 0.25em;
    }

    .page-home .squares-md {
      position: relative;
      left: auto;
      top: auto;
    }

    .page-home p {
      text-align: left;
      font-size: 2.4rem;
    }
  }
</style>
