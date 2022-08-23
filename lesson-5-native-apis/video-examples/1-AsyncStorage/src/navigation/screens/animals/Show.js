import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import Show from '../../../features/animal/components/Show'

// top level display component only - declares a view that will be part of navigation
const ShowScreen = () => (
  <SafeAreaView>
    <Show />
  </SafeAreaView>
)

export default ShowScreen