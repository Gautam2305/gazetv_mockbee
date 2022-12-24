import {CategorySection} from "./CategorySection";
import { Filters } from "./Filters";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
export const ExploreSection = () => {
    return(
        <div className="explore-page">
        <TopNav/>~
            <SideNav/>
            <Filters/>
            <CategorySection/>
        </div>
    )
}