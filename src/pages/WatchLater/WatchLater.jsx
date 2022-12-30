import React from "react";
import { Link } from "react-router-dom";
import { SideNav } from "../../components/SideNav";
import { TopNav } from "../../components/TopNav";
import { useAuth } from "../../contexts/AuthContext";
import { useWatchLater } from "../../contexts/WatchLaterContext";
import { WatchLaterCard } from "../../components/WatchLaterCard";
export const WatchLater = () => {
    const {user} = useAuth();
    const {watchlater} = useWatchLater();
    return(
        <>
        {user.token === null ? (<div className="not-logged">
                <div><h1>You need to login to continue</h1></div>
                <Link to="/login"><button className="login-button-secondary login-loggedout">Login</button></Link>
            </div>
        ):(
            <>
            <TopNav/>
            <SideNav/>
            <div className="liked-page-container">
                    <div className="categ-container">
                    {watchlater.watchlaterList.map(item => 
                    <WatchLaterCard 
                    key={item.id}
                    item={item} 
                    />)}</div>
            </div>
            </>
        )}
        </>
    );
}