<template>
  <section class="page page-contact" itemscope itemtype="http://schema.org/ContactPage">
    <headline>Contact</headline>

    <div itemprop="mainContentOfPage">
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.888689517451!2d-71.05465828454554!3d42.30224047919078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba7b3ff7bf3%3A0xf0dd7df5e1f34c2c!2s295%20Freeport%20St%2C%20Boston%2C%20MA%2002122!5e0!3m2!1sen!2sus!4v1585600104005!5m2!1sen!2sus"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"></iframe>

      <form action="https://formspree.io/bryan@deckerrubin.com" method="post">
        <fieldset>
          <label for="full-name">Full Name</label>
          <input id="full-name" type="text" name="name" placeholder="First and Last" required=""/>
          <label for="email-address">Email Address</label>
          <input id="email-address" type="email" name="_replyto" placeholder="name@domain.com" required=""/>
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
  h1 {
    font-size: 2.8rem;
    font-weight: normal;
    display: inline-block;
    position: relative;
    top: -5rem;
    padding: 5rem 0 0 0;
    margin: 10rem 0 5rem 0;
  }

  a {
    color: rgb(var(--theme-ship-cove));
    text-decoration: none;
  }

  a:hover {
    color: rgb(var(--theme-alto));
  }

  div[itemprop='mainContentOfPage'] {
    display: grid;
    grid-template-columns: 70% auto;
    grid-template-rows: auto auto;
    grid-template-areas: "map map" "form address";
    text-align: left;
  }

  .map {
    border: 0;
    width: 100%;
    height: 50rem;
    grid-area: map;
    margin-bottom: 4rem;
  }

  form,
  form fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  form {
    grid-area: form;
    border-right: 1px solid rgb(var(--theme-big-stone));
    margin-right: 8rem;
    padding: 1em 6em 0 0;
  }

  form fieldset label {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  form fieldset input,
  form fieldset textarea {
    background: rgb(var(--theme-white));
    border: 2px solid rgb(var(--theme-alto));
    display: block;
    font-size: 1.4rem;
    margin-bottom: 1em;
    padding: 1em;
    width: 100%;
    outline: none;
  }

  form fieldset input:focus,
  form fieldset textarea:focus {
    border: 2px solid rgb(var(--theme-blue-jeans));
  }

  form input[type='submit'] {
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

  form input[type='submit']:hover {
    background: rgb(var(--theme-red-ribbon));
    cursor: pointer;
  }

  [itemtype='http://schema.org/Organization'] {
    grid-area: address;
    padding-top: 2em;
  }

  address {
    color: rgb(var(--theme-white));
    font-style: normal;
  }

  address a {
    color: rgb(var(--theme-ship-cove));
    display: block;
  }

  address [itemprop='legalName'] {
    font-weight: bold;
    margin: 0 0 0.5em 0;
    display: block;
  }

  [itemprop='founder'] [itemprop='telephone'],
  [itemprop='founder'] [itemprop='email'] {
    display: block;
    margin: 0.5em 0 0 0;
  }

  address [itemprop='addressLocality']:before {
    content: '\A';
    white-space: pre;
  }

  [itemprop='founder'] {
    margin-top: 3.5rem;
  }

  [itemprop='founder'] [itemprop='givenName'],
  [itemprop='founder'] [itemprop='familyName'] {
    font-weight: bold;
    color: rgb(var(--theme-white));
  }

  [itemprop='founder']:nth-child(even) [itemprop='givenName'],
  [itemprop='founder']:nth-child(even) [itemprop='familyName'] {
    color: rgb(var(--theme-white));
  }

  [itemprop='founder'] + span {
    display: block;
    margin: 2em 0 0.5em 0;
    color: rgb(var(--theme-white));
  }

  @media (max-width: 899px) {
    div[itemprop='mainContentOfPage'] {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-template-areas: "map" "form" "address";
    }

    .map {
      height: 25rem;
    }

    form {
      border: none;
      margin: 0;
      padding: 0;
    }

    form input[type='submit'] {
      font-weight: 400;
      display: block;
      width: 100%;
    }

    form input[type='submit'],
    form fieldset label {
      font-size: 1.5rem;
    }

    [itemtype="http://schema.org/Organization"] {
      font-size: 1.8rem;
      margin-bottom: 2em;
    }
  }
</style>
