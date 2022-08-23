import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useListAnimals } from '../hooks'
import Row from './row'
import Title from '../../../components/Title'
import Button from '../../../components/Button'

const List = () => {
    const { navigate } = useNavigation()
    const animals = useListAnimals()

    return (
        <View>
            <Title text='Animals List' />

            {(animals && animals.length > 0) ? (
                <FlatList
                    data={animals || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No animals yet!'}</Text>
                    <Button 
                        text='Add Animal'
                        onPress={() => {navigate('Add Animal')}}
                        disabled={false}
                    />
                </>
            )}
        </View>
    )
}

export default List
