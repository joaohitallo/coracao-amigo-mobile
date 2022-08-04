import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, Title, Barra } from './styles';

export function TitleForm({ value, name, ...rest }) {

  return (
    <Container>
      <Title>{name}</Title>
      <Barra />
    </Container>
  )
}