import React from "react";
import { PlaylistCard } from "../../components/PlaylistCard";
import { SideNav } from "../../components/SideNav";
import { TopNav } from "../../components/TopNav";
import { usePlaylist } from "../../contexts/PlaylistContext";
export const Playlist = () => {
    const {playlistArray} = usePlaylist();
    return(
        <>
        <TopNav/>
        <SideNav/>
        <div className="liked-page-container">
            <div className="categ-container">
            {playlistArray.playlistArr.map((playlist) => <PlaylistCard playlistInfo={playlist}/>)}
            </div>
            </div>
        </>
    );
}