import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import { Login } from '../screens/login/Login'
import { CadastroUser } from '../screens/cadastroUser/CadastroUser'
import { HomeVoluntario } from '../screens/homeVoluntario/HomeVoluntario';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="CadastroUser"
        component={CadastroUser}
        options={{ headerShown: false }}
      />
      <Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Screen
        name="HomeVoluntario"
        component={HomeVoluntario}
        options={{ headerShown: false }}
      />

    </Navigator>
  )
}