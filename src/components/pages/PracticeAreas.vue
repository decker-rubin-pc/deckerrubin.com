<template>
  <section class="page-practice-areas" itemscope itemtype="http://schema.org/CollectionPage">
    <headline>Practice Areas</headline>

    <div itemprop="mainContentOfPage">
      <div v-for="area in areas">
        <h2>{{area.title}}</h2>
        <p>{{area.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';

  export default {
    components: {
      Headline
    },

    data: () => ({
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
          content: `You worked hard to achieve the benefits in your union’s collective bargaining agreement, and we
            work hard to make sure that your employer lives up to that agreement.  When your contract is violated, you
            must know how to navigate the grievance and arbitration process to make things right.  We work with our
            union clients at all stages of the process, from determining whether a violation has occurred, to drafting
            a winning grievance, to presenting the union’s case at arbitration.  Bryan and Jennifer have litigated
            hundreds of arbitrations, and use that experience to protect the rights of their clients.`
        },
        {
          title: 'Unfair Labor Practice Prosecution',
          slug: 'unfair-labor-practice-prosecution',
          content: `The law gives unions and workers the right to engage in concerted activities to advance their
            interests.  When employers violate that right, Bryan and Jennifer are ready to fight back by filing and
            prosecuting unfair labor practice charges.  Bryan and Jennifer have won cases at the the NLRB and the
            Massachusetts DLR challenging bargaining violations by employers, and establishing new rights for unions.`
        },
        {
          title: 'Disability Retirement',
          slug: 'disability-retirement',
          content: `When Massachusetts Public Employees are disabled as a result of their job, Massachusetts Law
            provides them with the right to a disability retirement.  But the process can be daunting, and Bryan and
            Jennifer can help.  Bryan and Jennifer have been successfully helping employees through the process
            collectively, for over 40 years – at their Local Retirement Board, before the doctors hired by the Public
            Employee Retirement Administration Commission (PERAC), and, when necessary, on appeal before the
            Contributory Retirement Appeals Board (CRAB) and in Court.  Bryan and Jennifer are ready to put that
            experience to work for you.`
        },
        {
          title: 'Wage and Hour',
          slug: 'wage-and-hour',
          content: `A fair day’s work for a fair day’s pay.  That’s the underlying promise of the American workplace,
            and of employment law.  When your employer breaks that promise – by not paying you what the law demands –
            Bryan and Jennifer are ready to fight for you.  Bryan and Jennifer have won cases under both state wage laws
            and in federal court under the Fair Labor Standards Act (FLSA).  Bryan has also won cases for public safety
            workers for overtime violations under the FLSA’s complicated and little understood partial public safety
            exception.  They are ready to help you.`
        },
        {
          title: 'Discrimination',
          slug: 'discrimination',
          content: `The law protects your right to have your labor judged based on your work, not on your race, color,
            gender, age, sexual orientation, national origin or disability.  Bryan and Jennifer have fought against
            workplace discrimination through actions before the Massachusetts Commission Against Discrimination (MCAD),
            and in both state and federal courts.  If you have been discriminated against in violation of the law, we
            are here to help.`
        },
        {
          title: 'Employment Consultation',
          slug: 'employment-consultation',
          content: `You spend a third of our adult lives at work (if you’re lucky enough to only work 40 hours a week),
            so it’s never easy to lose your job.  If you are laid-off from work, you want to know your rights.
            Employers follow up the gut punch of a lay-off notice with complex severance agreements and releases.
            We’re here to help you understand your rights and the process.  Whether you want to sue to enforce your
            rights or just want to understand what’s happening, we’re here to consult and assist you thought this
            difficult period.`
        }
      ]
    })
  };
</script>

<style scoped>
  .page-practice-areas {
    background-color: var(--theme-white);
    margin: 14rem 0 10rem 0;
    padding: 0;
  }

  div[itemprop=mainContentOfPage] {
    max-width: var(--page-content-max-width);
    margin: 8rem auto 0;
  }

  div[itemprop=mainContentOfPage] > div > h2 {
    color: var(--theme-dark-blue);
    font-weight: 200;
  }

  div[itemprop=mainContentOfPage] > div > p {
    margin-bottom: 2em;
    font-size: 1.6rem;
    line-height: 1.75em;
  }
</style>
