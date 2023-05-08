import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const scratchContext = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{ isSideBarOpen, openSideBar, closeSideBar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default scratchContext;
