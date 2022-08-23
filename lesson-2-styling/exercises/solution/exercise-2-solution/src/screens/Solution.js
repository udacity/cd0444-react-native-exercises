import { View, Text } from 'react-native'

export default function FirstScreen() {
  return (
    <View style={{height: '100%', justifyContent: 'space-between'}}>
      <View style={{backgroundColor: 'yellow', height: 200, width: 200}}>
        <Text>I'm a yellow square!</Text>
      </View>

      <View style={{ alignSelf: 'center', backgroundColor: 'blue', height: 100, width: 100}}>
        <Text>I'm a blue square!</Text>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <View style={{backgroundColor: 'green', height: 150, width: 150}}>
          <Text>I'm a green square!</Text>
        </View>
      </View>
    </View>
  )
}