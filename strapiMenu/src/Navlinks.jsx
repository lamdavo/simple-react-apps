import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { page, pageId } = item;
        return (
          <button key={pageId} className="nav-link" onMouseOver={()=>setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
