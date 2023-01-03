import React, {useState} from "react";
import axios from "axios";
import { TopNav } from "../../components/TopNav";
import { SideNav} from "../../components/SideNav";
import { Card } from "../../components/Card";
import { useVideo } from "../../contexts/VideoContext";
import { usePlaylist } from "../../contexts/PlaylistContext";
import { useAuth } from "../../contexts/AuthContext";
export const Home = () => {
  const {user} = useAuth();
  const { videoList } = useVideo();
  const {playlistModal, playlistArray, setPlaylistArray} = usePlaylist();
  const [ playlistName, setPlaylistName] = useState({playlistName: ""});

  const createPlaylistHandler = async () => {
        try{const createPlayListRes = await axios.post("/api/user/playlists", {playlist: {title: playlistName.playlistName}},{headers: {authorization: user.token}});

        setPlaylistArray({playlistArr: createPlayListRes.data.playlists});}
        catch(error){
            console.log(error);
        }
    }
  const oneVidToPlaylistHandler = async (id) => {
        try{
            const addVideoToParticularPlaylist = await axios.post(
                `/api/user/playlists/${id}`,
                { video: playlistModal },
                { headers: { authorization: user.token } }
              );
              setPlaylistArray({
                playlistArr: playlistArray.playlistArr.map((el) => {
                  if (el._id === addVideoToParticularPlaylist.data.playlist._id) {
                    return addVideoToParticularPlaylist.data.playlist;
                  }
                  return el;
                }),
              });
        }catch(error){
            console.log(error);
        }
      };
    return(
        
        <>
        <TopNav/>
        <SideNav/>
        <div className="playlist-modal" style={!playlistModal ? {display: "none"}: {display: "flex"}}>
               <div className="playlist-modal-container">
               {playlistArray.playlistArr.map((vid) => {
                    return(
                      <div className="playlist-box">
                        <li className="playlist-items" key={vid._id}>
                            <label><input 
                            checked={vid.videos.some(video => video._id === playlistModal._id)}
                            onChange={() => oneVidToPlaylistHandler(vid._id)}
                            type="checkbox" />{vid.title}</label>
                        </li>
                      </div>
                    );
                })}
                </div> 
                <input
                    type="text"
                    className="input"
                    placeholder="Enter playlist Name"
                    onChange={(event) =>setPlaylistName((prev) => ({...prev, playlistName: event.target.value,
              }))
            }
          />
          <button onClick={() => createPlaylistHandler()} className="btn btn-solid-primary link-solid-primary playlist-btn">Create new playlist</button>
            </div>
        <div className="categ-container">
        {videoList.map((item) => 
          <Card
          item={item}
          key={item._id}
          />
        )}
        </div>
        </>
    );
}