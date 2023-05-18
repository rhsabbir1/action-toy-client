import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContex = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const[loading , setLoading] = useState(true)

    const register = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const logIn = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const profail = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:photoUrl
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        register,
        profail,
        logIn,
        logOut
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;