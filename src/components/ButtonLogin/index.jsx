import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';



export default function ButtonLogin({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}