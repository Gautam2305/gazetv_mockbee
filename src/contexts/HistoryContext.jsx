import React, { useContext, useState } from "react";
import { createContext } from "react";

const HistoryContext = createContext();

const HistoryProvider = ({children}) => {
    const [ history, setHistory] = useState({historyList: []});
    return(
        <HistoryContext.Provider value={{history, setHistory}}>
            {children}
        </HistoryContext.Provider>
    );
}

const useHistory = () => useContext(HistoryContext);

export {useHistory, HistoryProvider};