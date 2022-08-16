import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Container, ButtonContent, InputContent, InputMask } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaskInput from 'react-native-mask-input';
import RNPickerSelect from 'react-native-picker-select'

import { InputForm } from '../../components/InputForm/index'
import { SelectContent } from '../../components/SelectContent';
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
            onChangeText={(masked, unmasked) =>
              setResponsavelFamiliar(prevState => ({
                ...prevState,
                telefone: unmasked
              }))}
            value={responsavelFamiliar.telefone}
            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />
          <SelectContent label="Estado Civil">
            <RNPickerSelect
              placeholder={{ label: "Selecione uma Opção", value: 0 }}
              onValueChange=
              {item =>
                setResponsavelFamiliar(prevState => ({
                  ...prevState,
                  estadoCivil: item
                }))}
              items={[
                { label: "Solteiro", value: "solteiro" },
                { label: "Casado", value: "casado" },
                { label: "Divorciado", value: "divorciado" },
              ]}
            />
          </SelectContent>
          <SelectContent label='Escolaridade'>
            <RNPickerSelect
              placeholder={{ label: "Selecione uma Opção", value: 0 }}
              onValueChange={item =>
                setResponsavelFamiliar(prevState => ({
                  ...prevState,
                  escolaridade: item
                }))}
              items={[
                { label: "Ensino Fundamental inconpleto", value: "ensino Fundamental inconpleto" },
                { label: "Ensino Fundamental", value: "ensino Fundamental" },
                { label: "Ensino médio incompleto", value: "ensino medio incompleto" },
                { label: "Ensino médio", value: "ensino medio" },
                { label: "Ensino superior incompleto", value: "ensino superior incompleto" },
                { label: "Ensino superior", value: "ensino superior" },
              ]}
            />
          </SelectContent>

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

const styles = StyleSheet.create({
  inputAndroid: {
    borderWidth: 1,
    borderColor: 'gray',

  },
  placeholder: {


  },


})