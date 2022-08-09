import React from "react";
import history from '../../history';
import getUser from "../../services/api/user-api";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function reducer(currentState, newState) {
  return { ...currentState, ...newState };
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

  return context;
}

const initialState = {
  status: "idle",
  user: null,
  error: null,
};

function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

async function login(dispatch, user) {
  try {
    dispatch({ status: "pending" });

    const result = await getUser(user);
    dispatch({
      status: "resolved",
      user: result,
      error: null,
    });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
}

function logout(dispatch) {
  dispatch(initialState);
  history.push("/");
}

export { AuthProvider, useAuthState, useAuthDispatch, login, logout };
