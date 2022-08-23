import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLinkTo } from '@react-navigation/native';

export default function AnimalsList() {
  const { navigate } = useNavigation()
  const linkTo = useLinkTo()

  return (
    <View>
      <Text>This is the animals list view screen</Text>

      <Text style={{marginTop: 50}}>Don't see the type of animals you are looking for? </Text>
      <TouchableOpacity 
        onPress={() => {
          navigate('HabitatsList')
        }}
      >
        <Text>See All Habitats</Text>
      </TouchableOpacity>

      <Button 
        onPress={() => linkTo('/habitats/habitatsList')}
        title="See All Habitats"
      />

    </View>
  )
}