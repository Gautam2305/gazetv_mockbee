import React from "react";
export const Card = ({item}) => {
    return(
        <div>
            <div className="video-container">
                <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
                <div className="vid-title">{item.title}</div>
                <div className="vid-creator">{item.creator}</div>
                <div className="vid-views">{item.views}</div>
            </div>
        </div>
    )
}