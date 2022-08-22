import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/auth.constants";
import axios from "axios";

const loginStart = (dispatch) => {
  dispatch({ type: LOGIN_START });
};

const loginSuccess = (dispatch, response) => {
  const user = {
    access_token: response.access_token,
  };

  localStorage.setItem("libromarko", JSON.stringify(user));
  dispatch({ type: LOGIN_SUCCESS, payload: user });
};

const loginFail = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL, payload: error });
};

export const login = (body) => (dispatch) => {
  loginStart(dispatch);

  axios
    .post("http://localhost:3001/auth/signin", body)
    .then(function (response) {
      console.log(response.data);
      loginSuccess(dispatch, response.data);
    })
    .catch(function (error) {
      loginFail(dispatch, error.response.data.message);
      console.log(error.response.data.message);
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("libromarko");
  dispatch({ type: LOGOUT });
};
