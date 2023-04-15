import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);

    // for Register

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // For Login

    const logIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  For Sign Out

    const logOut = ()=>{

       return signOut(auth)
    }


    //  observerauth state change

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
        })

        return()=>{
            unsubscribe();
        }
    },[])

//    set context data as value

    const authInfo={user, createUser, logIn, logOut}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;