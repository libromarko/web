import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../constants/auth.constant";

const loginStart = (dispatch: any) => {
  dispatch({ type: LOGIN_START });
};

const loginSuccess = (dispatch: any, response: any) => {
  const user = {
    ...response.user,
    accessToken: response.token,
  };
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const loginFail = (dispatch: any, error: any) => {
  dispatch({ type: LOGIN_FAIL, payload: error });
};

export const login = (body: any) => (dispatch: any) => {
  try {
    console.log(body);
    loginStart(dispatch);
  } catch (error) {
    loginFail(dispatch, error);
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("user");
};
