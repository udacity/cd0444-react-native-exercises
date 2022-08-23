import { combineReducers } from 'redux'
import book from '../features/book/reducers'

// we don't technically need this file yet because 
// we don't have more than one reducer to combine, 
// but we are assuming the app will grow to have more than one feature

const rootReducer = combineReducers({
  book
})

export default rootReducer

