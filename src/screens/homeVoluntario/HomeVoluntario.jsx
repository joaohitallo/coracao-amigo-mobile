import React from 'react';


import { Container, ContainerDash, Dash, ContainerSubMenu, Title, SubTitle } from './styles';



export function HomeVoluntario() {
  return (
    <Container >
      <ContainerDash >
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