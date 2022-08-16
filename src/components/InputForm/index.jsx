import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, TextLabel, InputText } from './styles.js';

export function InputForm({ value, label, ...rest }) {

  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputText
        value={value}
        {...rest}
      />
    </Container>
  )
}