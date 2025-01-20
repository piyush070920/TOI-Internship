import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const navRef = useRef();
  const showNavBar =() => {
    navRef.current.classList.toggle("responsive-nav");
  }
  return (
    <header>
    <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">MyWork</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}><FaBars/></button>
    </header>
  );
};

export default Navbar;
