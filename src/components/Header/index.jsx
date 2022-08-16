import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, Title, Barra } from './styles';

export function Header({ title, ...rest }) {

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}