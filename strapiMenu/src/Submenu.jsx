import React from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();

  return <div>Submenu</div>;
};

export default Submenu;
