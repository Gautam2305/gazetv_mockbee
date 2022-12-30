import React, { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchlater, setWatchLater] = useState({watchlaterList: []})
    return(
        <WatchLaterContext.Provider value={{watchlater, setWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater};