import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useLike } from "../../contexts/LikeContext";
import { TopNav } from "../../components/TopNav";
import { SideNav } from "../../components/SideNav";
import { LikeCard } from "../../components/LikeCard";
import { Link } from "react-router-dom";
export const Liked = () => {
    const { likes } = useLike();
    const { user } = useAuth();
    return(
        <>
        {user.token === null ? (
            <div className="not-logged">
                <div><h1>You need to login to continue</h1></div>
                <Link to="/login"><button className="login-button-secondary login-loggedout">Login</button></Link>
            </div>
        ):(
            <>
            <TopNav/>
            <SideNav/>
            <div className="liked-page-container">
                <div>
                    <h3>Your liked videos are....</h3>
                    <div className="categ-container">{likes.isLiked.map(item => 
                    <LikeCard 
                    key={item.id}
                    item={item} 
                    />)}</div>
                </div>
            </div>
            </>
        )}
        </>
    );
}