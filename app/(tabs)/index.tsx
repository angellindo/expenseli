import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../src/constants";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to SpendSmart!</Text>
      <Text style={styles.description}>Your receipt management hub</Text>
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
