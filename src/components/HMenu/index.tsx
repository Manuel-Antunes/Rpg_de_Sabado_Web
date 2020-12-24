import React from 'react';

import { Container } from './styles';

const HMenu: React.FC = ({ children }) => {
  return (
    <Container role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />

        <ul id="menu">{children}</ul>
      </div>
    </Container>
  );
};

export default HMenu;
