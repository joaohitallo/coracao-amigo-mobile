import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles'

import { InputForm } from '../../components/InputForm/index'
import { TitleForm } from '../../components/TitleForm/index'

export function CadastroUser() {
  return (
    <Container>
      <TitleForm name="Responsavel Famíliar" />
      <InputForm name="Nome" />
      <InputForm name="Telefone" />
      <InputForm name="Estado Civil" />
      <InputForm name="Escolaridade" />
      <InputForm name="Profissão" />
    </Container>
  );
}