import React from "react";
import { useParams } from "react-router";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { useSingleVideo } from "../contexts/VideoContext";
import { videos } from "../backend/db/videos";
export const VideoPlay = () => {
    const {videoId} = useParams();
    const videoObj = useSingleVideo(videoId);
    console.log(videoObj)
    return(
        <>
        <TopNav/>
        <SideNav/>
        <div className="video-play-card-container">
            <div><iframe 
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe></div>
            <div className="video-play-container">
                <div className="vid-play-title"><h3>Video name </h3></div>
                <div className="vid-play-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
        </div>
        </>
    )
}