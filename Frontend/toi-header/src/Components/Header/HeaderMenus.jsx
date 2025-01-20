import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import NavItem from "./NavItem";
import SubMenu from "./SubMenu";
import AllMenu from "./AllMenu/AllMenu.jsx";
const HeaderMenus = ({ menuItems }) => {
  // console.log(menuItems);
  const [isHovered, setIsHovered] = useState(null);
  const [hoveredData, setHoveredData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleHovered = (hoverStatus = null, itemData = {}) => {
    setIsHovered(hoverStatus);
    if (itemData && Object.keys(itemData).length) {
      // console.log("submenulist", itemData?.subMenuList);
      const subMenuData = itemData?.subMenuList || itemData?.subMenu;
      setHoveredData(subMenuData);
    }
  };
  return (
    <div className="sticky">
      <div className="flex flex-nowrap content-center justify-between bg-slate-100">
        <nav className="flex flex-wrap gap-2 w-[90%]  overflow-hidden  max-h-[30px]">
          {menuItems.map((item, index) => {
            return (
              <NavItem key={index} item={item} handleHovered={handleHovered} />
            );
          })}
        </nav>
        <div className="grid place-items-center pr-2">
          <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <RxHamburgerMenu />
          </span>
        </div>
      </div>
      {isHovered === true && isMenuOpen === false && (
        <SubMenu subMenuData={hoveredData} setIsHovered={setIsHovered} />
      )}
      {isMenuOpen === true && (
        <div>
          <AllMenu />
        </div>
      )}
    </div>
  );
};

export default HeaderMenus;
