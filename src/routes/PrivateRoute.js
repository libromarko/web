import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};
export default PrivateRoute;
