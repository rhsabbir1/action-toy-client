import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user , loading } = useContext(AuthContex)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
       return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;