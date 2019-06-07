import React from 'react';

import SEO from '../components/seo';
import HomeHero from '../components/HomeHero';
import HomeLayout from '../components/HomeLayout';
import HomeMenu from '../components/HomeMenu';

import { GlobalStyle } from '../components/styles/StyledLayout';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`cinemanord`, `video`, `movies`]} />
    <HomeHero />
    <HomeLayout>
      <HomeMenu />
    </HomeLayout>
    <GlobalStyle />
  </>
);

export default IndexPage;
