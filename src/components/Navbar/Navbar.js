import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css"; 

// Import Fitoverse logo from assets folder
import fitoverseLogo from "../../assets/fitoverse-logo.png"; 

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event to toggle between name and logo
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); 
    } else {
      setScrolling(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          {!scrolling && (
            <div className="navbar-name-logo">
              <span className="navbar-name">{"Fitoverse"}</span>
            </div>
          )}

          {scrolling && (
            <div className="navbar-logo-container">
              <img
                src={fitoverseLogo}
                alt="Fitoverse Logo"
                className="navbar-logo"
              />
            </div>
          )}
        </div>

        <div className="navbar-right">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/flipbook" className="navbar-link">Catalogue</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/about" className="navbar-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
