import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { usePlaylist } from "../contexts/PlaylistContext";

export const PlaylistInfo = () => {
    const {playlistId} = useParams();
    const {playlistArray, setPlaylistArray} = usePlaylist();
    const {user} = useAuth();

    const playlist = playlistArray.playlistArr.filter(ele => ele._id === playlistId);

    const deleteEachVideo = async (videoId, playlistId) => {
        try{
            const deleteEachVideoRes = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {headers: {authorization: user.token}});

            setPlaylistArray({playlistArr: playlistArray.playlistArr.map(el => {
                if(el._id === deleteEachVideoRes.data.playlist._id){
                    return deleteEachVideoRes.data.playlist;
                }
                return el;
            })})
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <TopNav/>
        <SideNav/>
        <div className="video-container">
            <div className="categ-container">
                {playlist[0].videos.map(item => (
                    <div key={item._id} className="video-container">
                    <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
                    <div className="vid-title">{item.title}</div>
                    <div className="creator-container">
                        <div className="vid-creator">{item.creator}</div>
                        <div className="vid-views">{item.views} views</div>
                    </div>
                    <div className="extras-container">
                            <div>
                                <i onClick={()=> deleteEachVideo(item._id,playlistId)} className="fa-sharp fa-solid fa-trash"> Clear All</i>
                            </div>
                    </div>   
                </div>
                ))}
            </div>
        </div>
        </>
    )
}