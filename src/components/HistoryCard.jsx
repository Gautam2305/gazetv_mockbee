import React from "react";
import { useHistory } from "../contexts/HistoryContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
export const HistoryCard = ({item}) => {
    const {setHistory} = useHistory();
    const {user} = useAuth();
    const clearHistoryHandler = async () => {
        try {
          const clearHistoryResponse = await axios({
            method: "DELETE",
            data: { video: item },
            url: `/api/user/history/all`,
            headers: { authorization: user.token },
          });
          setHistory({ history: clearHistoryResponse.data.history });
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <div>
        <i onClick={()=> clearHistoryHandler()} className="fa-sharp fa-solid fa-trash"> Clear All</i>
        <div className="video-container">
            <img src={item.thumbnail} className="video-thumb" alt="video_thumbnail" />
            <div className="vid-title">{item.title}</div>
            <div className="creator-container">
            <div className="vid-creator">{item.creator}</div>
            </div>
        </div>
    </div>
    )
}