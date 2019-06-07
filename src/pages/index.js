import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    <form
      name="cinema-form"
      method="post"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input hidden className="hidden" name="bot-field" />
      <p>
        <input
          type="text"
          name="cinema-name"
          placeholder="First and Last name"
        />
      </p>
      <p>
        <input type="email" name="cinema-email" placeholder="Email" />
      </p>
      <p>
        <textarea name="cinema-message" placeholder="Message" />
      </p>
      <p>
        <button type="submit">Send Message</button>
      </p>
    </form>
    <SEO title="Home" keywords={[`cinemanord`, `video`, `movies`]} />
    <HomeHero />
    <HomeLayout>
      <HomeMenu />
    </HomeLayout>
    <GlobalStyle />
  </>
);

export default IndexPage;
