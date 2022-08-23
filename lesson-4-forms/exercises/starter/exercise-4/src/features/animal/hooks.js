import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = (animalID) => {
  const dispatch = useDispatch()
  let fields;

  if (animalID) {
    fields = useSelector(state => state.animal.list.animals.find(a => a.id === animalID))
  }
  fields = useSelector(state => state.animal.form.fields)

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
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

export const useEditAnimal = (animalID) => {
  const dispatch = useDispatch()

  return {
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
