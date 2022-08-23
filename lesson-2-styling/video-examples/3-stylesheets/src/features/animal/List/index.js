import { View, FlatList, Text } from 'react-native'
import stylesFn from './styles'

export default function AnimalsList() {
  const styles = stylesFn()
  const animals = [
    {
      title: 'Pangolin',
      id: 1
    }, {
      title: 'Elephant Shrew',
      id: 2
    }, {
      title: 'Yangtze Porpoise',
      id: 3
    }, {
      title: 'Vaquita',
      id: 4
    }
  ]

  const renderAnimal = ({ item }) => (
    <Text style={styles.title}>{item.title}</Text>
  )

  return (
    <View>
      <Text>Animals List</Text>
      <FlatList 
        data={animals} 
        renderItem={renderAnimal} 
        keyExtractor={animal => animal.id} 
      />
    </View>
  )
}
