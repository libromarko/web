import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ isAuthenticated }) {
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: '/',
        state: { from: window.location },
      }}
    />
  );
}

export default PublicRoute;