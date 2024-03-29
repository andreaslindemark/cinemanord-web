import React from 'react';
import { Link } from 'gatsby';

import PageMenu from './PageMenu';
import cnLogo from '../images/cn-logo.png';
import { StyledHeader } from './styles/StyledHeader';

const Header = () => (
  <header className="container-fluid">
    <div className="row">
      <div className="col">
        <StyledHeader>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <img className="cnLogo" src={cnLogo} alt="cnLogo" />
            </Link>
          </h1>
          <PageMenu />
        </StyledHeader>
      </div>
    </div>
  </header>
);

export default Header;
