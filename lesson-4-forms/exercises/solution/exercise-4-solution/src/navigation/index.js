import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/Welcome'
import AddAnimal from './screens/animals/New'
import EditAnimal from './screens/animals/Edit'
import AnimalsList from './screens/animals/List'

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
                    name='Animals'
                    component={AnimalsList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation