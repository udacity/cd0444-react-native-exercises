import { View, Text } from 'react-native'
import stylesFn from '../Welcome/styles'

export default function Details() {
  const styles = stylesFn()
  return (
    <View>
      <Text style={styles.h1}>This is a details screen</Text>
    </View>
  )
}