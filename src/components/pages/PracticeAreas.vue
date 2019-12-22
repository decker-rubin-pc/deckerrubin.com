<template>
  <section class="page-practice-areas" itemscope itemtype="http://schema.org/CollectionPage">
    <div>
      <h1 itemprop="headline">Practice Areas</h1>

      <ul itemprop="mainEntity" itemscope itemtype="http://schema.org/ItemList">
        <practice-area title="Collective Bargaining" is-active>
          <p>
            The primary goal of your union is to bargain with the employer over the terms and conditions of employment.
            Collectively, we have over 35 years of experience negotiating agreements across industries and market
            conditions. Most importantly, we work with you and your union to determine your goals for negotiations, and
            we have the experience to help you reach them.
          </p>
        </practice-area>

        <practice-area title="Grievance and Arbitration">
          <p>FPO Grievance and Arbitration</p>
        </practice-area>

        <practice-area title="Unfair Labor Practice Prosecution">
          <p>FPO Unfair Labor Practice Prosecution</p>
        </practice-area>

        <practice-area title="Disability Retirement">
          <p>FPO Disability Retirement</p>
        </practice-area>

        <practice-area title="Wage and Hour">
          <p>FPO Wage and Hour</p>
        </practice-area>

        <practice-area title="Discrimination">
          <p>FPO Discrimination</p>
        </practice-area>

        <practice-area title="Employment Consultation">
          <p>FPO Employment Consultation</p>
        </practice-area>
      </ul>
    </div>
  </section>
</template>

<script>
  import PracticeArea from '../PracticeArea.vue';

  export default {
    components: {
      PracticeArea
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

  .page-practice-areas h1 {
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

  .page-practice-areas ul {
    background: rgba(1, 20, 48, 0.5);
    list-style: none;
    margin: 0 auto;
    padding: 9rem 6rem;
    border-radius: 2rem;
    text-align: left;
    max-width: var(--page-content-max-width);
  }
</style>
