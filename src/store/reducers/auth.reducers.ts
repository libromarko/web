import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
} from "../constants/auth.constant";
import {
  loginStart,
  loginSuccess,
  logout,
  loginFail,
} from "../actions/auth.actions";
import getAuthUser from "../../helpers/auth.helpers";

const authUser = getAuthUser();

const initialState = {
  isAuthenticated: !!authUser,
  user: authUser,
  error: null,
  isLoading: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginStart, (state, action) => {
      console.log(LOGIN_START, action);
      state.isLoading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      console.log(LOGIN_SUCCESS, action);
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
    })
    .addCase(loginFail, (state, action) => {
      console.log(LOGIN_FAIL, action);
      state.isAuthenticated = false;
      state.error = action.payload || null;
      state.isLoading = false;
    })
    .addCase(logout, (state) => {
      console.log(LOGOUT);
      state.isAuthenticated = false;
    });
});
