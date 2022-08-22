import { createReducer } from "@reduxjs/toolkit";
import {
  loginStart,
  loginSuccess,
  logout,
  loginFail,
} from "../actions";
import { getAuthUser } from "../helpers";

const authUser = getAuthUser();

const initialState = {
  isAuthenticated: !!authUser,
  user: authUser,
  error: [],
  isLoading: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginStart, (state) => {
      state.isLoading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
      state.error = [];
    })
    .addCase(loginFail, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
    });
});
