import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HabitatsDetails() {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>This is the habitats details screen</Text>
      <TouchableOpacity 
        onPress={() => {
          navigate('Details')
        }}
      >
        <Text>See Details</Text>
      </TouchableOpacity>
    </View>
  )
}