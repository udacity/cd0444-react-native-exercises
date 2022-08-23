import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useListAnimals } from '../hooks'
import Row from './row'
import styles from './styles'

const List = () => {
    const { navigate } = useNavigation()
    const animals = useListAnimals()

    return (
        <View>
            <Text>Animals List</Text>

            {(animals && animals.length > 0) ? (
                <FlatList
                    data={animals || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No Animals'}</Text>
                    <Button title={'Add Animal'} onPress={() => {
                        navigate('Add Animal')
                    }} />
                </>
            )}
        </View>
    )
}

export default List
