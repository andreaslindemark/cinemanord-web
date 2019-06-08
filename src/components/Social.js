import React from 'react';
import ModeButton from './ModeButton';

import Facebook from '../images/ca-fb.svg';
import LinkedIn from '../images/ca-linkedin.svg';
import Instagram from '../images/cn-insta.svg';
import Twitter from '../images/cn-twitter.svg';

import { StyledSocial, StyledIcons } from './styles/StyledSocial';

const Social = () => (
  <StyledSocial>
    <StyledIcons>
      <a href="https://www.facebook.com/CinemaNord/">
        <img src={Facebook} alt="cn-facebook" />
      </a>
      <a href="https://twitter.com/Lindemark">
        <img src={Twitter} alt="cn-twitter" />
      </a>
      <a href="https://www.linkedin.com/in/andreas-lindemark/">
        <img src={LinkedIn} alt="cn-linkedin" />
      </a>
      <a href="https://www.instagram.com/andreas_lindemark_cinemanord/?hl=sv">
        <img src={Instagram} alt="cn-instagram" />
      </a>
    </StyledIcons>
    <div className="modeButton">
      <ModeButton />
    </div>
  </StyledSocial>
);

export default Social;
