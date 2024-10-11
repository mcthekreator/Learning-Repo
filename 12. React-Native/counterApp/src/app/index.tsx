import React from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";

const index = () => {

  return (
    <ScrollView>
      <View>
        <Text style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "orange"
        }}></Text>
      </View>
      <Button
        title="Click Me"
        color="black"

      />
      <View style={{
        marginHorizontal: 40
      }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 20,
            marginVertical: 10,
            borderRadius: 10
          }}
          placeholder="Enter email"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 20,
            marginVertical: 10,
            borderRadius: 10
          }}
          placeholder="Enter email"
        />
      </View>
    </ScrollView>
  );
};

export default index;
