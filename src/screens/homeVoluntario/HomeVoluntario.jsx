import React from 'react';
import { Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Content, ContainerDash, Dash, ContainerSubMenu, Title, SubTitle, ButtonLogout } from './styles';



export function HomeVoluntario() {
  return (
    <Container >
      <ContainerDash >
        <Content>
          <ButtonLogout>
            <Text>Sair</Text>
            <MaterialCommunityIcons name="logout" size={18} color="black" />
          </ButtonLogout>
          <MaterialCommunityIcons name="account" size={32} color="black" />
        </Content>
        <Title>Bem vindo @Warley</Title>
        <SubTitle> Nº Entregas realizadas</SubTitle>
        <Dash>
          <SubTitle> 15 Entregas</SubTitle>
        </Dash>
      </ContainerDash>
      <ContainerSubMenu>
        <Title>sdf</Title>
      </ContainerSubMenu>
    </Container>
  );
}