<template>
  <div class="attorney" itemprop="founder" itemscope itemtype="http://schema.org/Person" v-bind:class="className">
    <div class="heading">
      <div>
        <h2>
          <span itemprop="givenName">{{firstName}}</span>&nbsp;
          <span itemprop="familyName">{{lastName}}</span>
        </h2>

        <h3 itemprop="jobTitle">{{jobTitle}}</h3>

        <span itemprop="telephone">
          <a v-bind:href="phoneNumberLink">{{phoneNumber}}</a>
        </span>

        <span itemprop="email">
          <a v-bind:href="emailLink">{{email}}</a>
        </span>
      </div>
    </div>

    <div class="body">
      <div itemprop="description">
        <slot name="description"/>
      </div>
      <div class="sidebar">
        <div>
          <h4>Education</h4>
          <slot name="education"/>
        </div>
        <div>
          <h4>Licenses, Certifications &amp; Bar Admissions</h4>
          <slot name="licenses"/>
        </div>
        <div>
          <h4>Professional Experience</h4>
          <slot name="experience"/>
        </div>
        <div>
          <h4>Professional &amp; Community Involvement</h4>
          <slot name="involvement"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      firstName: String,
      lastName: String,
      jobTitle: String,
      email: String,
      phoneNumber: String,
      className: String
    },
    methods: {},
    computed: {
      emailLink () {
        return `mailto:${this.email}`;
      },
      phoneNumberLink () {
        return `tel:+${this.phoneNumber.replace(/\D/g, '')}`;
      }
    }
  };
</script>

<style scoped>
  .heading {
    /*
     @todo Rework this so that the image and the background color are separated.
     @todo Also, make the background color full width.
     */
    height: 57rem;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }

  .heading > div,
  .heading a {
    color: var(--theme-white);
  }

  .heading > div {
    max-width: 30rem;
    background-image: url('../img/sqares.png');
    background-repeat: no-repeat;
    padding: 5rem 0 0 0;
    position: absolute;
    top: 10rem;
  }

  .heading h2 {
    font-size: 4.4rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  .heading h3 {
    font-size: 2.4rem;
    font-weight: normal;
    font-style: italic;
    text-transform: lowercase;
    margin: 0 0 4rem 0;
    padding: 0 0 4rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  .heading a {
    text-decoration: none;
    line-height: 1.5em;
  }

  .heading a:hover {
    font-weight: 200;
  }

  .heading span[itemprop="telephone"],
  .heading span[itemprop="email"] {
    display: block;
  }

  .body {
    font-size: 1.6rem;
    padding: 8rem 8rem 10rem 8rem;
    background: var(--theme-white);
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "left right";
    position: relative;
    top: -10rem;
    color: #474747;
    line-height: 1.5em;
    font-weight: 100;
  }

  .sidebar h4 {
    font-weight: 300;
    color: #213e6e;
    text-transform: uppercase;
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    line-height: 2em;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0 0 2em 0;
  }

  .sidebar ul li {
    line-height: 2em;
    color: #474747;
    font-size: 1.5rem;
    font-weight: 100;
  }
</style>
