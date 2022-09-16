import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  flex-direction: column;
  

`
export const ContentList = styled(FlatList)`
  flex: 1;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding: 34px;
  text-align: center;
`
export const ContainerSubMenu = styled.View`
  height: 10%;
  margin-top: auto;
  
`;
