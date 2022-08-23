import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useEditAnimal, useEditAnimalStatus } from '../hooks'
import Form from '../Form'

const Edit = () => {
  const { params } = useRoute()
  const { animalID } = params
  const { status, onSubmit } = useEditAnimal(animalID)

  return (
    <Form handleSubmit={onSubmit} status={status} animalID={animalID} />
  )
}

export default Edit
