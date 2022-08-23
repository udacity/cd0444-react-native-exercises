import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native'

export default function LayoutStart() {
  return (
    <SafeAreaView>
      <ScrollView>

        <View>
          <Text>I'm a header box</Text>
        </View>

        <View>
          <View><Text>1/3 sub header</Text></View>
          <View><Text>2/3 sub header</Text></View>
          <View><Text>3/3 sub header</Text></View>
        </View>

        <View>
          <View><Text>I'm section 1/2 of main content</Text></View>
          <View><Text>I'm section 2/2 of main content</Text></View>
        </View>

        <View>
          <Button 
            title="I'm a right aligned button"
            color="#60e116"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}