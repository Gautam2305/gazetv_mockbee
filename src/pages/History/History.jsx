import React from "react";
import { Link } from "react-router-dom";
import { HistoryCard } from "../../components/HistoryCard";
import { SideNav } from "../../components/SideNav";
import { TopNav } from "../../components/TopNav";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "../../contexts/HistoryContext";
export const History = () => {
    const {user} = useAuth();
    const {history} = useHistory();
    return(
        <>
        {user.token === null ? (<div className="not-logged">
                <div><h1>You need to login to continue</h1></div>
                <Link to="/login"><button className="login-button-secondary login-loggedout">Login</button></Link>
            </div>): 
            (
            <>
                <TopNav/>
                <SideNav/>
                <div className="liked-page-container">
                    <div className="categ-container">
                    {history.history.map(item => 
                    <HistoryCard
                    key={item.id}
                    item={item} 
                    />)}</div>
            </div>
            </>)}
        </>
    );
}