import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AgileMadLib from './screens/Madlibs/AgileManifesto'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'AgileMadLib'}>
                <Stack.Screen
                    name='MadLib #1'
                    component={AgileMadLib}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation