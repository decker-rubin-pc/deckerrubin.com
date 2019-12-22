<template>
  <nav v-bind:class="{footer: isFooter, header: !isFooter}">
    <ul itemtype="https://schema.org/SiteNavigationElement" role="menu">
      <li v-for="{path, text} in items" itemprop="name" role="menuitem">
        <router-link v-bind:to="{path}" itemprop="url">{{text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      items: Array,
      isFooter: Boolean
    }
  };
</script>

<style scoped>
  .header {
    background: var(--theme-white);
    border-bottom: 0.5rem solid var(--theme-red);
    border-left: 1px solid var(--theme-light-gray);
    border-right: 1px solid var(--theme-light-gray);
    justify-self: center;
    margin-top: -1px;
  }

  .header ul {
    display: block;
    margin: 0 auto;
    padding: 0;
  }

  .header ul li,
  .footer,
  .footer ul,
  .footer ul li {
    display: inline-block;
  }

  .header ul li a {
    color: var(--theme-gray);
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1em 5em;
    text-decoration: none;
  }

  .header ul li a.router-link-active,
  .header ul li a:hover {
    color: var(--theme-red);
    font-weight: 200;
  }

  .footer {
    margin: 0 0 4rem 10rem;
  }

  .footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer ul li a {
    color: var(--theme-white);
    text-decoration: none;
    padding: 1em 3em;
  }

  .footer ul li a.router-link-active,
  .footer ul li a:hover {
    color: var(--theme-red);
  }
</style>
