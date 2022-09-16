import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Content, TextContent, Status, TextRota, TextStatus } from './styles';

export function RotaButton() {
  return (
    <Container>
      <Content>
        <MaterialCommunityIcons name="google-maps" size={34} color="black" />
        <TextContent>
          <TextRota>Rota: Folha 18</TextRota>
          <TextRota>Quantidade de entregas: 4</TextRota>
        </TextContent>
      </Content>
      <Status>
        <TextStatus>Rota Ativa</TextStatus>
      </Status>
    </Container>
  );
}