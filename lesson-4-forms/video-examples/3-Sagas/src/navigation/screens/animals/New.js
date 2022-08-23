import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import New from '../../../features/animal/New'

const fakeSubmit = (form) => {
  console.log("FAKE SUBMIT!", form.values)
}

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New disabled={false} onSubmit={fakeSubmit} />
    </ScrollView>
  </SafeAreaView>
)

export default NewScreen
