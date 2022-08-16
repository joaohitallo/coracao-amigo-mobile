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
  const [responsavelFamiliar, setResponsavelFamiliar] = useState({ nome: '', telefone: '', estadoCivil: '', escolaridade: '', profissao: '' })

  const handleChange = e => {
    const { name, value } = e.target;
    setResponsavelFamiliar(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit() {
    console.log(responsavelFamiliar);
  }

  return (
    <KeyboardAwareScrollView>
      <ScrollView>

        <Container>

          <Header title="Cadastrar Família" />

          <TitleForm name="Responsavel Famíliar" />

          <InputForm
            label="Nome"
            onChangeText={item =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                nome: item
              }))}
            value={responsavelFamiliar.nome}
          />
          <InputForm
            label="Telefone"
            onChangeText={item =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                telefone: item
              }))}
            value={responsavelFamiliar.telefone}
          />
          <InputForm
            label="Estado Civil"
            onChangeText={item =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                estadoCivil: item
              }))}
            value={responsavelFamiliar.estadoCivil}
          />
          <InputForm
            label="Escolaridade"
            onChangeText={item =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                escolaridade: item
              }))}
            value={responsavelFamiliar.escolaridade}
          />
          <InputForm
            label="Profissão"
            onChangeText={item =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                profissao: item
              }))}
            value={responsavelFamiliar.profissao}
          />

          <TitleForm name="Dados Famíliares" />

          <InputForm label="Quantidade de Residentes" />
          <InputForm label="Renda Famíliar Bruta" />
          <InputForm label="Participa de programas sociais" />

          <TitleForm name="Dados Residência" />

          <InputForm label="Estado da Residência" />
          <InputForm label="Tipo de Moradia" />
          <InputForm label="Estrutura da Moradia" />
          <InputForm label="Qualidade da água" />
          <InputForm label="Qualidade da Energia" />
          <ButtonContent>

            <ButtonLogin title="Foto Residência" />

            <ButtonLogin title="Localização" />

          </ButtonContent>
          <InputForm label="Numero de dependentes" />
          {dependentes ? (<View>
            <TitleForm name="Dependente" />

            <InputForm label="Nome" />
            <InputContent>
              <InputForm label="Idade" />
              <InputForm label="Grau de parentesco" />
            </InputContent>
            <InputContent>
              <InputForm label="Nº Calçados" />
              <InputForm label="Nº Roupas" />
            </InputContent>
          </View>
          )

            : (<Text>a</Text>)}



          <ButtonLogin title="Cadastrar" onPress={handleSubmit} />
        </Container>

      </ScrollView>
    </KeyboardAwareScrollView>
  );
}