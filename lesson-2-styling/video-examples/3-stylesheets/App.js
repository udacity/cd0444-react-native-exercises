import { StyleSheet, View } from 'react-native'
import Welcome from './src/screens/Welcome'
import FontSizeSelect from './src/screens/FontSizeSelect'
import AnimalsList from './src/features/animal/List'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      {/* <AnimalsList /> */}
      <FontSizeSelect />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
