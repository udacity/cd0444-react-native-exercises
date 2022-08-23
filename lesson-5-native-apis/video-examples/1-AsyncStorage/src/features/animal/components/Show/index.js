import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Show = () => {
    const { params } = useRoute()

    return (
        <View>
            <Text>Just some text...</Text>
        </View>
    )
}

export default Show
