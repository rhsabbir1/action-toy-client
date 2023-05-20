import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../AuthProvider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContex)
    const [myToys , setMyToys]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/products/?sellerEmail=${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[user])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;