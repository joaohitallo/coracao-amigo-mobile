import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Button, TextButton } from './styles';

export function Menu({ }) {

  const navigation = useNavigation();

  return (
    <Container>
      <Button
        onPress={() => navigation.navigate('HomeVoluntario')}
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text>Home</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate('Rotas')}
      >
        <MaterialCommunityIcons name="clipboard-list" size={24} color="black" />
        <Text>Rotas</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate('CadastroUser')}
      >
        <Ionicons name="newspaper-sharp" size={24} color="black" />
        <Text>Cadastrar</Text>
      </Button>
      <Button>
        <FontAwesome5 name="route" size={24} color="black" />
        <Text>Mapa</Text>
      </Button>
    </Container>
  );
}

