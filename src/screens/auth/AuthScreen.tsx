import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "../../store/hooks";
import { enableGuestMode } from "../../store/slices/appSlice";
import { COLORS } from "../../constants";

const AuthScreen = () => {
  const dispatch = useAppDispatch();

  const handleGuestMode = () => {
    dispatch(enableGuestMode({ userId: "guest-" + Date.now() }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SpendSmart</Text>
          <Text style={styles.subtitle}>Less clutter, more clarity.</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>AI-POWERED • 100% FREE</Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Ionicons name="camera" size={40} color={COLORS.primary} />
            <Text style={styles.featureTitle}>Scan Receipts Instantly</Text>
            <Text style={styles.featureDescription}>
              Just snap a photo and our AI does the rest
            </Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleGuestMode}
          >
            <Ionicons
              name="person"
              size={20}
              color="white"
              style={styles.buttonIcon}
            />
            <Text style={styles.primaryButtonText}>Continue as Guest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Sign In (Coming Soon)
            </Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            No in-app purchases or ads. We respect your privacy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 20,
  },
  badge: {
    backgroundColor: COLORS.primary + "20",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary + "40",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.primary,
  },
  featuresContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  feature: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 12,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 24,
  },
  actions: {
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  buttonIcon: {
    marginRight: 8,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.gray + "40",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: "600",
  },
  disclaimer: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 18,
  },
});

export default AuthScreen;
