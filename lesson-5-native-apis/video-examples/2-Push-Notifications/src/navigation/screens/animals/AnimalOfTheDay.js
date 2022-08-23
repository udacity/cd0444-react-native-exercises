import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import AnimalOfTheDay from '../../../features/animal/AnimalOfTheDay'

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
      <AnimalOfTheDay />
  </SafeAreaView>
)

export default NewScreen
