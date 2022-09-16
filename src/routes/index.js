import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { StackRoutes } from './stack.routes'


export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      <StackRoutes />

    </NavigationContainer>
  )
} 