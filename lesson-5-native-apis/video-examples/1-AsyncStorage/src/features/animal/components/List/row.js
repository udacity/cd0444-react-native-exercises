import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Row = ({ item }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('Edit', { customerID: item.id })}>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'fn'}>Common Name: {item.common_name}</Text>
                <Text key={'ln'}>Scientific Name: {item.scientific_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row
