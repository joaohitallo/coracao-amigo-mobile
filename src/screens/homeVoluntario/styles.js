
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
  padding-top: 24px;
`;

export const Content = styled.View`
  margin-top: 18px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 12px;
`

export const ContainerDash = styled.View`
  display: flex;
  flex-direction: column;
 margin: 30px 10px 10px 10px;
 padding: 10px;
  background-color: #E3F8EC;
  //justify-content: space-around;
  height: 85%;
  border-radius:10px;
`;

export const Title = styled.Text`
text-align: center;
margin: 5px;

`
export const ButtonLogout = styled(TouchableOpacity)`
  
  flex-direction: row;
  justify-content: space-around;
  padding: 4px 0px 4px;
  border: 1px solid black;
  border-radius: 6px;
  width: 60px;
`

export const SubTitle = styled.Text`
font-weight: bold;
margin: 5px;
`
export const Dash = styled.View`
   background-color: #fff;
  padding: 8px;
  border-radius: 10px;
`;

export const ContainerSubMenu = styled.View`
  height: 10%;
//background-color: black;
`;

