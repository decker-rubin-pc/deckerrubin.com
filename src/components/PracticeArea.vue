<template>
    <li
        itemprop="itemListElement"
        itemscope
        itemtype="http://schema.org/ItemPage"
        v-bind:class="{active: isActive}">

        <a href="#" itemprop="headline">{{title}}</a>

        <div itemprop="description">
            <slot></slot>
        </div>
    </li>
</template>

<script>
  export default {
    props: {
      title: String,
      isActive: Boolean
    }
  };
</script>

<style scoped>
    li {
        position: relative;
    }

    li > a {
        color: var(--theme-light-blue);
        display: block;
        padding: 0.5em;
        text-decoration: none;
        width: 40rem;
        font-weight: normal;
    }

    li > a:hover {
        color: rgb(var(--theme-bright-blue), 0.8);
    }

    li.active > a {
        color: rgb(var(--theme-bright-blue));
        font-weight: 200;
    }

    li > div {
        display: none;
    }

    li.active > div {
        display: block;
        line-height: 2em;
        position: absolute;
        right: 0;
        top: 0;
        width: calc(100% - 40rem);
        color: var(--theme-white);
    }
</style>
