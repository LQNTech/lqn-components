import React from 'react';

import { Container, Icon, Content, Text, Button } from './cardStyles';

const Card = ({ icon, label, ...props }) => {
  return (
    <Container {...props}>
      <Icon src={icon} />
      <Content>
        <Text>{label}</Text>
        <Button>
          <i className="fas fa-long-arrow-alt-right"></i>
        </Button>
      </Content>
    </Container>
  );
};

export default Card;
