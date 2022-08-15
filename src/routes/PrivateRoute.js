import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
}

export default PrivateRoute;
