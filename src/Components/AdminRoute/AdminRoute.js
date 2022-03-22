import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const AdminRoute = ({children}) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) { return <h2>loading</h2> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;