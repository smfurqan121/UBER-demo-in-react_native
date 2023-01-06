import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Asalam o Alaikum</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={{ paddingHorizontal:20,
        paddingBottom: 0,}}>
            <TextInput style={styles.TextInput} placeholder='Where To?' />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    TextInput:{
        backgroundColor:'#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
        paddingHorizontal:20,
        paddingBottom: 0,
        height:50,
    },
    
    
})