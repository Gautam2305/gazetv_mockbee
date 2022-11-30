import { TopNav } from "../../components/TopNav";
import { SideNav} from "../../components/SideNav";
import { CategorySection } from "../../components/CategorySection";
export const Home = () => {
    return(
        
        <>
        <TopNav/>
        <div className="vid-lib">
        <SideNav/>
        <CategorySection />
        </div>
        </>
    );
}