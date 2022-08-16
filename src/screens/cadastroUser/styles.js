import styled, { css } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
  padding: 0px 24px;
`;

export const ButtonContent = styled.View`
  margin: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around
`
export const InputContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
