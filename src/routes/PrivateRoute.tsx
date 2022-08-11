import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface Props {
    isAuthenticated: boolean,
};

function PrivateRoute({ isAuthenticated }: Props) {
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;