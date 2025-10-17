import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Index(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const resetear = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttons}>
        <Button title="+" onPress={incrementar} />
        <Button title="−" onPress={decrementar} />
        <Button title="Reset" onPress={resetear} />
      </View>

      {count >= 10 && <Text style={styles.meta}>🎉 ¡Meta alcanzada!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  number: {
    fontSize: 60,
    marginVertical: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  meta: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
  },
});

