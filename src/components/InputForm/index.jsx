import React, { useState } from 'react';
import { Container, TextLabel, InputText, InputMask } from './styles.js';

export function InputForm({ value, label, mask, ...rest }) {

  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      {mask ? <InputMask
        mask={mask}
        value={value}
        {...rest}
      />
        :
        <InputText
          value={value}
          {...rest}
        />
      }

    </Container>
  )
}