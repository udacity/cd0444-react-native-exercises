import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HabitatView() {
  const { navigate } = useNavigation()

  return (
    <View>
      <Text>This is the single habitat info screen</Text>
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