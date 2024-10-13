import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet } from "react-native";

const index = () => {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
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

      <View style={{ display:'flex', flexDirection:'row', justifyContent: 'space-between', gap:5, padding:5, width: '100%'}}>
        <Pressable
          onPress={increment}
          style={style.buttonStyle}>Increase Value</Pressable>
        <Pressable style={style.buttonStyle}>Decrease Value</Pressable>
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
          placeholder="Enter email"
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
    padding: 10
  }

})

export default index;
