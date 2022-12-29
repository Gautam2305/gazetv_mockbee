import React, {useState, useEffect} from "react";
import {Card} from "./Card";
import { useVideo } from "../contexts/VideoContext";
export const ExploreSection = () => {
  const [filter, setFilter] = useState("all");
  const [filterData, setFilterData] = useState([]);
  const {videoList} = useVideo();
  useEffect(() => {
    setFilterData(
      videoList.filter((data) =>
        filter === "all"
          ? true
          : data.category === filter
      )
    )
  }, [filter]);
  const callHandler = (e) => setFilter(e.target.value);
    return(
      <div>
      <div className="filter-container">
                <div>
                        <button className="filter-button" onClick={(e)=> callHandler(e)} value="all" > All </button>
                        <button className="filter-button" onClick={(e)=> callHandler(e)} value="informative" > Informative </button>
                        <button className="filter-button" onClick={(e)=> callHandler(e)} value="music" > Music </button>
                        <button className="filter-button" onClick={(e)=> callHandler(e)} value="comedy" > Comedy </button>
                        <button className="filter-button" onClick={(e)=> callHandler(e)} value="movies" > Movies </button>
                </div>
        </div>
        <div className="categ-container">
        {filterData.map((item) => 
          <Card
          item={item}
          key={item._id}
          />
        )}
        </div>
      </div>
    )
}