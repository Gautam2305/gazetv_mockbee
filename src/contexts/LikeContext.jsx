import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

const LikeProvider = ({children}) => {
    const [ likes, setLikes] = useState({liked:[]})
    return(
        <LikeContext.Provider value={{likes, setLikes}}>
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider};