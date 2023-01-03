import React from "react";
import { Routes, Route } from "react-router-dom";
import { PlaylistInfo } from "../components/PlaylistInfo";
import { VideoPlay } from "../components/VideoPlay";
import {Login,
  Signup,
  Error,
  Explore,
  History,
  Home,
  Liked,
  Playlist,
  WatchLater} from "../pages";

  export const RouterPath = () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/playlist/:playlistId" element={<PlaylistInfo/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/video/:videoId" element={<VideoPlay />}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    );
  }