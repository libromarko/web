import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PublicRoute({ isAuthenticated }) {
  let location = useLocation();

  return !isAuthenticated ? (
    <Outlet />
  ) : location.pathname.includes("shared") ? (
    <Navigate
      to={{ pathname: location.pathname, state: { from: window.location } }}
    />
  ) : (
    <Navigate
      to={{
        pathname: "/dashboard",
        state: { from: window.location },
      }}
    />
  );
}

export default PublicRoute;
