import React from "react";
import { useWatchLater } from "../contexts/WatchLaterContext";

export const WatchLaterCard = ({item}) => {
    const {watchlater} = useWatchLater();
    console.log(watchlater.watchlaterList);
    return(
        <div>
            <div className="video-container">
                <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
                <div className="vid-title">{item.title}</div>
                <div className="creator-container">
                <div className="vid-creator">{item.creator}</div>
                <div className="vid-views">{item.views} views</div>
                </div>
            </div>
        </div>
    )
}