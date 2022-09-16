import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
 
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 8px;
  
`
export const Content = styled.View`
  padding: 8px 24px 8px;
  flex-direction: row;
  
`
export const TextContent = styled.View`
  margin-left: 24px;

`
export const TextRota = styled.Text`
`
export const TextStatus = styled.Text`
  text-align: center;
  color: #fff;
  
`

export const Status = styled.View`
  background-color: #4DC886;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;  
  border: 1px solid #4DC886;
  height: 24px;
  padding: 2px;

`