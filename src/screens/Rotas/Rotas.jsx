import React from 'react';
import { FlatList } from 'react-native';

import { Menu } from '../../components/Menu';
import { RotaButton } from '../../components/RotaButton';

import { Container, Title, ContainerSubMenu, ContentList } from './styles';

export function Rotas() {
  return (
    <>
      <Container>
        <Title>
          Rotas
        </Title>
        <RotaButton />

      </Container>
      <ContainerSubMenu>
        <Menu />
      </ContainerSubMenu>
    </>
  );
}