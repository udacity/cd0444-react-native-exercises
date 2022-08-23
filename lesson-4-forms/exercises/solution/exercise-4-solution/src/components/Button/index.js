import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import stylesFn from './styles'

const Button = ({ onPress, text, disabled }) => {
    const styles = stylesFn({disabled: disabled})

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default Button
