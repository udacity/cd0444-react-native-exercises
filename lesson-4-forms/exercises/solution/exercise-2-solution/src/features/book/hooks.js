import { useDispatch, useSelector } from 'react-redux'
import * as actions from './reducers'

export const useUpdateFields = () => {
  const dispatch = useDispatch()
  const fields = useSelector(state => state.book.form.fields)

  return {
    fields,
    setFormField: (field) => (value) => { 
      console.log(`Updating field ${field} to ${value}`)
      return dispatch(actions.setFormField({ field, value }))
    },
  }
}
