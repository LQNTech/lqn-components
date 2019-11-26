import React from 'react';

import { Container, Content, Text } from './headerStyles';
import allianceLogo from '../assets/allianze2.png';

const Header = ({ children }) => {
  const params = new URLSearchParams(global.location.search);
  const referrerCode = params.get('referrerCode');
  const logo =
    referrerCode === 'xr57608'
      ? allianceLogo
      : 'https://loquenecesito.co/assets/logos/lqnLogo.svg?v=15fe924858';

  return (
    <Container>
      <Content>
        <img src={logo} height="50" alt="logo" />
        <Text>Financiación de Vivienda</Text>
        {children}
      </Content>
    </Container>
  );
};

export default Header;
