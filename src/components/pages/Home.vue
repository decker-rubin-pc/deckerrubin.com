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

    <div class="covid-19">
      <div class="inner">
        <div class="squares-sm"></div>
        <h1 itemprop="headline">COVID-19 Legal Issues for First Responders</h1>
        <h2>March 30, 2020</h2>

        <div class="content">
          <p>It goes without saying that the Coronavirus/COVID-19 Pandemic has changed life for all workers in ways that
            would have been unbelievable only weeks ago. But while most of us are dealing with self-isolation without
            work, or the realities of working remotely while trying to keep the kids occupied, our first responders are
            on the front line of the epidemic. There is no telecommuting for the brave EMS workers, police officers and
            firefighters who willingly report to work and necessarily expose themselves to COVID-19 in order to protect
            and save lives. At this time (and this is fast evolving), these are some of the legal issues we are dealing
            with on a daily basis as union lawyers for first responders:</p>

          <ul>
            <li>We have been successful in getting employers to adopt a (de facto, if not a de jure) presumption that
              illness caused by COVID-19 is work related. First Responders are among the highest risk groups for
              contracting COVID-19 (see
              <a href="https://www.nytimes.com/interactive/2020/03/15/business/economy/coronavirus-worker-risk.html"
                 rel="noreferrer" target="_blank">
                https://www.nytimes.com/interactive/2020/03/15/business/economy/coronavirus-worker-risk.html</a>
              ). When first responders are required to self-quarantine or develop symptoms due to an exposure at work,
              they should not be required to use any of their accrued sick or other types of leave. Officers should be
              carried as injured on duty under M.G.L. c. 41, §111F if they develop COVID-19.
            </li>
            <li>A number of COVID-19 first responder related bills are pending at the state house, including for a
              presumption, hazardous duty pay, and others. We have been working with our union clients to submit letters
              and testimony in support of these bills. We will post updates as bills (hopefully) become laws.
            </li>
            <li>We are seeing an increase in testing available to first responders. There is a first responder only
              testing facility in Shrewsbury, and Boston was just able to open a facility for Boston first responders at
              Suffolk Downs. Criteria to qualify for testing vary by facility and are evolving, so make sure you call
              ahead and follow your department’s protocols before going to a testing site. We are advocating for more
              testing availability, including for the ability of first responders to have non-symptomatic testing when
              medically appropriate.
            </li>
            <li>We have been bargaining with police, fire and EMS employers regarding protocols for when first
              responders
              should be self-quarantining v. continuing to work following exposures. The CDC recommendations regarding
              exposure risk among first responders is rapidly evolving. The CDC is trying to strike a balance between
              minimizing exposure risk and maintaining adequate staffing levels for essential workers. Check the CDC
              website for up to date information. Here is the current guidance for EMS,
              (<a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-for-ems.html"
                  rel="noreferrer" target="_blank">
                https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-for-ems.html
              </a>), and for law enforcement,
              (<a href="https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-law-enforcement.html"
                  rel="noreferrer" target="_blank">
                https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-law-enforcement.html
              </a>).
            </li>
          </ul>
          <p>Thank you for your commitment as you continue to work in this crisis, which is the worst of most of our
            lifetimes. We continued to be honored to work for first responders, and will continue to do all we can to
            support you on the legal and labor front. Please stay safe.</p>
        </div>

        <a v-on:click="toggleCovid" href="#" class="read-more">Read more <span class="chevron"></span></a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      toggleCovid: function (e) {
        e.preventDefault();

        const $el = document.querySelector('.covid-19');
        $el && $el.classList.toggle('expanded');
      }
    }
  };
</script>

<style scoped>
  .page-home {
    margin: 0;
    padding: 10rem 0 0 0;
  }

  .advantages {
    margin: 0 auto 10rem auto;
    text-align: left;
    max-width: 86rem;
    position: relative;
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
    line-height: 1.6em;
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0 0 1em 5rem;
  }

  li {
    margin-top: 1em;
  }

  .covid-19 {
    position: relative;
    background: rgb(var(--theme-white));
    color: rgb(var(--theme-gunmetal));
    padding: 10rem 0;
  }

  .covid-19 .inner {
    position: relative;
    margin: 0 auto;
    text-align: left;
    max-width: 86rem;
  }

  .covid-19 h1 {
    font-weight: 400;
    font-size: 2rem;
    margin: 0 0 0.5em 0;
    padding: 0;
  }

  .covid-19 h2 {
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0 0 3em 0;
    padding: 0;
  }

  .covid-19 .content {
    max-height: 30rem;
    font-weight: 300;
    overflow: hidden;
    margin-bottom: 6rem;
    transition: max-height 0.25s ease-in;
  }

  .covid-19.expanded .content {
    max-height: 100rem;
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
