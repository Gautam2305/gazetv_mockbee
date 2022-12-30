import React from "react";

export const HistoryCard = ({item}) => {
    return(
        <div>
        <div className="video-container">
            <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
            <div className="vid-title">{item.title}</div>
            <div className="creator-container">
            <div className="vid-creator">{item.creator}</div>
            <i class="fa-sharp fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
    )
}