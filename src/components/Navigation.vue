<template>
  <nav v-bind:class="classObject">
    <a class="hamburger" href="#" v-on:click="onHamburgerClick"></a>

    <ul itemtype="https://schema.org/SiteNavigationElement" role="menu">
      <li v-for="{path, text} in items" itemprop="name" role="menuitem">
        <router-link v-bind:to="{path}" itemprop="url" @click.native="onMenuClick">{{text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      items: Array,
      isFooter: Boolean
    },
    data: function () {
      return { isExpanded: false };
    },
    computed: {
      classObject: function () {
        return {
          footer: this.isFooter,
          header: !this.isFooter,
          isExpanded: this.isExpanded
        };
      }
    },
    methods: {
      onHamburgerClick: function (e) {
        e.preventDefault();

        this.isExpanded = !this.isExpanded;

        return false;
      },
      onMenuClick: function () {
        this.isExpanded = false;
        window.scrollTo(0, 0);
      }
    }
  };
</script>

<style scoped>
  .hamburger {
    display: none;
  }

  .header {
    background: rgb(var(--theme-white));
    border-bottom: 0.5rem solid rgb(var(--theme-red-ribbon));
    border-left: 1px solid rgb(var(--theme-alto));
    border-right: 1px solid rgb(var(--theme-alto));
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
    color: rgb(var(--theme-gray));
    display: inline-block;
    font-size: 1.5rem;
    padding: 1em 5em;
    text-decoration: none;
    font-weight: 400;
  }

  .header ul li a.router-link-active,
  .header ul li a:hover {
    color: rgb(var(--theme-red-ribbon));
  }

  .footer {
    margin: 0 0 4rem 0;
  }

  .footer ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer ul li a {
    color: rgb(var(--theme-tundora));
    text-decoration: none;
    padding: 1em 3em;
    font-weight: 500;
    line-height: 2.6rem;
  }

  .footer ul li a.router-link-active,
  .footer ul li a:hover {
    color: rgb(var(--theme-red-ribbon));
  }

  @media (max-width: 899px) {
    .header {
      width: 100%;
      text-align: center;
    }

    .header .hamburger {
      display: inline-block;
      width: 2.4rem;
      height: 1.8rem;
      background-image: url('../img/hamburger.svg');
      background-repeat: no-repeat;
      margin: 0 auto 2rem auto;
    }

    .header .hamburger:hover {
      filter: invert(50%);
    }

    .header ul {
      display: none;
    }

    .header.isExpanded ul {
      display: block;
    }

    .header ul li {
      display: block;
    }

    .header ul li  a {
      font-size: 2.4rem;
    }

    .footer {
      margin-top: 7rem;
    }

    .footer ul li {
      display: block;
    }

    .footer ul li a {
      display: block;
      font-size: 2.4rem;
      padding: 0.5em 0;
    }
  }
</style>
