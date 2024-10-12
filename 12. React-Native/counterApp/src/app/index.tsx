import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";

const index = () => {
  const [value, setValue] = useState(0)

  const countUp = () => {
    setValue(value + 1)
  }
  const countDown = () => {
    setValue(value + 1)
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
      <Button
        title="Click Me"
        onPress={countUP}
        color="black"

      />
      <Button
        title="Click Me"
        onPress={countDown}
        color="black"

      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 20,
          margin: 30,
          borderRadius: 10
        }}
        placeholder="Enter email"
      />
    </ScrollView>
  );
};

export default index;
