import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();


import { Home } from '../screens/home/Home'

export function TabRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />
    </Navigator>
  )
}