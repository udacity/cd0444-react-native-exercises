import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native'

export default function LayoutStart() {
  return (
    <SafeAreaView>
      <ScrollView>

        <View>
          <View style={{alignSelf: 'center', height: 100, width: 100, border: '1px solid grey'}}>
            <Text>I'm a header box</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
            <View><Text>1/3 sub header</Text></View>
            <View><Text>2/3 sub header</Text></View>
            <View><Text>3/3 sub header</Text></View>
          </View>

          <View style={{ padding: 30 }}>
            <View><Text>I'm section 1/2 of main content</Text></View>
            <View><Text>I'm section 2/2 of main content</Text></View>
          </View>

          <View style={{marginTop: 30}}>
            <TouchableOpacity 
              style={{
                width: 150, 
                height: 50, 
                alignSelf: 'flex-end', 
                backgroundColor: '#60e116',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>Right button</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

// 
// style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>