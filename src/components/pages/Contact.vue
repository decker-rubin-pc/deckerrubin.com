<template>
  <section class="page page-contact" itemscope itemtype="http://schema.org/ContactPage">
    <headline>Contact</headline>

    <div itemprop="mainContentOfPage">
      <form action="https://formspree.io/bryan@deckerrubin.com" method="post">
        <fieldset>
          <label for="full-name">Full Name</label>
          <input id="full-name" type="text" name="name" placeholder="First and Last" required=""/>
          <label for="email-address">Email Address</label>
          <input id="email-address" type="email" name="_replyto" placeholder="email@domain.tld" required=""/>
          <label for="phone">Phone</label>
          <input id="phone" type="text" name="phone" placeholder="xxx-xxx-xxxx" required=""/>
          <label for="message">Message</label>
          <textarea id="message" rows="5" name="message" placeholder="" required=""></textarea>
          <input type="hidden" name="_subject" value="Contact Form Submission"/>
          <input type="text" name="_gotcha" style="display:none"/>
        </fieldset>

        <input type="submit" value="Submit"/>
      </form>

      <div itemscope itemtype="http://schema.org/Organization">
        <address>
          <span itemprop="legalName">Decker & Rubin, PC</span>

          <a href="https://goo.gl/maps/cv2MN1DCpTURex3s5"
             itemprop="address"
             itemscope
             itemtype="http://schema.org/PostalAddress"
          >
            <span itemprop="streetAddress">295 Freeport Street</span>
            <span itemprop="addressLocality">Boston</span>, <span itemprop="addressRegion">MA</span>
            <span itemprop="postalCode">02122</span>
          </a>
        </address>

        <div itemprop="founder" itemscope itemtype="http://schema.org/Person">
          <span itemprop="givenName">Bryan</span> <span itemprop="familyName">Decker</span>
          <span itemprop="telephone">
            <a href="tel:+6178771716">617.877.1716</a>
          </span>
          <span itemprop="email">
            <a href="mailto:bdecker@deckerrubin.com">bdecker@deckerrubin.com</a>
          </span>
        </div>

        <div itemprop="founder" itemscope itemtype="http://schema.org/Person">
          <span itemprop="givenName">Jennifer</span> <span itemprop="familyName">Rubin</span>
          <span itemprop="telephone">
            <a href="tel:+6175159294">617.515.9294</a>
          </span>
          <span itemprop="email">
            <a href="mailto:jrubin@deckerrubin.com">jrubin@deckerrubin.com</a>
          </span>
        </div>

        <span>Fax:</span>
        <a href="tel:+6179892779" itemprop="faxNumber">617.989.2779</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Headline from '../Headline.vue';

  export default {
    components: {
      Headline
    }
  };
</script>

<style scoped>
  .page-contact h1 {
    font-size: 2.8rem;
    font-weight: normal;
    display: inline-block;
    position: relative;
    top: -5rem;
    padding: 5rem 0 0 0;
    margin: 10rem 0 5rem 0;
  }

  .page-contact a {
    color: rgb(var(--theme-ship-cove));
    text-decoration: none;
  }

  .page-contact a:hover {
    color: rgb(var(--theme-alto));
  }

  .page-contact div[itemprop='mainContentOfPage'] {
    display: grid;
    grid-template-columns: 70% auto;
    grid-template-rows: auto;
    text-align: left;
  }

  .page-contact form,
  .page-contact form fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .page-contact form {
    border-right: 1px solid rgb(var(--theme-big-stone));
    margin-right: 8rem;
    padding: 1em 6em 0 0;
  }

  .page-contact form fieldset label {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .page-contact form fieldset input,
  .page-contact form fieldset textarea {
    background: rgb(var(--theme-white));
    border: 2px solid rgb(var(--theme-alto));
    display: block;
    font-size: 1.4rem;
    margin-bottom: 1em;
    padding: 1em;
    width: 100%;
    outline: none;
  }

  .page-contact form fieldset input:focus,
  .page-contact form fieldset textarea:focus {
    border: 2px solid rgb(var(--theme-blue-jeans));
  }

  .page-contact form input[type='submit'] {
    border: none;
    text-transform: uppercase;
    margin-top: 2em;
    background-color: rgb(var(--theme-shiraz));
    border-radius: 2em;
    padding: 1em 5em;
    color: rgb(var(--theme-white));
    font-size: 1.4rem;
    font-weight: 300;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0.15rem;
  }

  .page-contact form input[type='submit']:hover {
    background: rgb(var(--theme-red-ribbon));
    cursor: pointer;
  }

  .page-contact [itemtype='http://schema.org/Organization'] {
    padding-top: 2em;
  }

  .page-contact address {
    color: rgb(var(--theme-white));
    font-style: normal;
  }

  .page-contact address a {
    color: rgb(var(--theme-ship-cove));
    display: block;
  }

  .page-contact address [itemprop='legalName'] {
    font-weight: bold;
    margin: 0 0 0.5em 0;
    display: block;
  }

  .page-contact [itemprop='founder'] [itemprop='telephone'],
  .page-contact [itemprop='founder'] [itemprop='email'] {
    display: block;
    margin: 0.5em 0 0 0;
  }

  .page-contact address [itemprop='addressLocality']:before {
    content: '\A';
    white-space: pre;
  }

  .page-contact [itemprop='founder'] {
    margin-top: 3.5rem;
  }

  .page-contact [itemprop='founder'] [itemprop='givenName'],
  .page-contact [itemprop='founder'] [itemprop='familyName'] {
    font-weight: bold;
    color: rgb(var(--theme-white));
  }

  .page-contact [itemprop='founder']:nth-child(even) [itemprop='givenName'],
  .page-contact [itemprop='founder']:nth-child(even) [itemprop='familyName'] {
    color: rgb(var(--theme-white));
  }

  .page-contact [itemprop='founder'] + span {
    display: block;
    margin: 2em 0 0.5em 0;
    color: rgb(var(--theme-white));
  }

  @media (max-width: 899px) {
    .page-contact div[itemprop='mainContentOfPage'] {
      grid-template-columns: auto;
    }

    .page-contact form {
      border: none;
      margin: 0;
      padding: 0;
    }

    .page-contact form input[type='submit'] {
      font-weight: 400;
      display: block;
      width: 100%;
    }
    .page-contact form input[type='submit'],
    .page-contact form fieldset label {
      font-size: 1.5rem;
    }

    .page-contact [itemtype="http://schema.org/Organization"] {
      font-size: 1.8rem;
      margin-bottom: 2em;
    }
  }
</style>
