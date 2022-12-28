import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = () => createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({users: null, token: null})
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext();

export {useAuth, AuthProvider}