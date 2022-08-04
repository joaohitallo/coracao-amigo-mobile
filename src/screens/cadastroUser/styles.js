import styled, { css } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
  padding: 0px 24px;
`;
