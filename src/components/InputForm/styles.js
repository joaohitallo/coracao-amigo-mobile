import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 10px;
  
`;

export const TextLabel = styled.Text`
color: #000000;

`

export const InputText = styled(TextInput)`
 border: 1px solid #D7D7D7;
 margin-top: 8px;
 border-radius: 5px;
`;