import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { useAuthState } from "../contexts/auth/auth-context";

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuthState();

  return (
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Outlet {...props} />
          ) : (
            <Navigate to="login" replace />
          )
        }
      />
  );
}

export default PrivateRoute;
