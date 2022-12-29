import React from "react";
export const Card = ({item}) => {
    return(
        <div>
            <div className="video-container">
                <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
                <div className="vid-title">{item.title}</div>
                <div className="creator-container">
                <div className="vid-creator">{item.creator}</div>
                <div className="vid-views">{item.views} views</div>
                </div>
                <div className="extras-container">
                    <div className="like-btn-container">
                    <i class="fa-solid fa-thumbs-up like-btn"></i>
                    <i class="fa-solid fa-thumbs-down like-btn"></i>
                    </div>
                
                <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                
            </div>
        </div>
    )
}