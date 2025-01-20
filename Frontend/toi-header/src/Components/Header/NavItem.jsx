import React, { useState } from "react";
import "./header.css";
const NavItem = ({ item, handleHovered }) => {


  return (
    <div >
      <a
        href={item.link}
        className="text-xs hover:text-red-400 text-nowrap p-1"
        onMouseEnter={() => handleHovered(true, item)}
        onMouseLeave={() => handleHovered(null)}
      >
        {item.label}
      </a>
     
    </div>
  );
};

export default NavItem;
