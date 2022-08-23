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

  return (
    
  )
}

export default Form
