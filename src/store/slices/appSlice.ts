import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import { AppState } from "../../types";

// Async thunk for loading persisted state
export const loadPersistedState = createAsyncThunk(
  "app/loadPersistedState",
  async () => {
    try {
      const isGuestUser = await SecureStore.getItemAsync("isGuestUser");
      const guestUserId = await SecureStore.getItemAsync("guestUserId");
      const userEmail = await SecureStore.getItemAsync("userEmail");

      return {
        isGuestUser: isGuestUser === "true",
        guestUserId: guestUserId || undefined,
        userEmail: userEmail || "",
        isLoggedIn: !!(isGuestUser === "true" || userEmail),
        useLocalStorage: isGuestUser === "true",
      };
    } catch (error) {
      console.error("Error loading persisted state:", error);
      return null;
    }
  }
);

// Async thunk for persisting state
export const persistAppState = createAsyncThunk(
  "app/persistAppState",
  async (state: Partial<AppState>) => {
    try {
      if (state.isGuestUser !== undefined) {
        await SecureStore.setItemAsync(
          "isGuestUser",
          state.isGuestUser.toString()
        );
      }
      if (state.guestUserId !== undefined) {
        await SecureStore.setItemAsync("guestUserId", state.guestUserId || "");
      }
      if (state.userEmail !== undefined) {
        await SecureStore.setItemAsync("userEmail", state.userEmail);
      }
    } catch (error) {
      console.error("Error persisting state:", error);
    }
  }
);

// Async thunk for clearing persisted state
export const clearPersistedState = createAsyncThunk(
  "app/clearPersistedState",
  async () => {
    try {
      await SecureStore.deleteItemAsync("isGuestUser");
      await SecureStore.deleteItemAsync("guestUserId");
      await SecureStore.deleteItemAsync("userEmail");
    } catch (error) {
      console.error("Error clearing persisted state:", error);
    }
  }
);

const initialState: AppState = {
  isLoggedIn: false,
  userEmail: "",
  isGuestUser: false,
  useLocalStorage: false,
  guestUserId: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoginState: (
      state,
      action: PayloadAction<{ isLoggedIn: boolean; userEmail: string }>
    ) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userEmail = action.payload.userEmail;
      state.isGuestUser = false;
      state.useLocalStorage = false;
    },
    enableGuestMode: (state, action: PayloadAction<{ userId?: string }>) => {
      state.isLoggedIn = true;
      state.isGuestUser = true;
      state.useLocalStorage = true;
      state.userEmail = "Guest User";
      state.guestUserId = action.payload.userId;
    },
    resetState: (state) => {
      return initialState;
    },
    setOnboardingComplete: (state) => {
      // We'll add onboarding state later
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPersistedState.fulfilled, (state, action) => {
        if (action.payload) {
          return { ...state, ...action.payload };
        }
      })
      .addCase(persistAppState.fulfilled, (state) => {
        // State persisted successfully
      })
      .addCase(clearPersistedState.fulfilled, (state) => {
        return initialState;
      });
  },
});

export const {
  setLoginState,
  enableGuestMode,
  resetState,
  setOnboardingComplete,
} = appSlice.actions;
export default appSlice.reducer;
