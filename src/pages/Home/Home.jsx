import React from "react";
import { TopNav } from "../../components/TopNav";
import { SideNav} from "../../components/SideNav";
import { Card } from "../../components/Card";
import { useVideo } from "../../contexts/VideoContext";
export const Home = () => {
  const { videoList } = useVideo();

    return(
        
        <>
        <TopNav/>
        <SideNav/>
        <div className="categ-container">
        {videoList.map((item) => 
          <Card
          item={item}
          key={item._id}
          />
        )}
        </div>
        </>
    );
}