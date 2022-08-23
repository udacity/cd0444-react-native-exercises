import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useUpdateFields } from '../hooks'

const Form = () => {
  const { fields, setFormField } = useUpdateFields()

  const {
    title,
    author,
    publication_date
  } = fields


  return (
    <View>
      <TextInput
        key={'title'}
        placeholder='Book Title'
        value={title || ''}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={setFormField('title')}
      />

      <TextInput
        key={'author'}
        placeholder='Author'
        value={author || ''}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={setFormField('author')}
      />

      <TextInput
        key={'publication_date'}
        placeholder='Publication Date'
        value={publication_date || ''}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={setFormField('publication_date')}
      />

      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form
