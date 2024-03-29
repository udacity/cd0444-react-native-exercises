import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useUpdateFields } from '../hooks'
import formStyles from './styles'

const Form = ({ disabled = false, onSubmit }) => {
  const styles = StyleSheet.create(formStyles())
  const { fields, setFormField } = useUpdateFields()
  const [value, onChangeText] = React.useState('Dog');

  console.log(setFormField)

  const {
    common_name,
    scientific_name,
  } = fields

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        key={'common_name'}
        placeholder='Common Name'
        value={value}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={text => onChangeText(text)}
      />

      <View style={{ height: 15, width: '100%' }}></View>

      <TextInput
          key={'scientific_name'}
          placeholder='Scientific Name'
          value={scientific_name}
          style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
          onChangeText={v => setFormField('scientific_name', v)}
      />

      <TouchableOpacity
        onPress={onSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form
