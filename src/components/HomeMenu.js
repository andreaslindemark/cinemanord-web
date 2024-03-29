import React from 'react';
import { Link } from 'gatsby';

import useHomeMenu from '../hooks/useHomeMenu';
import { StyledMenu } from './styles/StyledHomeMenu';

const HomeMenu = () => {
  const menu = useHomeMenu();

  return (
    <StyledMenu>
      <ul id="cinemanord-ul">
        {menu.items.map(item => (
          <li key={item.wordpress_id}>
            <Link data-hover={item.title} to={`/${item.object_slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default HomeMenu;
