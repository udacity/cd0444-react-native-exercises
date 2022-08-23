import { combineReducers } from 'redux'
import animal from '../features/animal/reducers'
// import habitat from '../features/habitat/reducers'

const rootReducer = combineReducers({
    animal,
    // habitat
})

export default rootReducer

