import { Text, Pressable } from 'react-native'

export default function BrandedButton({pressAction, pressInAction, longPressAction}) {
  return (
    <Pressable
      onPress={pressAction}
      onPressIn={pressInAction}
      onLongPress={longPressAction}
    >
      <Text>My Custom, Branded Pressable Button</Text>
    </Pressable>
  )
}
