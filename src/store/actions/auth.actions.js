import { createAction } from "@reduxjs/toolkit";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
} from "../constants/auth.constants";

export const loginStart = createAction(LOGIN_START);
export const loginFail = createAction(LOGIN_FAIL);
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const logout = createAction(LOGOUT);
