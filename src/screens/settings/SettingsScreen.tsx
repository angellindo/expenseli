import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { resetState } from "../../store/slices/appSlice";

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const { userEmail, isGuestUser } = useAppSelector((state) => state.app);

  const handleSignOut = () => {
    dispatch(resetState());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Account Type:</Text>
        <Text style={styles.value}>
          {isGuestUser ? "Guest User" : "Registered User"}
        </Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userEmail}</Text>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 30,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: COLORS.error,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  signOutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SettingsScreen;
