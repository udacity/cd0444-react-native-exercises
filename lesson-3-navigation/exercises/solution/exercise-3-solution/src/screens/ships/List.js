import { SafeAreaView, ScrollView } from 'react-native'
import List from '../../features/ships/List'

export default function Ships() {
  return (
    <SafeAreaView>
      <ScrollView>
        <List />
      </ScrollView>
    </SafeAreaView>
  )
}