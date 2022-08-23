import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native'
import { useUpdateFields, useNewAnimal } from '../hooks'
import formStyles from './styles'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const Form = ({ disabled = false }) => {
  const styles = StyleSheet.create(formStyles())
  const { fields, setFormField } = useUpdateFields()
  const { onSubmit } = useNewAnimal()

  // const {
  //     common_name,
  //     scientific_name,
  //     description,
  //     endangered_status,
  //     population,
  //     invasive
  // } = fields

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
        value={common_name || ''}
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
        onChangeText={v => setFormField('common_name', v)}
      />

      <View style={{ height: 15, width: '100%' }}></View>

      <TextInput
          key={'scientific_name'}
          placeholder='Scientific Name'
          value={scientific_name || ''}
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
