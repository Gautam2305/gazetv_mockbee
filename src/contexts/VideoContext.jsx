import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const VideoContext = createContext();
const useSingleVideo = (videoId) => {
  const {videoList} = useVideo();
  return videoList.find((item) => item.id === videoId)
}

const VideoProvider = ({children}) => {

  const [videoList, setVideoList] = useState([]);
  useEffect(()=>{
    (async () => {
      const vidDataRes = await axios.get("./api/videos");
      if (vidDataRes.status === 200){
        setVideoList(vidDataRes.data.videos)
      }
    })();
  }, []);

  return(
    <VideoContext.Provider value={{videoList,setVideoList}}>
      {children}
    </VideoContext.Provider>
  )
}

const useVideo = () => useContext(VideoContext);

export {VideoProvider,useVideo,useSingleVideo};