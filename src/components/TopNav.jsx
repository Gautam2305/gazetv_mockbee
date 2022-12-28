import React from "react";
import { Link } from "react-router-dom";

export const TopNav = () => {
    return(
        <>
            <div className="dark-theme top-nav">
            <div className="brand-heading">
                GazeTv
            </div>
            <Link to="/login" className="btn btn-outline-primary login-button">Login</Link>
            </div>  
        </>
    )
}
