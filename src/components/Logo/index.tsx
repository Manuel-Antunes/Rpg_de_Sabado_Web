import React, { useEffect, useState } from 'react';
import jackO from '../../resources/images/jack-o-lantern.png';
import dice from '../../resources/images/baixados.png';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container id="logo_top">
      <img src={dice} alt="dice" id="dice" />
      <h1>
        Peixonalta
        <br />
        System
      </h1>
      <img src={jackO} alt="jack" id="jack" />
      <h3>happy halloween hahaha</h3>
    </Container>
  );
};

export default Logo;

// im here, bitch ja
