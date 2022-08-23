import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const initializeStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer,
    preloadedState,
  })

  return store
}

export default initializeStore
