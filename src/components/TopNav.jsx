import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const TopNav = () => {
    const {user} = useAuth();
    return(
        <>
            <div className="dark-theme top-nav">
            <div className="brand-heading">
                GazeTv
            </div>
            {user.token === null ? <Link to="/login" className="btn btn-outline-primary login-button">Login</Link>:<Link to="/login" className="btn btn-outline-primary login-button">Logout</Link>}
            </div>  
        </>
    )
}
