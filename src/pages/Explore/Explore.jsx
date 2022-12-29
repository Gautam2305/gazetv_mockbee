import React from "react";
import { ExploreSection } from "../../components/ExploreSection";
import { TopNav } from "../../components/TopNav";
import { SideNav } from "../../components/SideNav";
export const Explore = () => {
    return(
        <div>
            <div className="explore-page">
                <TopNav/>
                <SideNav/>
                <ExploreSection />
        </div>
        </div>
    );
}