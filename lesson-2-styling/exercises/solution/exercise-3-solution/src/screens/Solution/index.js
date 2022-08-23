import { View, Text } from 'react-native'
import stylesFn from './styles'

export default function FirstScreen() {
  const styles = stylesFn()
  return (
    <View style={styles.container}>
      <View style={styles.yellowSquare}>
        <Text>I'm a yellow square!</Text>
      </View>

      <View style={styles.blueSquare}>
        <Text>I'm a blue square!</Text>
      </View>

      <View style={styles.greenSquareContainer}>
        <View style={styles.greenSquare}>
          <Text>I'm a green square!</Text>
        </View>
      </View>
    </View>
  )
}