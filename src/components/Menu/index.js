import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { Container, Button, TextButton } from './styles';

export function Menu() {
  return (
    <Container>
      <Button>
        <FontAwesome name="home" size={24} color="black" />
        <Text>Home</Text>
      </Button>
      <Button>
        <Octicons name="package-dependents" size={24} color="black" />
        <Text>Entregas</Text>
      </Button>
      <Button>
        <Ionicons name="newspaper-sharp" size={24} color="black" />
        <Text>??????</Text>
      </Button>
      <Button>
        <Foundation name="map" size={24} color="black" />
        <Text>Mapa</Text>
      </Button>
    </Container>
  );
}