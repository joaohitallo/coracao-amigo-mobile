import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from '../screens/login/Login'
import { CadastroUser } from '../screens/cadastroUser/CadastroUser'
export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="login"
        component={Login}
      />

      <Screen
        name="CadastroUser"
        component={CadastroUser}
      />
    </Navigator>
  )
}