import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
export const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [userDetail, setUserDetail] = useState({email:"", password:""});

    const changeHandler = (e) => 
    {
        setUserDetail((previousState) =>({
          ...previousState,
          [e.target.name] : e.target.value
        }))

    }
    const loginHandler = async (testUser) => {
        try{
            const loginRes = await axios.post("/api/auth/login", testUser ? { email:"abc@gmail.com", password:"abc123"} : userDetail);
            setUser({ user : loginRes.data.foundUser,
            token: loginRes.data.encodedToken});
            navigate("/");
        }
        catch(error){
            console.log(error.response);
        }
    }

    return(
        <div className="login-page">
            <h1 className="login-header">Welcome to <span style={{color: "var(--pastel-indigo)"}}>GazeTV</span></h1>
            <h3 className="login-header">Login to <span style={{color: "var(--pastel-indigo)"}}>experience</span> the best of videos !</h3>
            <div className="credential-container">
            <h2 className="login-container-header">Login </h2>
            <div className="input-container">
            <input 
                className="input-email"
                name="email"
                value={userDetail.email}
                type="email"
                placeholder="Enter email..."
                onChange={e => changeHandler(e)}
                />
                <input 
                className="input-password"
                name="password"
                value={userDetail.password}
                type="password"
                placeholder="Enter password..."
                onChange={e => changeHandler(e)}
                />
            </div>
            <div className="login-button-container">
            <div className="test-cred" onClick={() => loginHandler(true)}>Login with test credentials</div>
            <button className="login-button-secondary" onClick={() => loginHandler(false)}>Login</button>
            </div>
            </div>
        </div>
    );
}