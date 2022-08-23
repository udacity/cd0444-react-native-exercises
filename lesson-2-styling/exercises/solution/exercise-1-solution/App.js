import { StyleSheet, View } from 'react-native';
import FirstScreen from './src/screens/Solution';
import WithExtraChallenge from './src/screens/WithExtraChallenge';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      <WithExtraChallenge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
