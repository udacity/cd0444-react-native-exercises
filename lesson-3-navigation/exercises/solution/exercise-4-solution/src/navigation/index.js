import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import First from '../screens/First'
import Second from '../screens/Second'
import Third from '../screens/Third'

const Navigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, size, color }) => {
        //     let iconName;

        //     if (route.name === 'First') {
        //       iconName = '1'
        //     } if (route.name === 'Second') {
        //       iconName = '2'
        //     } else if (route.name === 'Third') {
        //       iconName = '3'
        //     }

        //     return <Text style={{ fontSize: 30 }}>{iconName}</Text>
        //   },
        //   tabBarActiveTintColor: 'black',
        //   tabBarInactiveTintColor: 'gray',
        // })}
      >
        <Tab.Screen
          name='First'
          component={First}
        />
        <Tab.Screen
          name='Second'
          component={Second}
        />
        <Tab.Screen
          name='Third'
          component={Third}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation