import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/Welcome'
import AddAnimal from './screens/animals/New'
import AnimalsList from './screens/animals/List'
import AnimalOfTheDay from './screens/animals/AnimalOfTheDay';

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'AnimalOfTheDay'}>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='Add Animal'
                    component={AddAnimal}
                />
                <Stack.Screen
                    name='Animals'
                    component={AnimalsList}
                />
                <Stack.Screen
                    name='AnimalOfTheDay'
                    component={AnimalOfTheDay}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation