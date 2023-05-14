import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  isLoggedIn: boolean;
};

const initialState = {
  isLoggedIn: false,
} as UserState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { reset, login, logout } = user.actions;
export default user.reducer;
