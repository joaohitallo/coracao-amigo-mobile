import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';


import { Menu } from '../../components/Menu';
import { Title } from '../../components/Title';

import { Container, ContainerSubMenu } from './styles';



export function Mapa() {
  return (
    <>
      <Container>
        <Title title="Mapa" />
        <MapView style={styles.map}
          initialRegion={{
            latitude: -5.36997,
            longitude: -49.1169,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Container>
      <ContainerSubMenu>
        <Menu />
      </ContainerSubMenu>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
});