<template>
  <section class="page page-home" itemprop="description">
    <div class="advantages">
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
    padding: 10rem 0 0 0;
  }

  .squares-md {
    position: absolute;
    left: calc((var(--size-square-md) * -1) - 1rem);
    top: calc(var(--size-square-md) * -1.5);
    padding-top: var(--size-square-md);
  }

  .squares-sm {
    position: absolute;
    left: calc((var(--size-square-sm) * -1) - 1rem);
    top: calc(var(--size-square-sm) * -1.5);
    padding-top: var(--size-square-sm);
  }

  h1 {
    position: relative;
    display: inline-block;

    margin: 0 0 1em 0;
  }

  .advantages {
      margin: 0 auto;
      padding-bottom: 10rem;
      text-align: left;
      max-width: 86rem;
      position: relative;
  }

  .advantages h1 {
    font-size: 3.2rem;
    font-weight: 200;
    color: rgb(var(--theme-white));
  }

  .advantages p {
    color: rgb(var(--theme-ship-cove));
  }

  p, ul, li {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.8em;
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0 0 1em 5rem;
  }

  li {
    margin-top: 1em;
  }

  li::marker {
    color: rgb(var(--theme-red-ribbon));
  }

  a {
    color: rgb(var(--theme-st-tropaz));
    text-decoration: none;
  }

  a:hover {
    color: rgb(var(--theme-red-ribbon));
  }

  a.read-more {
    color: rgb(var(--theme-red-ribbon));
    font-weight: 500;
  }

  .chevron::before {
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.5em;
    position: relative;
    vertical-align: top;
    width: 0.45em;
    top: 0.2em;
    transform: rotate(135deg);

    transition: transform 0.25s ease-in, top 0.25s ease-in;
  }

  .expanded .chevron::before {
    transform: rotate(315deg);
    top: 0.5rem;
  }

  @media (max-width: 899px) {
    .page-home {
      margin-top: 31rem;
      padding: 10rem 4.5rem 0 4.5rem;
      word-wrap: break-word;
    }

    .page-home > div {
      text-align: center;
    }

    h1 {
      margin-top: 0.25em;
      text-align: center;
    }

    .advantages h1 {
      font-size: 3rem;
    }

    .covid-19 {
      margin: 0 -4.5rem;
      padding: 10rem 4.5rem;
    }

    .covid-19 h1 {
      font-size: 3rem;
    }

    .covid-19 h2 {
      text-align: center;
    }

    .squares-sm,
    .squares-md {
      position: relative;
      left: auto;
      top: auto;
      text-align: center;
    }

    a.read-more {
      font-size: 2rem;
    }

    .expanded .chevron::before {
      top: 1rem;
    }

    ul {
      margin: 0;
    }

    p, ul, li {
      text-align: left;
      font-size: 2rem;
    }
  }
</style>
