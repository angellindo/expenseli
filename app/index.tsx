import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FeatureCarousel from "../src/components/common/FeatureCarousel";
import { COLORS } from "../src/constants";
import { ONBOARDING_FEATURES } from "../src/data/features";
import { authService } from "../src/services/api/supabaseClient";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import {
  enableGuestMode,
  loadPersistedState,
} from "../src/store/slices/appSlice";

export default function AuthScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.app);

  useEffect(() => {
    // Load persisted state on app start
    dispatch(loadPersistedState());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoggedIn, router]);

  const handleGuestMode = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      // Create guest user in Supabase
      const { data, error } = await authService.createGuestUser();

      if (error) {
        console.log(
          "Supabase guest creation failed, using local mode:",
          error.message
        );
        // Fallback to local-only guest mode
        dispatch(enableGuestMode({ userId: "local-guest-" + Date.now() }));
      } else if (data.user) {
        // Success - use Supabase guest user
        dispatch(enableGuestMode({ userId: data.user.id }));
      }
    } catch (error) {
      console.error("Error creating guest user:", error);
      // Fallback to local guest mode
      dispatch(enableGuestMode({ userId: "local-guest-" + Date.now() }));
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert(
      "Coming Soon",
      "Google Sign-In will be available in the next update!",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <LinearGradient
        colors={[COLORS.background, COLORS.primary + "05"]}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SpendSmart</Text>
          <Text style={styles.subtitle}>Less clutter, more clarity.</Text>

          <View style={styles.badge}>
            <LinearGradient
              colors={[COLORS.primary + "20", COLORS.primary + "10"]}
              style={styles.badgeGradient}
            >
              <Text style={styles.badgeText}>AI-POWERED • 100% FREE</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Features Carousel */}
        <View style={styles.carouselContainer}>
          <FeatureCarousel features={ONBOARDING_FEATURES} />
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[COLORS.primary, COLORS.secondary]}
              style={styles.buttonGradient}
            >
              <Ionicons name="logo-google" size={20} color="white" />
              <Text style={styles.primaryButtonText}>Continue with Google</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.guestButton}
            onPress={handleGuestMode}
            activeOpacity={0.8}
          >
            <Ionicons name="person-outline" size={20} color={COLORS.primary} />
            <Text style={styles.guestButtonText}>Continue as Guest</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            No in-app purchases or ads. We respect your privacy.
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gradient: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.gray,
    marginBottom: 24,
    fontWeight: "500",
  },
  badge: {
    borderRadius: 25,
    overflow: "hidden",
  },
  badgeGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.primary + "30",
    borderRadius: 25,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  carouselContainer: {
    flex: 1,
    marginVertical: 20,
  },
  actions: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  googleButton: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    gap: 12,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  guestButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: COLORS.primary + "30",
    borderRadius: 14,
    backgroundColor: "white",
    marginBottom: 24,
    gap: 8,
  },
  guestButtonText: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: "600",
  },
  disclaimer: {
    fontSize: 13,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "500",
  },
});
