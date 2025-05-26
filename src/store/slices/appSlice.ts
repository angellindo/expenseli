import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../types";

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
  },
});

export const { setLoginState, enableGuestMode, resetState } = appSlice.actions;
export default appSlice.reducer;
