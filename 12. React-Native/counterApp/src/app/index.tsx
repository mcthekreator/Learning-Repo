import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

const index = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat1.png",
          }}
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 150,
            borderWidth: 3,
            borderColor: "darkblue",
          }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          margin: 30,
        }}
        placeholder="Enter email"
      />
    </ScrollView>
  );
};

export default index;
