import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen ] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ isSideBarOpen, openSideBar, closeSideBar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;