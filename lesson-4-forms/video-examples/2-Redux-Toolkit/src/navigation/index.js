import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/Welcome'
import AddAnimal from './screens/animals/new'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Welcome'}>
              <Stack.Screen
                  name='Welcome'
                  component={WelcomeScreen}
              />
              <Stack.Screen
                  name='Add Animal'
                  component={AddAnimal}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation