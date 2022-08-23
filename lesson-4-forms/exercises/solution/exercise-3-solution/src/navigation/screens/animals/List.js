import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import List from '../../../features/animal/List'

// top level display component only - declares a view that will be part of navigation
const ListScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
)

export default ListScreen
