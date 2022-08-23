import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Welcome from '../screens/Welcome'
import Details from '../screens/Details'

const Drawer = createDrawerNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#d1eac3',
            width: 300,
          },
        }}
      >
        <Drawer.Screen
          name='Welcome'
          component={Welcome}
        />
        <Drawer.Screen
          name='Details'
          component={Details}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigation