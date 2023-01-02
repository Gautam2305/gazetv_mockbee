import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "../contexts/HistoryContext";
import { useLike } from "../contexts/LikeContext";
import { usePlaylist } from "../contexts/PlaylistContext";
import { useWatchLater } from "../contexts/WatchLaterContext";
export const Card = ({item,isWatchLater}) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const {setLikes} = useLike();
    const {setWatchLater} = useWatchLater();
    const {setHistory} = useHistory();
    const {setPlaylistModal} = usePlaylist();

    const playlistHandler = () => setPlaylistModal(item);
    const watchlaterHandler = async () => {
        try{
            const watchlaterRes = await axios({
                method:"post",
                url:"/api/user/watchlater",
                headers: {authorization: user.token},
                data: {video: item}
            })
            setWatchLater({watchlaterList: watchlaterRes.data.watchlater});
        }
        catch(error){
            console.log(error.response.data);
        }
    }
    const removeWatchHandler = async () => {
        try{
            const removeWatchRes = await axios({
                method:"delete",
                url:`/api/user/watchlater/${item._id}`,
                headers: {authorization: user.token},
                data: {video: item}
            })
            setWatchLater({watchlaterList: removeWatchRes.data.watchlater});
        }
        catch(error){
            console.log(error);
        }
    }

    const likeHandler = async () => {
        try{
            const likeRes = await axios({
                method: "post",
                url:"/api/user/likes",
                headers: {authorization: user.token},
                data: {video:item}
            })
            console.log(likeRes);
            setLikes({isLiked: likeRes.data.likes});
        }catch(error){
            console.log(error.response.data);
        }
    }

    const removeLikeHandler = async () => {
        try{
            const removeLikeRes = await axios({
                method:"delete",
                url:`/api/user/likes/${item._id}`,
                headers:{authorization : user.token},
                data: {video: item},
            })
            setLikes({isLiked: removeLikeRes.data.likes});
        }catch (error) {
            console.log(error);
        }
    }

    const historyHandler = async () => {
        try{
            const historyRes = await axios({
                method: "post",
                url: "/api/user/history",
                headers: {authorization: user.token},
                data: {video: item}
            });
            setHistory({history: historyRes.data.history})
        }
        catch(error) {
            console.log(error.response.data);
        }
        navigate(`/video/${item._id}`);
    }
    return(
        <div>
            <div className="video-container">
                <img onClick={() => historyHandler()} src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
                <div className="vid-title">{item.title}</div>
                <div className="creator-container">
                <div className="vid-creator">{item.creator}</div>
                <div className="vid-views">{item.views} views</div>
                </div>
                <div className="extras-container">
                    <div className="like-btn-container">
                    <i onClick={()=> likeHandler()} className="fa-solid fa-thumbs-up like-btn"></i>
                    <i onClick={()=> removeLikeHandler()} className="fa-solid fa-thumbs-down like-btn"></i>
                    </div>
                    <div>
                    <i onClick={() => playlistHandler()} className="fa-solid fa-folder"></i>
                    {isWatchLater ? <i onClick={() => removeWatchHandler()} className="fa-solid fa-clock"></i>: <i onClick={() => watchlaterHandler()} className="fa-solid fa-clock"></i>  }
                    </div>
                </div>   
            </div>
        </div>
    )
}