import React from 'react';

import { Container, LQNLogo, Content, Text } from './headerStyles';
import allianceLogo from '../assets/allianze2.png';

const Header = ({ href, children }) => {
  const params = new URLSearchParams(global.location.search);
  const referrerCode = params.get('referrerCode');
  const leadCode = params.get('code');

  const logo =
    referrerCode === 'xr57608'
      ? allianceLogo
      : 'https://loquenecesito.co/assets/logos/lqnLogo.svg?v=15fe924858';

  return (
    <Container>
      <Content>
        <LQNLogo href={leadCode ? `${href}?code=${leadCode}` : '/'}>
          <img src={logo} height="50" alt="logo" />
        </LQNLogo>
        <Text>Financiación de Vivienda</Text>
        {children}
      </Content>
    </Container>
  );
};

export default Header;
