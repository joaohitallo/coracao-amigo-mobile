import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Container, ButtonContent, InputContent } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { InputForm } from '../../components/InputForm/index'
import { TitleForm } from '../../components/TitleForm/index'
import { Header } from '../../components/Header';
import ButtonLogin from '../../components/ButtonLogin';



export function CadastroUser() {
  const dependente = {
    nome: '',
    idade: '',
    grauParentesco: '',
    numeroCalcado: '',
    numeroRoupa: '',
  }
  const [dependentes, setDependentes] = useState([dependente])

  return (
    <KeyboardAwareScrollView>
      <ScrollView>

        <Container>

          <Header title="Cadastrar Família" />

          <TitleForm name="Responsavel Famíliar" />

          <InputForm name="Nome" />
          <InputForm name="Telefone" />
          <InputForm name="Estado Civil" />
          <InputForm name="Escolaridade" />
          <InputForm name="Profissão" />

          <TitleForm name="Dados Famíliares" />

          <InputForm name="Quantidade de Residentes" />
          <InputForm name="Renda Famíliar Bruta" />
          <InputForm name="Participa de programas sociais" />

          <TitleForm name="Dados Residência" />

          <InputForm name="Estado da Residência" />
          <InputForm name="Tipo de Moradia" />
          <InputForm name="Estrutura da Moradia" />
          <InputForm name="Qualidade da água" />
          <InputForm name="Qualidade da Energia" />
          <ButtonContent>

            <ButtonLogin title="Foto Residência" />

            <ButtonLogin title="Localização" />

          </ButtonContent>
          <InputForm name="Numero de dependentes" />
          {dependentes ? (<View>
            <TitleForm name="Dependente" />

            <InputForm name="Nome" />
            <InputContent>

              <InputForm name="Idade" />

              <InputForm name="Grau de parentesco" />

            </InputContent>

            <InputForm name="Nº Calçados" />
            <InputForm name="Nº Roupas" />
          </View>
          )

            : (<Text>a</Text>)}



          <ButtonLogin title="Cadastrar" />
        </Container>

      </ScrollView>
    </KeyboardAwareScrollView>
  );
}