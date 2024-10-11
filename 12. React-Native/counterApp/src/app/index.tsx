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
      <Pressable
        onPress={increment}
        style={{
          backgroundColor: "orange",
          width: "50%",
          alignItems: "center",
          marginHorizontal: "auto",
          padding: 10
        }}>Click Me</Pressable>
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
  }

})

export default index;
