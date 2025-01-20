import React from "react";
import HeaderImage from "./HeaderImage";
import HeaderMenus from "./HeaderMenus";
import "./header.css";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = ({ headerData, dateTime }) => {
  if (!headerData) return;
  // console.log(headerData);
  const menuItems = headerData?.navigation?.l1;
  const editions = headerData?.editionSwitch?.editions;
  // console.log(editions);
  return (
    <header className="sticky top-0 bg-white">
      <HeaderTop editions={editions} dateTime={dateTime} />
      <HeaderImage />
      <HeaderMenus menuItems={menuItems} />
    </header>
  );
};

export default Header;
