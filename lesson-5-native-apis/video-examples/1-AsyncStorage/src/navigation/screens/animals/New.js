import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import New from '../../../features/animal/components/New'

const fakeSubmit = (form) => {
  console.log("FAKE SUBMIT!", form.values)
}

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <New disabled={false} onSubmit={fakeSubmit} />
  </SafeAreaView>
)

export default NewScreen
