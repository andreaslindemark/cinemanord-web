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
      <input type="text" name="cinema-name" placeholder="First and Last name" />
      <input type="email" name="cinema-email" placeholder="Email" />
      <textarea name="cinema-message" placeholder="Message" />
      <button type="submit">Send Message</button>
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
