import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import stylesFn from './styles'

const Form = () => {
  const styles = stylesFn()
  const [verb1, setVerb1] = useState('');
  const [storyReady, setStoryReady] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        key={'verb1'}
        placeholder='Verb'
        value={verb1}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setVerb1(text)}
      />

      <TouchableOpacity onPress={}>
        <Text>Create Story</Text>
      </TouchableOpacity>

      {storyReady && (
        <View>
          <Text>Principles behind the {noun1}</Text>

          <Text>We follow these {noun2}:</Text>

          <Text>
            Our {adjective1} priority is to satisfy the customer
            through early and continuous delivery of {adjective2} 
            software.
          </Text>

          <Text>
            Welcome {adjective3} requirements, even late in
            development. Agile processes harness change for
            the customer's {adjective4} {noun2}.
          </Text>

          <Text>
            {verb1} working software {adjective5}, from a
            {periodOfTime1} to a {periodOfTime2}, with a
            preference to the shorter timescale.
          </Text>
        </View>
      )}
    </View>
  )
}

export default Form