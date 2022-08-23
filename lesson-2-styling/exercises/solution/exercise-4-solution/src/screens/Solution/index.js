import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native'
import stylesFn from './styles'

export default function Solution() {
  const styles = stylesFn()

  console.log(styles)
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.space}>
            <Text style={styles.h1}>This Is An Example Header</Text>
          </View>

          <View style={styles.space}>
            <Text style={styles.h2}>This Is An Example Sub-Header</Text>
          </View>

          <View style={styles.space}>
            <Text style={styles.h3}>This Is An Example Topic Title</Text>
          </View>

          <View style={styles.space}>
            <Text style={styles.bold}>This is bold text</Text>
          </View>

          <View style={styles.space}>
            <Text style={styles.underline}>This is underlined text</Text>
          </View>

          <View style={styles.warn}>
            <Text>This is an example of a warning message to get people's attention</Text>
          </View>

          <View style={styles.error}>
            <Text style={styles.whiteText}>This is an example of an error message to alert users that something went wrong</Text>
          </View>

          <View style={styles.success}>
            <Text style={styles.whiteText}>This is an example of a success message to inform users that an action was successful</Text>
          </View>

          <Pressable style={styles.cta}>
            <Text style={styles.whiteText}>Call To Action</Text>
          </Pressable>

          <View>
            <Pressable style={styles.cta}>
              <Text style={styles.whiteText}>Left Align Button</Text>
            </Pressable>
          </View>

          <View style={styles.alignRight}>
            <Pressable style={styles.cta}>
              <Text style={styles.whiteText}>Right Align Button</Text>
            </Pressable>
          </View>

          <View>
            <Text>This is my logo</Text>
            <Image
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}