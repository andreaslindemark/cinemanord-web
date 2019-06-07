import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    <form
      name="cinemacontact"
      method="post"
      action="/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input hidden className="hidden" name="bot-field" />
      <input type="text" name="name" placeholder="First and Last name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
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
