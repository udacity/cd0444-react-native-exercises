import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import About from '../screens/About'
import AnimalsList from '../screens/animals/List'
import AnimalsView from '../screens/animals/View'
import AnimalsDetails from '../screens/animals/Details'
import HabitatsList from '../screens/habitats/List'
import HabitatsView from '../screens/habitats/View'
import HabitatsDetails from '../screens/habitats/Details'

const Tab = createBottomTabNavigator()
const AnimalStack = createNativeStackNavigator()
const HabitatStack = createNativeStackNavigator()

function AnimalStackScreen() {
  return (
    <AnimalStack.Navigator
      initialRouteName='AnimalsDetails'
    >
      <AnimalStack.Screen
        name="AnimalsList"
        component={AnimalsList}
        options={{ tabBarLabel: 'All Animals' }}
      />
      <AnimalStack.Screen
        name="AnimalsDetails"
        component={AnimalsDetails}
        options={{ tabBarLabel: 'About the Animals List' }}
      />
      <AnimalStack.Screen
        name="AnimalsView"
        component={AnimalsView}
      />
    </AnimalStack.Navigator>
  )
}

function HabitatStackScreen() {
  return (
    <HabitatStack.Navigator>
      <HabitatStack.Screen
        name="HabitatsList"
        component={HabitatsList}
        options={{ tabBarLabel: 'All Habitats' }}
      />
      <HabitatStack.Screen
        name="HabitatsDetails"
        component={HabitatsDetails}
        options={{ tabBarLabel: 'About the Habitats List' }}
      />
      <HabitatStack.Screen
        name="HabitatsView"
        component={HabitatsView}
      />
    </HabitatStack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Animals') {
              iconName = focused ? 'ios-paw' : 'ios-paw-outline';
            } if (route.name === 'About') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            } else if (route.name === 'Habitats') {
              iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'emerald',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Animals'
          component={AnimalStackScreen}
        />
        <Tab.Screen
          name='About'
          component={About}
        />
        <Tab.Screen
          name='Habitats'
          component={HabitatStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation