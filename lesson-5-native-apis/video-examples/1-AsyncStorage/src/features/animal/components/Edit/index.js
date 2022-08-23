import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Form from '../Form'
import { useResetForm, useEditAnimal } from '../../hooks'
import styles from './styles'

const Edit = () => {
    useResetForm()

    const { params } = useRoute()

    const { status, onSubmit } = useEditAnimal(params.animalId)

    return (
        <View>
            <Text>Just some text...</Text>
            <Form
                onSubmit={onSubmit}
            />
        </View>
    )
}

export default Edit
