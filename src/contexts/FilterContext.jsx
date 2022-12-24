import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {

  const [ filter, setFilter] = useState("ALL")

  return (
    <FilterContext.Provider value={{ filter,setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };