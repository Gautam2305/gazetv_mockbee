import React from "react";
import { videos } from "../backend/db/videos";
export const CategorySection = () => {
    return(
        <div className="categ-container">
           {videos.map((video) => (
            <div className="video-container">
                <div key={video.id}>
                <img src={video.thumbnail} className="video-thumb" />
                <div className="vid-title">{video.title}</div>
                <div className="vid-creator">{video.creator}</div>
                <div className="vid-views">{video.views}</div>
                </div>
                
            </div>
           ))}
        </div>
    )
}