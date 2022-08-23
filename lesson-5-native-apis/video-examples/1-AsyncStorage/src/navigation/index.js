import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/Welcome'
import AddAnimal from './screens/animals/New'
import AnimalsList from './screens/animals/List'
import AnimalShow from './screens/animals/Show'
import EditAnimal from './screens/animals/Edit'

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
              <Stack.Screen
                  name='Edit Animal'
                  component={EditAnimal}
              />
              <Stack.Screen
                  name='Animals List'
                  component={AnimalsList}
              />
              <Stack.Screen
                  name='View Animal'
                  component={AnimalShow}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation