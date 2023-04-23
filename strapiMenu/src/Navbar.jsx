import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";


const handleSubmenu = () => {
  
};

const Navbar = () => {
  const {isSideBarOpen} = useGlobalContext();
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn"><FaBars /></button>
      </div>
    </nav>
  );
};

export default Navbar;
