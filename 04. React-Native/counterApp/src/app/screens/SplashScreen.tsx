import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <ScrollView style={style.splashscreen}>
      <Text>Welcome</Text>
    </ScrollView>
  ) 
}  
const style = StyleSheet.create({
    splashscreen:{
        backgroundColor: "white",
        color: "white",
    }
  })