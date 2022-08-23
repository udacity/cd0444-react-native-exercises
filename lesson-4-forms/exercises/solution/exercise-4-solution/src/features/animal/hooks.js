import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PENDING, INPROGRESS } from '../../utilities/helpers'
import * as actions from './reducers'

export const useUpdateFields = (animalID = null) => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.animal.edit.status)
  const fields = useSelector(state => state.animal.form.fields)

  console.log("animal ID ::: ", animalID, status, animalID && status !== INPROGRESS)

  useEffect(() => {
    if (animalID && status === PENDING) {
      dispatch(actions.setForm(animalID))
    }
  }, [animalID, status])

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)

      dispatch(actions.setFormField({ field, value }))
    },
  }
}

export const useNewAnimal = () => {
  const dispatch = useDispatch()

  return {
      onSubmit: () => {
        console.log('Dispatching CREATE_ANIMAL action')
        dispatch(actions.createAnimal())
      }
  }
}

export const useCreateAnimalStatus = () => {
  return useSelector(state => state.animal.create.status)
}

export const useEditAnimal = (animalID) => {
  const dispatch = useDispatch()
  const status = useEditAnimalStatus()

  return {
    status,
    onSubmit: () => {
      console.log('Dispatching EDIT_ANIMAL action')
      dispatch(actions.editAnimal(animalID))
    }
  }
}

export const useEditAnimalStatus = () => {
  return useSelector(state => state.animal.edit.status)
}

export const useListAnimals = () => {
  return useSelector(state => state.animal.list.animals)
}
