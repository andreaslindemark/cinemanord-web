import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input hidden className="hidden" name="bot-field" />
      <input type="text" placeholder="name" name="name" />
      <div data-netlify-recaptcha />
      <button>Send</button>
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
