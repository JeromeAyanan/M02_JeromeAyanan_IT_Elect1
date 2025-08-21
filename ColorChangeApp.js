import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const colors = ["white", "lightblue", "lightpink"]; // Default + 2 light colors
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
      <Text style={styles.text}>Background Color: {colors[colorIndex]}</Text>

      <Button title="Change Background" onPress={changeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});