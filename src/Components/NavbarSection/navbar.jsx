import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-white" : ""}`}>
      <div className="nav-container">
        <div className="logo">LOGO</div>

        <ul className="nav-links">
          <li>WHO WE ARE</li>
          <li>SERVICES</li>
          <li>TECHNOLOGY</li>
          <li>INDUSTRIES</li>
          <li>WORK</li>
          <li>RESOURCES</li>
        </ul>

        <button className="quote-btn">REQUEST A QUOTE</button>
      </div>
    </header>
  );
};

export default Navbar;