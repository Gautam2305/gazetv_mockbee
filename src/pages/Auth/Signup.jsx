import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
export const Signup = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [userSignup, setUserSignup] = useState({email:"", password:"", firstName:"", lastName:""});

    const signupChangeHandler = (e) => 
    {
        setUserSignup((previousState) =>({
          ...previousState,
          [e.target.name] : e.target.value
        }))

    }
    const signupHandler = async () => {
        try{
            const signupRes = await axios.post("/api/auth/signup",userSignup)

            setUser({user: signupRes.data.createdUser,
            token: signupRes.data.encodedToken})
            navigate("/");

        }catch (error){
            console.log(error);
        }
    }
    return(
        <div className="login-page">
            <h1 className="login-header">Welcome to <span style={{color: "var(--pastel-indigo)"}}>GazeTV</span></h1>
            <h3 className="login-header">Signup to our website to <span style={{color: "var(--pastel-indigo)"}}>experience</span> the best of videos !</h3>
            <div className="credential-container">
            <h2 className="login-container-header">Signup </h2>
            <div className="input-container">
            <input 
                className="input-fn"
                name="firstName"
                value={userSignup.firstName}
                type="text"
                placeholder="Enter First Name"
                onChange={e => signupChangeHandler(e)}
                />
                <input 
                className="input-fn"
                name="lastName"
                value={userSignup.lastName}
                type="text"
                placeholder="Enter Last Name"
                onChange={e => signupChangeHandler(e)}
                />
            <input 
                className="input-email"
                name="email"
                value={userSignup.email}
                type="email"
                placeholder="Enter email..."
                onChange={e => signupChangeHandler(e)}
                />
                <input 
                className="input-password"
                name="password"
                value={userSignup.password}
                type="password"
                placeholder="Enter password..."
                onChange={e => signupChangeHandler(e)}
                />
            </div>
            <div className="login-button-container">
            <button onClick={() => signupHandler()} className="login-button-secondary">Signup</button>
            </div>
            </div>
        </div>
    );
}