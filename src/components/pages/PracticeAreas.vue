<template>
  <section class="page-practice-areas" itemscope itemtype="http://schema.org/CollectionPage">
    <div>
      <h1 itemprop="headline">Practice Areas</h1>

      <div itemprop="mainEntity">
        <ul itemscope itemtype="http://schema.org/ItemList">
          <li
            v-for="area in areas"
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ItemPage">

            <router-link v-bind:to="`/practice-areas/${area.slug}`" itemprop="headline">{{area.title}}</router-link>
          </li>
        </ul>

        <div itemprop="description">
          <p>{{this.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      content: null,
      areas: [
        {
          title: 'Collective Bargaining',
          slug: 'collective-bargaining',
          content: `The primary goal of your union is to bargain with the employer over the terms and conditions of
            employment. Collectively, we have over 35 years of experience negotiating agreements across industries and
            market conditions. Most importantly, we work with you and your union to determine your goals for
            negotiations, and we have the experience to help you reach them.`
        },
        {
          title: 'Grievance and Arbitration',
          slug: 'grievance-and-arbitration',
          content: 'FPO Grievance and Arbitration'
        },
        {
          title: 'Unfair Labor Practice Prosecution',
          slug: 'unfair-labor-practice-prosecution',
          content: 'FPO Unfair Labor Practice Prosecution'
        },
        {
          title: 'Disability Retirement',
          slug: 'disability-retirement',
          content: 'FPO Disability Retirement'
        },
        {
          title: 'Wage and Hour',
          slug: 'wage-and-hour',
          content: 'FPO Wage and Hour'
        },
        {
          title: 'Discrimination',
          slug: 'discrimination',
          content: 'FPO Discrimination'
        },
        {
          title: 'Employment Consultation',
          slug: 'employment-consultation',
          content: 'FPO Employment Consultation'
        }
      ]
    }),

    created () {
      this.setContent(this.areas[0].slug);
    },

    beforeRouteEnter (to, from, next) {
      next(vm => vm.setContent(to.params.section));
    },

    beforeRouteUpdate (to, from, next) {
      this.content = null;
      this.setContent(to.params.section);
      next();
    },

    methods: {
      setContent (slug) {
        slug = slug || this.$route.params.section;
        const area = this.areas.find(area => area.slug === slug);
        this.content = area ? area.content : this.areas[0].content;
      }
    }
  };
</script>

<style scoped>
  .page-practice-areas {
    margin-top: 15rem;
    background-color: #00244c;
    font-size: 1.8rem;
    line-height: 1.5em;
    text-align: center;
    padding: 10rem 0;
  }

  h1 {
    color: var(--theme-white);
    font-size: 2.8rem;
    font-weight: normal;
    display: inline-block;
    position: relative;
    top: -5rem;
    background-image: url('../../img/squares-sm.png');
    background-repeat: no-repeat;
    background-position: center top;
    padding: 5rem 0 0 0;
    margin: 10rem 0 5rem 0;
  }

  a {
    color: var(--theme-light-blue);
    display: block;
    padding: 0.5em;
    text-decoration: none;
    width: 40rem;
    font-weight: normal;
  }

  a:hover {
    color: rgb(var(--theme-bright-blue), 0.8);
  }

  a.router-link-active {
    color: rgb(var(--theme-bright-blue));
    font-weight: 200;
  }

  div[itemprop=mainEntity] {
    display: grid;
    grid-template-columns: 32rem auto;
    grid-template-rows: auto;
    grid-column-gap: 10rem;
    max-width: var(--page-content-max-width);
    background: rgba(1, 20, 48, 0.5);
    margin: 0 auto;
    padding: 9rem 6rem;
    border-radius: 2rem;
    text-align: left;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  div[itemprop=description] {
    line-height: 2em;
    color: var(--theme-white);
  }
</style>
