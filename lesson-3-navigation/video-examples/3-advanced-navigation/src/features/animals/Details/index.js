import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function AnimalsDetails() {
  const { navigate } = useNavigation()
  return (
    <View>
      <Text>This is the animals details screen</Text>
      <TouchableOpacity 
        onPress={() => {
          navigate('AnimalsList')
        }}
      >
        <Text>See All Animals</Text>
      </TouchableOpacity>
    </View>
  )
}