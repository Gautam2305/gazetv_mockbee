import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "../contexts/HistoryContext";
import { useLike } from "../contexts/LikeContext";
import { useWatchLater } from "../contexts/WatchLaterContext";

export const TopNav = () => {
    const {user, setUser} = useAuth();
    const {setLikes} = useLike();
    const {setWatchlater} = useWatchLater();
    const {setHistory} = useHistory();
    const logoutHandler = () => {
        setUser({token: null});
        setLikes({isLiked: []});
        setWatchlater({watchlaterList: []});
        setHistory({history: []})
    }
    return(
        <>
            <div className="dark-theme top-nav">
            <div className="brand-heading">
                GazeTv
            </div>
            {user.token === null ? <Link to="/login" className="btn btn-outline-primary login-button">Login</Link>:<Link onClick={()=>logoutHandler()} to="/login" className="btn btn-outline-primary login-button">Logout</Link>}
            </div>  
        </>
    )
}
