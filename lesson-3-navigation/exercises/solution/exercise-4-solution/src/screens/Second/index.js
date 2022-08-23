import { View, Text, Button } from 'react-native'
import { useGoBack, useGoForward } from '../hooks'

export default function Second() {
  const number = 2
  const goBack = useGoBack(number)
  const goForward = useGoForward(number)

  return (
    <View>
      <Text>This is the Second screen</Text>

      <Button 
        title="Back to 1"
        onPress={goBack}
      />

      <Button 
        title="Forward to 3"
        onPress={goForward}
      />

    </View>
  )
}