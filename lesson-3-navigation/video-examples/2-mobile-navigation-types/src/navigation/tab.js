import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from '../screens/Welcome'
import Details from '../screens/Details'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Details') {
              iconName = 'ios-analytics';
            } else if (route.name === 'Welcome') {
              iconName = focused ? 'ios-baseball-sharp' : 'ios-add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Welcome'
          component={Welcome}
        />
        <Tab.Screen
          name='Details'
          component={Details}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation