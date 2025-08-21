import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>

      <View style={styles.buttonRow}>
        <Button title="➖ Decrement" onPress={() => setCount(count - 1)} />
        <Button title="➕ Increment" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  counterText: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 15,
  },
});