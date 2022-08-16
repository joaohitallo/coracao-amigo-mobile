import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  min-width: 140px;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: #4DC886;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  font-weight: bold;
`;