import { Text, Button, TouchableOpacity, Pressable, SafeAreaView, ScrollView } from 'react-native'

export default function Views() {
  const doSomething = () => {
    console.log('did a thing...')
  }

  const doSomethingOnStart = () => {
    console.log('did a thing at the beginning of a button press...')
  }

  const doSomethingIfLong = () => {
    console.log('did a different thing at after a long press...')
  }

  return (
    <SafeAreaView>
      <ScrollView>

        <TouchableOpacity onPress={doSomething}>
          I don't show up
        </TouchableOpacity>

        <Button 
          onPress={doSomething} 
          title="Button"
          color="#189BB8"
        />

        <TouchableOpacity onPress={doSomething}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>

        <Pressable
          onPress={doSomething}
          onPressIn={doSomethingOnStart}
          onLongPress={doSomethingIfLong}
        >
          <Text>Pressable</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  )
}
