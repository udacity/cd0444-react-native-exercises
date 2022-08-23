import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import stylesFn from './styles'

export default function Welcome() {
  const { navigate } = useNavigation()
  const styles = stylesFn()
  return (
    <View>
      <Text style={styles.h1}>This is a Welcome screen</Text>
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