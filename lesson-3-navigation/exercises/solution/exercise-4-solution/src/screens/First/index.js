import { View, Text, Button } from 'react-native'
import { useGoBack, useGoForward } from '../hooks'

export default function First() {
  const number = 1
  const goBack = useGoBack(number)
  const goForward = useGoForward(number)

  return (
    <View>
      <Text>This is the First screen</Text>

      <Button 
        title="Back to 3"
        onPress={goBack}
      />

      <Button 
        title="Forward to 2"
        onPress={goForward}
      />

    </View>
  )
}