import React from 'react'
import { Text } from 'react-native'
import stylesFn from './styles'

const Title = ({ text }) => {
    const styles = stylesFn()

    return (
        <Text style={styles.title}>
          {text}
        </Text>
    )
}
export default Title
