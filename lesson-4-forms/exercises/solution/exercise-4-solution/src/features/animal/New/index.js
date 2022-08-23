
import React from 'react'
import { useNewAnimal, useCreateAnimalStatus } from '../hooks'
import Form from '../Form'

const New = () => {
  const { onSubmit } = useNewAnimal()
  const status = useCreateAnimalStatus()

  return (
    <Form handleSubmit={onSubmit} status={status} animalID={null} />
  )
}

export default New
  