import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, Title, Barra } from './styles';

export function Header({ name, ...rest }) {

  return (
    <Container>
      <Title>{name}</Title>
      <Barra />
    </Container>
  )
}