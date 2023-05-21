import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("Wow so easy!");


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    
    const { user, loading } = useContext(AuthContex)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children
    }
    else {  alert('You have to log in first to view details')   
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;