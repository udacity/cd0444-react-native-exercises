import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import AgileManifesto from '../../../features/madlibs/AgileManifesto'

// top level display component - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <AgileManifesto />
    </ScrollView>
  </SafeAreaView>
)

export default NewScreen
