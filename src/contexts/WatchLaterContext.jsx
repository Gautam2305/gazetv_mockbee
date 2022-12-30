import React, { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchlater, setWatchlater] = useState({watchlaterList: []})
    return(
        <WatchLaterContext.Provider value={{watchlater, setWatchlater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater};