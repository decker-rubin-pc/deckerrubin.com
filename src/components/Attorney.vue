<template>
  <div class="attorney" itemprop="founder" itemscope itemtype="http://schema.org/Person" v-bind:class="className">
    <div class="heading">
      <div class="name">
        <h2>
          <span itemprop="givenName">{{firstName}}</span>
          <span itemprop="familyName">{{lastName}}</span>
        </h2>
      </div>

      <div class="title">
        <h3 itemprop="jobTitle">{{jobTitle}}</h3>
      </div>

      <div class="contact">
        <span itemprop="email">
          <a v-bind:href="emailLink">{{email}}</a>
        </span>

        <span itemprop="telephone">
          <a v-bind:href="phoneNumberLink">{{phoneNumber}}</a>
        </span>
      </div>
    </div>

    <div class="body" itemprop="description">
      <slot name="description"/>
    </div>

    <div class="sidebar">
      <div>
        <h4>Education</h4>
        <slot name="education"/>
      </div>
      <div>
        <h4>Licenses, Certifications & Bar Admissions</h4>
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

    <div class="squares-lg"></div>
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
  .attorney {
    position: relative;
    display: grid;
    grid-template-columns: 72rem auto;
    grid-template-rows: 52rem auto;
    grid-template-areas: "heading squares" "body sidebar";
    color: rgb(var(--theme-alto));
    margin: 0 0 8rem 0;
  }

  .heading {
    grid-area: heading;
    color: rgb(var(--theme-gunmetal));
    padding: 5rem 8rem;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto 100%;
    align-items: end;
    justify-content: end;
  }

  .heading h2,
  .heading h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  .heading h3 {
    text-transform: lowercase;
    margin: 0 0 2em 0;
  }

  .heading a {
    color: rgb(var(--theme-big-stone));
    display: block;
    margin: 0 0 1em 0;
    text-decoration: none;
  }

  .heading a:hover {
    color: rgb(var(--theme-cocoa-bean));
  }

  .squares-lg {
    grid-area: squares;
    position: absolute;
    left: -1.5rem;
    bottom: -2rem;
  }

  .body {
    grid-area: body;
    padding: 7rem 8rem;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-weight: 100;
  }

  .body p {
    margin: 0 0 2em 0;
    padding: 0;
  }

  .sidebar {
    grid-area: sidebar;
    padding: 4rem 5rem;
    background: rgb(var(--theme-gunmetal));
  }

  .sidebar h4 {
    font-weight: 500;
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
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0 0 1em 0;
  }

  @media (max-width: 899px) {
    .squares-lg {
      display: none;
    }

    .attorney {
      grid-template-columns: auto;
      grid-template-rows: 70rem auto auto;
      grid-template-areas: "heading" "body" "sidebar";
      color: rgb(var(--theme-alto));
      margin: 0 0 8rem 0;
    }

    .heading {
      position: relative;
      padding: 4rem 2rem;
      background-position: top center;
      grid-template-columns: auto;
      grid-template-rows: auto auto 100% auto;
      grid-template-areas: 'name' 'title' '.' 'contact';
      align-items: end;
      justify-content: end;
    }

    .contact {
      position: absolute;
      bottom: -10rem;
      width: 100%;
      background: rgb(var(--theme-blue-charcoal));
      padding: 2rem 4rem;
      color: rgb(var(--theme-alto));
    }

    .heading a {
      margin: 0.25em 0 0.25em 0;
      color: rgb(var(--theme-alto));
    }

    .heading h2 {
      font-size: 3.6rem;
    }

    .body {
      margin-top: 10rem;
      padding: 2rem 4rem;
    }

    .sidebar {
      padding: 2rem 4rem;
    }

    .heading h3,
    .heading a,
    .body,
    .sidebar h4,
    .sidebar ul li {
      font-size: 2.4rem;
    }
  }
</style>
