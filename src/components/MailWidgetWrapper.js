import React, { useContext } from 'react';
import { ThemeContext } from './ThemeWrapper';

import MailWidget from './MailWidget';
import 'bootstrap/dist/css/bootstrap-grid.css';

import { GlobalStyle } from './styles/StyledLayout';

const MailWidgetWrapper = ({ children }) => {
  const [nightMode] = useContext(ThemeContext);
  return (
    <>
      {children}
      <MailWidget />
      <GlobalStyle nightMode={nightMode} />
    </>
  );
};

export default MailWidgetWrapper;
