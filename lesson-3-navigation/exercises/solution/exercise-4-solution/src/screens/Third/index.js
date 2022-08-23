import { View, Text, Button } from 'react-native'
import { useGoBack, useGoForward } from '../hooks'

export default function Third() {
  const number = 3
  const goBack = useGoBack(number)
  const goForward = useGoForward(number)

  return (
    <View>
      <Text>This is the Third screen</Text>

      <Button 
        title="Back to 2"
        onPress={goBack}
      />

      <Button 
        title="Forward to 3"
        onPress={goForward}
      />

    </View>
  )
}