import { createContext, useContext } from "react";

const AuthContext = () => createContext();

const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext();

export {useAuth, AuthProvider}