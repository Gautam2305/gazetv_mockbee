import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    );
  }