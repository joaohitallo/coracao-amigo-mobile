import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, TextLabel, InputText } from './styles.js';

export function SelectContent({ label, children }) {

  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputText>{children}</InputText>
    </Container>
  )
}