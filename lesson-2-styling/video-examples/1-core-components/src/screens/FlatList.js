import { View, Text, FlatList, ScrollView } from 'react-native'

export default function FlatListExample() {
  const animals = [
    {
      id: 1,
      title: 'Capybara',
    },{
      id: 2,
      title: 'Armadillo Girdled Lizard',
    },{
      id: 3,
      title: 'Frigatebird'
    }
  ]

  const renderAnimal = ({ item }) => (
    <Text>{item.title}</Text>
  );

  return (
    <ScrollView>
      <FlatList 
        data={animals}
        renderItem={renderAnimal}
        keyExtractor={animals => animals.id}
      />
    </ScrollView>
  )
}

