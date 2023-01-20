import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./img/psychelogo.png";
import "./Nav.css";

function Navbar() {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/home" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" style={{ marginLeft:50}}>
            <a href="/aboutus" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/psychologists" onClick={closeMenu}>
              Psychologists
            </a>
          </li>
          <li className="nav-item">
            <a href="/tests" onClick={closeMenu}>
              Tests
            </a>
          </li>
          <li className="nav-item">
            <a href="/faq" onClick={closeMenu}>
              F.A.Q.
            </a>
          </li>
          <span className="nav-item" style={{ marginLeft:500}}>
            <a href="/login" onClick={closeMenu}>
              Log In
            </a>
          </span>
          <span className="nav-item">
            <a href="/signin" onClick={closeMenu}>
              Sign In
            </a>
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
