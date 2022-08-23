import { ScrollView, Button, View, Text, TouchableOpacity, SectionList } from 'react-native'

export default function WithExtraChallenge() {
  const doTheThing = () => {
    console.log('Doing the thing!')
  }

  const animalsByHabitat = [
    {
      title: "Marine",
      data: ["Seal", "Octopus", "Otter"]
    },
    {
      title: "Desert",
      data: ["Fennec Fox", "Jerboa", "Road Runner"]
    },
    {
      title: "Rainforest",
      data: ["Coatimundi", "Okapi", "Gorilla"]
    },
    {
      title: "Mountains",
      data: ["Mountain Goat", "Snow Leopard"]
    }
  ];

  return (
    <View>
      <Text>I'm the first screen!</Text>

      <TouchableOpacity onPress={doTheThing}>
        <Text>This is a button!</Text>
      </TouchableOpacity>

      <Text>These are animals by habitat:</Text>
      <SectionList
        sections={animalsByHabitat}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Button title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />

    </View>
  )
}