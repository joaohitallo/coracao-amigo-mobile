import React, { useState } from 'react';
import { TextInputProps, Text } from 'react-native';
import { Container, TextLabel, InputText } from './styles.js';

export function InputForm({ value, name, ...rest }) {

  return (
    <Container>
      <TextLabel>{name}</TextLabel>
      <InputText
        value={value}
        {...rest}
      />
    </Container>
  )
}