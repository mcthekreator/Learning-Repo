import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet } from "react-native";

const index = () => {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }
  const decrement = () => {
    setValue(value - 1);
  }

  return (
    <ScrollView>
      <View>
        <Text style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "orange"
        }}>{value}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 'auto', gap: 5, padding: 10, width: '90%' }}>
        <Pressable
          onPress={increment}
          style={style.buttonStyle}>Increase Value</Pressable>
        <Pressable onPress={decrement} style={style.buttonStyle}>Decrease Value</Pressable>
      </View>


      <View style={{
        marginHorizontal: 40
      }}>
        <TextInput
          style={style.textInput}
          placeholder="Enter email"
        />
        <TextInput
          style={style.textInput}
          textContentType='password'
          placeholder="Enter password"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10
  },
  buttonStyle: {
    backgroundColor: "orange",
    width: "50%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    fontSize: 17,
    fontWeight: "bold",
    shadowColor: "black",
  }
})

export default index;
