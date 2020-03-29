<template>
  <section class="page page-attorneys" itemscope itemtype="http://schema.org/AboutPage">
    <headline>Attorneys</headline>

    <div itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/Organization">
      <attorney
        first-name="Bryan"
        last-name="Decker"
        email="bryan@deckerrubin.com"
        phone-number="123-456-7890"
        job-title="Partner"
        class-name="attorney-bryan">
        <template v-slot:description>
          <p>
            Bryan has represented unions and individual employees since his graduation from Northeastern University
            School of Law in 1992. Bryan is also a graduate of Cornell University.
          </p>

          <p>
            Following law school, Bryan spent a year working in the legal department of the Service Employees
            International Union in Washington, DC. Following his return to Boston in 1993, Bryan worked for private
            law firms exclusively representing unions and individuals in employment related matters.
          </p>

          <p>
            Bryan has appeared on behalf of his clients in front of state and federal administrative agencies, at
            arbitration, in contract negotiations, and in state and federal court. In addition to his union work,
            Bryan represents individuals in all aspects of employment law, with an emphasis on discrimination and
            wage recovery suits. Bryan puts his skills as an employment litigator to work for his union clients as
            well, successfully pursuing group wage and other types of cases.
          </p>

          <p>
            Bryan has been a lecturer at the Labor Guild’s School of Industrial Relations, and has presented on a
            variety of labor related topics for the Massachusetts Bar Association’s Continuing Legal Education
            Program. He is a former member of the national AFL-CIO LCC Executive Board. He is a member of the MBA’s
            Labor and Employment Section Council, and is a former co-chair of its Collective Bargaining practice
            group. He is also a former member of the Steering Committee of Massachusetts Jobs with Justice and
            former co-chair of the National Lawyer’s Guild’s Labor and Employment Committee.
          </p>

          <p>
            Bryan lives in Newton. Bryan is a former chair of the board of the after school program at his
            daughter’s public school. Bryan is also an avid cyclist and is a past member of the Brookline Bicycle
            Advisory Committee.
          </p>
        </template>

        <template v-slot:education>
          <ul>
            <li>Northeastern University School of Law, J.D.</li>
            <li>Cornell University, B.A.</li>
          </ul>
        </template>

        <template v-slot:licenses>
          <ul>
            <li>Massachusetts, 1992</li>
          </ul>
        </template>

        <template v-slot:experience>
          <ul>
            <li>Service Employees International Union, Washington, DC</li>
            <li>Angoff, Goldman, Manning, Pyle, Wanger & Hiatt, Boston, MA</li>
            <li>Pyle, Rome & Lichten, Boston, MA</li>
            <li>Sandulli Grace, PC, Boston, MA</li>
          </ul>
        </template>

        <template v-slot:involvement>
          <ul>
            <li>Former Executive Board Member, National AFL-CIO, Lawyer’s Coordinating Cmte.</li>
            <li>Former Co-Chair, National Lawyer’s Guild, Labor and Employment Cmte.</li>
            <li>Former Co-Chair, Collective Bargaining Cmte., MBA Labor and Employment Cmte.</li>
          </ul>
        </template>
      </attorney>

      <attorney
        first-name="Jennifer"
        last-name="Rubin"
        email="jennifer@deckerrubin.com"
        phone-number="123-456-7890"
        job-title="Partner"
        class-name="attorney-jennifer">
        <template v-slot:description>
          <p>
            Jennifer Rubin has practiced labor and employment law since her graduation from the UCLA School of Law.
            Ms. Rubin received both her B.A. and her J.D. from UCLA. She is a member of the State Bars of
            Massachusetts, California, and Washington, D.C. She is also a member of the bars of the United States
            Courts of Appeals for the D.C. Circuit, First Circuit, Second Circuit, Fifth Circuit, Sixth Circuit, and
            Ninth Circuit.
          </p>

          <p>
            Ms. Rubin is the co-author of “Employment Discrimination Law” in “Employee and Union Member Guide to
            Labor Law: A Manual for Attorneys Representing the Labor Movement” (2008 and 2009 eds). Ms. Rubin has
            taught seminars, participated in panels, and led discussions on labor relations and contract
            negotiations. She also served as a judicial extern for federal District Judge Robert M. Takasugi of the
            United States District Court for the Central District of California. In 2014, Ms. Rubin was named a
            Massachusetts Super Lawyer Rising Star in Boston Magazine and has been listed in the Top Women Attorneys
            in Massachusetts in Boston Magazine for 2015 and 2016.
          </p>

          <p>
            Before practicing in Massachusetts, Jennifer practiced at a firm in Washington, D.C., where she
            represented national and local labor unions in contract negotiations, litigation, hearings, and
            arbitrations.
          </p>

          <p>
            In her free time, Ms. Rubin likes to write letters by hand and visit her local post office (she does
            not have a Facebook, Twitter, or Instagram account and refuses to give up her paper planner).
          </p>
        </template>

        <template v-slot:education>
          <ul>
            <li>UCLA School of Law, J.D.</li>
            <li>University of California, Los Angeles (UCLA), B.A.</li>
          </ul>
        </template>

        <template v-slot:licenses>
          <ul>
            <li>Massachusetts</li>
            <li>California</li>
            <li>Washington, D.C.</li>
          </ul>
        </template>

        <template v-slot:experience>
          <ul>
            <li>O’Donnell, Schwartz, & Anderson, PC, Washington, DC</li>
            <li>Sandulli Grace, PC, Boston, MA</li>
          </ul>
        </template>
      </attorney>
    </div>
  </section>
</template>

<script>
  import Attorney from '../Attorney.vue';
  import Headline from '../Headline.vue';

  export default {
    components: {
      Attorney,
      Headline
    }
  };
</script>

<style>
  .page-attorneys [itemprop="mainContentOfPage"] {
    border-top: 1px solid rgb(var(--theme-big-stone));
    padding: 8rem 0 0 0;
  }

  .attorney-bryan .heading {
    background-image: url('../../img/profile-bryan.jpg');
  }

  .attorney-bryan .body {
    background: rgb(var(--theme-big-stone));
  }

  .attorney-bryan .heading > div {
    float: right;
  }

  .attorney-bryan .sidebar h4 {
    color: rgb(var(--theme-st-tropaz));
  }

  .attorney.attorney-jennifer {
    grid-template-columns: auto 72rem;
    grid-template-rows: 52rem auto;
    grid-template-areas: "squares heading" "sidebar body";
  }

  .attorney-jennifer .heading {
    background-image: url('../../img/profile-jennifer.jpg');
  }

  .attorney-jennifer .squares-lg {
    grid-area: squares;
    position: absolute;
    left: auto;
    right: -1.5rem;
    bottom: -2rem;
  }

  .attorney-jennifer .squares-lg::before {
    transform: scaleX(-1);
  }

  .attorney-jennifer .body {
    background: rgb(var(--theme-cocoa-bean));
  }

  .attorney-jennifer .sidebar h4 {
    color: rgb(var(--theme-cannon-pink));
  }

  @media (max-width: 899px) {
    .page-attorneys [itemprop="mainContentOfPage"] {
      border: none;
      padding: 0;
    }

    .attorney.attorney-jennifer {
      grid-template-columns: auto;
      grid-template-rows: 70rem auto auto;
      grid-template-areas: "heading" "body" "sidebar";
      color: rgb(var(--theme-alto));
      margin: 0 0 8rem 0;
    }
  }
</style>
