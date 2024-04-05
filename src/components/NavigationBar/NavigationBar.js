import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavItems = () => {
    return (
      <ul className="frame-496" id="nav">
        <li>
          <a href="#nav">SERVICES</a>
        </li>
        <li>
          <a href="#nav">ABOUT US</a>
        </li>
        <li>
          <a href="#nav">CONTACT US</a>
        </li>
        <li>
          <a href="#nav">CAREERS</a>
        </li>
      </ul>
    );
  };

  const renderHamburgerIcon = () => {
    return (
      <button className="menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="font_icons" />
      </button>
    );
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#nav" className="Logo">
          <img src="Logo.png" alt="Company Logo" />
        </a>
        {isMobileView ? renderHamburgerIcon() : renderNavItems()}
      </nav>
      {isMenuOpen && isMobileView && renderNavItems()} {/* Conditionally render the list */}
    </div>
  );
}
