import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import About from '../screens/About'
import ShipsList from '../screens/ships/List'
import CrewList from '../screens/crew/List'

const Tab = createBottomTabNavigator()
const ShipsStack = createNativeStackNavigator()
const CrewStack = createNativeStackNavigator()

function ShipsStackScreen() {
  return (
    <ShipsStack.Navigator>
      <ShipsStack.Screen
        name="ShipsList"
        component={ShipsList}
        options={{ headerShown: false }}
      />
    </ShipsStack.Navigator>
  )
}

function CrewStackScreen() {
  return (
    <CrewStack.Navigator>
      <CrewStack.Screen
        name="CrewList"
        component={CrewList}
      />
    </CrewStack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Ships') {
              iconName = 'rocket-sharp'
            } if (route.name === 'About') {
              iconName = focused ? 'ios-star' : 'ios-star-outline'
            } else if (route.name === 'Crew') {
              iconName = 'ios-body'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'emerald',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='About'
          component={About}
        />
        <Tab.Screen
          name='Ships'
          component={ShipsStackScreen}
        />
        <Tab.Screen
          name='Crew'
          component={CrewStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation