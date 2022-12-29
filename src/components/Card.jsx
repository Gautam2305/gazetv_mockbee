import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useLike } from "../contexts/LikeContext";
export const Card = ({item}) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const {setLikes} = useLike();

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
    return(
        <div>
            <div className="video-container">
                <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
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
                
                <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                
            </div>
        </div>
    )
}