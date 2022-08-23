import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import Edit from '../../../features/animal/components/Edit'

const fakeSubmit = (form) => {
  console.log("FAKE SUBMIT!", form.values)
}

// top level display component only - declares a view that will be part of navigation
const EditScreen = () => (
  <SafeAreaView>
    <Edit disabled={false} onSubmit={fakeSubmit} />
  </SafeAreaView>
)

export default EditScreen
