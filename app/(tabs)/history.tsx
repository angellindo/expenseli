import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../src/constants";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipt History</Text>
      <Text style={styles.subtitle}>
        Your scanned receipts will appear here
      </Text>
      <Text style={styles.description}>
        Start by scanning your first receipt!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: "center",
  },
});
