import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AgileMadLib from './screens/madlibs/AgileManifesto'
import AddBook from './screens/books/AddBook'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Add Book to Library'}>
                <Stack.Screen
                    name='MadLib #1'
                    component={AgileMadLib}
                />
                <Stack.Screen
                    name='Add Book to Library'
                    component={AddBook}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation