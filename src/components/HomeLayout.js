import React, { useState } from 'react';

import OverlayMenu from './OverlayMenu';
import Hamburger from './Hamburger';
import cnLogo from '../images/cn-logo.png';
import { HomeLayoutWrapper } from './styles/StyledHomeLayout';

const HomeLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Hamburger callback={handleOverlayMenu} />
      <HomeLayoutWrapper>
        <img src={cnLogo} alt="cnLogo" />
        {children}
      </HomeLayoutWrapper>
    </>
  );
};

export default HomeLayout;
