import axios from "axios";
import React from "react"
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { usePlaylist } from "../contexts/PlaylistContext";
export const PlaylistCard = ({playlistInfo}) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const { setPlaylistArray } = usePlaylist(); 

    const deleteFromPlaylist = async () => {
        const playlistDelRes = await axios.delete(`api/use/playlist/${playlistInfo._id}`, {headers: {authorization: user.token}});

        setPlaylistArray({
            playlistArr: [...playlistDelRes.data.playlists]
        })
    }
    const newHandler = () => {
        navigate(`/playlist/${playlistInfo._id}`);
      };
    return(
        <>
        <div className="video-container">
            <img onClick={() => newHandler()}  src="https://ik.imagekit.io/o0gfjqre5u2/dee-XhvEvfXQoSY-unsplash_j9UO_u887.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672763097906" className="video-thumb" alt="video_thumbnail" />
            <div className="vid-title playlist-title">{playlistInfo.title}</div>
            <div className="extras-container">
                    <div>
                        <i onClick={()=> deleteFromPlaylist()} className="fa-sharp fa-solid fa-trash"> Clear All</i>
                    </div>
            </div>   
        </div>
        </>
    );
}