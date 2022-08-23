import { SafeAreaView, ScrollView } from 'react-native'
import List from '../../features/habitats/List'

export default function Welcome() {
  return (
    <SafeAreaView>
      <ScrollView>
        <List />
      </ScrollView>
    </SafeAreaView>
  )
}