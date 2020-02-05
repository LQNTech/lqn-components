import React from 'react';

import { Container, Icon, Content, Text, Button, Small } from './cardStyles';

const Card = ({ icon, label, footer, ...props }) => {
  return (
    <Container {...props}>
      <Icon src={icon} />
      <Content>
        <Text>{label}</Text>
        <Button>
          <i className="fas fa-long-arrow-alt-right"></i>
        </Button>
      </Content>
      <Small>{footer}</Small>
    </Container>
  );
};

export default Card;
