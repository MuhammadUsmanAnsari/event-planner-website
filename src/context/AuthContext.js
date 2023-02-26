import { auth } from 'config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'

 const AuthContext = createContext()


export default function AuthContextProvider(props) {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserDetail(user)
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        });
    }, [])
    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, userDetail }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>{
    return useContext(AuthContext)
}