import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

export default function FirstScreen() {
  const doTheThing = () => {
    console.log('Doing the thing!')
  }

  return (
    <ScrollView>
      <View>
        <Text>I'm the first screen!</Text>

        <TouchableOpacity onPress={doTheThing}>
          <Text>This is a button!</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}