import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/auth.constants";
import axios from "axios";

const api = process.env.REACT_APP_API_URL;

const loginStart = (dispatch) => {
  dispatch({ type: LOGIN_START });
};

const loginSuccess = async (dispatch, response) => {
  try {
    const userResponse = await axios.get(api + "user/me", {
      headers: { Authorization: `Bearer ${response.access_token}` },
    });

    const user = {
      access_token: response.access_token,
      id: userResponse.data.id,
      email: userResponse.data.email,
    };
    localStorage.setItem("libromarko", JSON.stringify(user));

    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
  }
};

const loginFail = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL, payload: error });
};

export const login = (body) => (dispatch) => {
  loginStart(dispatch);

  axios
    .post(api + "auth/signin", body)
    .then(function (response) {
      loginSuccess(dispatch, response.data);
    })
    .catch(function (error) {
      if (typeof error.response.data.message === "string") {
        loginFail(dispatch, [error.response.data.message]);
      } else {
        loginFail(dispatch, error.response.data.message);
      }
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("libromarko");
  dispatch({ type: LOGOUT });
};
