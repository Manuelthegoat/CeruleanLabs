import React, { useState } from "react";
import Logo2 from "../../Assets/logo2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <img src={Logo2} alt="Logo" className="header-logo" />

      {/* Desktop Nav */}
      <nav className="header-nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/partners" className="nav-link">Partner Wall</a>
        <a href="/contact" className="nav-link">Contact Us</a>
      </nav>

      {/* Mobile Icon */}
      <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mobile-nav">
          <a href="/" className="mobile-link">Home</a>
          <a href="/about" className="mobile-link">About</a>
          <a href="/services" className="mobile-link">Services</a>
          <a href="/partners" className="mobile-link">Partner Wall</a>
          <a href="/contact" className="mobile-link">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;
