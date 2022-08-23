import { SafeAreaView, ScrollView } from 'react-native'
import List from '../../features/crew/List'

export default function Crew() {
  return (
    <SafeAreaView>
      <ScrollView>
        <List />
      </ScrollView>
    </SafeAreaView>
  )
}