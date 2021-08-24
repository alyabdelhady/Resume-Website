import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNavColour = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavColour();
    window.addEventListener("scroll", changeNavColour);
  }, []);

  return (
    <nav className={navbar ? "nav-container-active" : "nav-container"}>
      <div className={click ? "navbar-list-active" : "navbar-list"}>
        <ul className={click ? "menu-list-active" : "menu-list"}>
          <li className="list-items">
            <Link to="/" className="list-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="list-items">
            <Link to="/ABOUT" className="list-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="list-items">
            <Link to="/RESUME" className="list-links" onClick={closeMobileMenu}>
              RESUME
            </Link>
          </li>
          <li className="list-items">
            <Link to="/WORKS" className="list-links" onClick={closeMobileMenu}>
              WORKS
            </Link>
          </li>
          <li className="list-items">
            <Link
              to="/TESTIMONIALS"
              className="list-links"
              onClick={closeMobileMenu}
            >
              TESTIMONIALS
            </Link>
          </li>
          <li className="list-items">
            <Link
              to="/CONTACT"
              className="list-links"
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="menu-bar" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
