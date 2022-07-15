import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: #E3F8EC;
  margin-top: 10px;
  padding: 15px;
  
`;

export const TextLabel = styled.Text`
color: #45BA73;
font-weight: bold;
`

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: #E3F8EC;
  padding: 0 13px;
  border: none;
`;