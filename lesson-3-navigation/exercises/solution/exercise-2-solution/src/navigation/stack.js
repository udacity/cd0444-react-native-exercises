import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/Welcome'
import Details from '../screens/Details'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
            name='Welcome'
            component={Welcome}
        />
        <Stack.Screen
            name='Details'
            component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation