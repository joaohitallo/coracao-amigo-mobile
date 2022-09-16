import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`
export const Button = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text`
`