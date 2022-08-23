import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import welcomeStyles from './styles';

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles())
  const { navigate } = useNavigation()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Title text='Welcome to the animals app' />

          <Button 
            onPress={() => navigate('Add Animal')} 
            text='Add an Animal' 
            disabled={false} 
          />

          <Button 
            onPress={() => navigate('Animals')} 
            text='View Animals' 
            disabled={false} 
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}