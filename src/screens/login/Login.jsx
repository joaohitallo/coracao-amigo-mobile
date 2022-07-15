import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, ContainerInput, TextTitle, ImageLogo } from './styles';
import { InputLogin } from '../../components/InputLogin/index'
import { ButtonLogin } from '../../components/ButtonLogin';

import logo from '../../assets/Logo.png'


export function Login({ navigation }) {

  function handleLogin() {
    console.log('ah');
    navigation.navigate('HomeVoluntario')
  }


  return (
    <Container>
      <TextTitle> Coração Amigo</TextTitle>
      <ImageLogo source={logo} />
      <ContainerInput>
        <InputLogin name="Login:" />
        <InputLogin name="Senha:" />
      </ContainerInput>
      <ButtonLogin
        title="Entrar"
        onPress={handleLogin}
      />

    </Container>
  );


}