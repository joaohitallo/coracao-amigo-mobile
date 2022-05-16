import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from '../screens/login/Login'
import { Home } from '../screens/home/Home'

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="login"
        component={Login}
      />

      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  )
}