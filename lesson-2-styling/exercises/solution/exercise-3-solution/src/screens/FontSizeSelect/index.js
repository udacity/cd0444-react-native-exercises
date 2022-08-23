import { View, Text, Button } from 'react-native'
import { useState } from 'react'
import createStyles from './styles'

export default function FontSizeSelect() {
  const [fontSize, setFontSize] = useState(12)
  const styles = createStyles(fontSize)

  console.log(styles, fontSize)
  
  return (
    <View>
      <Text style={styles.fontSize}>Try out different font sizes</Text>
      <Button 
        onPress={() => setFontSize(10)}
        title='10'
      />
      <Button 
        onPress={() => setFontSize(12)}
        title='12'
      />
      <Button 
        onPress={() => setFontSize(15)}
        title='15'
      />
      <Button 
        onPress={() => setFontSize(20)}
        title='20'
      />
      <Button 
        onPress={() => setFontSize(50)}
        title='50'
      />
    </View>
  )
}