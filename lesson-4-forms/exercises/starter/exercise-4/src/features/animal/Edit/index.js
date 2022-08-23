import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useUpdateFields, useEditAnimal, useEditAnimalStatus } from '../hooks'
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../../utilities/helpers'
import formStyles from './styles'

const Form = () => {
  const styles = formStyles()
  const { params } = useRoute()
  const { fields, setFormField } = useUpdateFields(params.animalID)
  const { onSubmit } = useEditAnimal(params.animalID)
  const status = useEditAnimalStatus()

  const {
    common_name,
    scientific_name,
  } = fields

  /*
  const love = Infinity
  let happiness

  while (tea.count <= 0) {
    const tea = makeTea(love)

    happiness = low
  }

  happiness = consumeTea(tea)

  */

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <TextInput
          key={'common_name'}
          placeholder={common_name || 'Common Name'}
          value={common_name || ''}
          style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
          onChangeText={v => setFormField('common_name', v)}
        />

        <View style={{ height: 15, width: '100%' }}></View>

        <TextInput
          key={'scientific_name'}
          placeholder={scientific_name || 'Scientific Name'}
          value={scientific_name || ''}
          style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
          onChangeText={v => setFormField('scientific_name', v)}
        />

        <TouchableOpacity onPress={onSubmit} disabled={status !== 'PENDING'}>
          <Text>Submit</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Form
