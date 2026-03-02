import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [whiteNav, setWhiteNav] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / pageHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    const servicesSection = document.getElementById("services");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWhiteNav(true);
          } else {
            setWhiteNav(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (servicesSection) observer.unobserve(servicesSection);
    };
  }, []);

  return (
    <>
      {/* Progress Line */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>

      <header className={`navbar ${whiteNav ? "navbar-white" : ""}`}>
        <div className="nav-container">
          <div className="logo">KONSTANT INFOSOLUTIONS</div>

          <ul>
            <li>WHO WE ARE</li>
            <li>SERVICES</li>
            <li>TECHNOLOGY</li>
            <li>INDUSTRIES</li>
            <li>WORK</li>
            <li>RESOURCES</li>
          </ul>

          <button className="quote-btn">
            REQUEST A QUOTE
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;