import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import stylesFn from './styles'

const Form = () => {
  const styles = stylesFn()
  const [verb1, setVerb1] = useState('');
  const [verb2, setVerb2] = useState('');
  const [noun1, setNoun1] = useState('');
  const [noun2, setNoun2] = useState('');
  const [noun3, setNoun3] = useState('');
  const [adjective1, setAdjective1] = useState('');
  const [adjective2, setAdjective2] = useState('');
  const [adjective3, setAdjective3] = useState('');
  const [adjective4, setAdjective4] = useState('');
  const [adverb1, setAdverb1] = useState('');
  const [periodOfTime1, setPeriodOfTime1] = useState('');
  const [periodOfTime2, setPeriodOfTime2] = useState('');
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

      <TextInput
        key={'verb2'}
        placeholder='Present Tense Verb'
        value={verb2}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setVerb2(text)}
      />

      <TextInput
        key={'noun1'}
        placeholder='Proper Noun'
        value={noun1}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setNoun1(text)}
      />

      <TextInput
        key={'noun2'}
        placeholder='Plural Noun'
        value={noun2}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setNoun2(text)}
      />

      <TextInput
        key={'noun3'}
        placeholder='Noun'
        value={noun3}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setNoun3(text)}
      />

      <TextInput
        key={'adjective1'}
        placeholder='Adjective'
        value={adjective1}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setAdjective1(text)}
      />

      <TextInput
        key={'adjective2'}
        placeholder='Adjective'
        value={adjective2}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setAdjective2(text)}
      />

      <TextInput
        key={'adjective3'}
        placeholder='Adjective'
        value={adjective3}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setAdjective3(text)}
      />

      <TextInput
        key={'adjective4'}
        placeholder='Adjective'
        value={adjective4}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setAdjective4(text)}
      />

      <TextInput
        key={'adverb1'}
        placeholder='Adverb'
        value={adverb1}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setAdverb1(text)}
      />

      <TextInput
        key={'periodOfTime1'}
        placeholder='Period of Time'
        value={periodOfTime1}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setPeriodOfTime1(text)}
      />

      <TextInput
        key={'periodOfTime2'}
        placeholder='Period of Time'
        value={periodOfTime2}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => setPeriodOfTime2(text)}
      />

      <TouchableOpacity onPress={() => setStoryReady(true)}>
        <Text>Create Story</Text>
      </TouchableOpacity>

      {storyReady && (
        <View>
          <Text>Principles behind the {noun1}</Text>

          <Text>We follow these {noun2}:</Text>

          <Text>
            {`Our ${adjective1} priority is to satisfy the customer
            through early and continuous delivery of ${adjective2} software.`}
          </Text>

          <Text>
            {`${verb1} ${adjective3} requirements, even late in
            development. Agile processes harness change for
            the customer's ${adjective4} ${noun3}.`}
          </Text>

          <Text>
            {`${verb2} working software ${adverb1}, from a
            ${periodOfTime1} to a ${periodOfTime2}, with a
            preference to the shorter timescale.`}
          </Text>
        </View>
      )}
    </View>
  )
}

export default Form