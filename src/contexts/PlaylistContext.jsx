import React, {createContext, useContext, useState} from "react";

const PlaylistContext = createContext();

const PlaylistProvider = ({children}) => {
    const [ playlistModal, setPlaylistModal ] = useState(null);
    const [ playlistArray, setPlaylistArray ] = useState({playlistArr: []});
    const [ videoAdd, setVideoAdd ] = useState({video: []}) 
    return(
        <PlaylistContext.Provider value={{playlistModal,setPlaylistModal,playlistArray,setPlaylistArray,videoAdd,setVideoAdd}}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext);

export {PlaylistProvider, usePlaylist};