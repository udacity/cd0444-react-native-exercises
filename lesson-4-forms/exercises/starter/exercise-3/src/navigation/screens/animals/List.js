import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import List from '../../../features/animal/List'

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
)

export default NewScreen
