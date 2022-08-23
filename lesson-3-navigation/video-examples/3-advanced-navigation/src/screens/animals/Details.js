import { SafeAreaView, ScrollView } from 'react-native'
import Details from '../../features/animals/Details'

export default function Welcome() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Details />
      </ScrollView>
    </SafeAreaView>
  )
}