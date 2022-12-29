import React from "react";
import { Link } from "react-router-dom";
export const SideNav = () => {
    return(
        <>
        <aside>
            <ul className="sidenav dark-theme">
                <Link to="/"><li className="sidenav-list"><i className="fa-solid fa-house-chimney"></i></li></Link>
                <Link to="/explore"><li className="sidenav-list"><i className="fa-solid fa-compass"></i></li></Link>
                <Link to="/history"><li className="sidenav-list"><i className="fa-solid fa-clock-rotate-left"></i></li></Link>
                <Link to="/liked"><li className="sidenav-list"><i className="fa-solid fa-thumbs-up"></i></li></Link>
                <Link to="/playlist"><li className="sidenav-list"><i className="fa-solid fa-folder"></i></li></Link>
                <Link to="/watchlater"><li className="sidenav-list"><i className="fa-solid fa-clock"></i></li></Link>
            </ul>
        </aside>
        </>
    );
}