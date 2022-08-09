import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { userSelector } from "../store/authStoreSelector";

function PrivateRoute({ component: Component, ...rest }) {
  const user = useAuthStore(userSelector);

  console.log('user', user);

  if (!user) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
