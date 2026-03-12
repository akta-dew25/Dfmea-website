import React, { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 70);
  //     setActiveMenu(null);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar-white" : ""}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="nav-container">
          <div className="logo">INFOSOLUTIONS</div>

          <ul className="nav-links">
            <li onMouseEnter={() => setActiveMenu("who")}>WHO WE ARE</li>
            <li onMouseEnter={() => setActiveMenu("services")}>SERVICES</li>
            <li onMouseEnter={() => setActiveMenu("technology")}>TECHNOLOGY</li>
            <li onMouseEnter={() => setActiveMenu("industries")}>INDUSTRIES</li>
            <li>WORK</li>
            <li>RESOURCES</li>
          </ul>

          <button className="quote-btn">REQUEST A QUOTE</button>
        </div>
      </header>

      {/* MEGA MENU BELOW NAVBAR */}
      {activeMenu === "who" && (
        <div
          className="mega-menu"
          onMouseEnter={() => setActiveMenu("who")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mega-container">
            <div className="mega-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Why Konstant</h4>
              <ul>
                <li>Client Reviews</li>
                <li>Our Clients</li>
                <li>Our Partners</li>
                <li>Awards & Memberships</li>
                <li>Press & Media</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Our Process</h4>
              <ul>
                <li>Our Development Process</li>
                <li>Engagement Models</li>
                <li>Project Communication Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SERVICES MENU */}
      {activeMenu === "services" && (
        <div
          className="mega-menu"
          onMouseEnter={() => setActiveMenu("services")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mega-container">
            <div className="mega-column">
              <h4>Browse by Services</h4>
              <ul>
                <li>Mobile App Development</li>
                <li>Web Development</li>
                <li>Cross Platform App Development</li>
                <li>Ecommerce & CMS</li>
                <li>UI & UX Designing</li>
                <li>Staff Augmentation & Dedicated Teams</li>
              </ul>
            </div>

            <div className="mega-column border">
              <ul>
                <li>Opensource Development</li>
                <li>Quality Assurance</li>
                <li>NFT Development</li>
                <li>Blockchain Development</li>
                <li>App Prototype & Strategy</li>
                <li>Wearable App Development</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>

            <div className="mega-column border">
              <ul>
                <li>AI Development</li>
                <li>IoT Development</li>
                <li>Cloud Computing</li>
                <li>Consulting Services</li>
                <li>Software Maintenance & Support</li>
                <li>Startups</li>
                <li>Enterprise</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Partner With Us</h4>
              <ul>
                <li>Associate Partnership</li>
                <li>Strategic Partnership</li>
                <li>Referral Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeMenu === "technology" && (
        <div
          className="mega-menu"
          onMouseEnter={() => setActiveMenu("technology")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mega-container">
            <div className="mega-column">
              <h4>Backend</h4>
              <ul>
                <li>NodeJS</li>
                <li>.NET</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Python</li>
                <li>Laravel</li>
                <li>CodeIgniter</li>
                <li>CakePHP</li>
                <li>Django</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Frontend</h4>
              <ul>
                <li>Angular</li>
                <li>ReactJS</li>
                <li>ThreeJS</li>
                <li>VueJS</li>
                <li>Full Stack</li>
                <li>MERN Stack</li>
                <li>MEAN Stack</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Mobile</h4>
              <ul>
                <li>IOS</li>
                <li>Android</li>
                <li>React Native</li>
                <li>Hybrid</li>
                <li>Flutter</li>
                <li>Ionic</li>
                <li>Swift</li>
                <li>Kotlin</li>
              </ul>
            </div>

            <div className="mega-column border">
              <h4>Ecommerce</h4>
              <ul>
                <li>Magento</li>
              </ul>

              <h4 style={{ marginTop: "30px" }}>CMS</h4>
              <ul>
                <li>WordPress</li>
                <li>Drupal</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* INDUSTRIES MENU */}
      {activeMenu === "industries" && (
        <div
          className="mega-menu"
          onMouseEnter={() => setActiveMenu("industries")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mega-container">
            <div className="mega-column">
              <h4>Industries We Serve</h4>
              <ul>
                <li>Real Estate & Property</li>
                <li>On-Demand Solutions</li>
                <li>Social Netwoking</li>
                <li>Food & Restaurant</li>
                <li>Banking, Finance & Insurance</li>
              </ul>
            </div>

            <div className="mega-column border">
              <ul>
                <li>Education & eLearning</li>
                <li>Ecommerce, Retail & B2B</li>
                <li>Travel & Hospitality</li>
                <li>Media & Entertainment</li>
                <li>Healthcare & Fitness</li>
              </ul>
            </div>

            {/* <div className="mega-column border">
              <ul>
                <li>AI Development</li>
                <li>IoT Development</li>
                <li>Cloud Computing</li>
                <li>Consulting Services</li>
                <li>Software Maintenance & Support</li>
                <li>Startups</li>
                <li>Enterprise</li>
              </ul>
            </div> */}

            <div className="mega-column border">
              <h4>Solutions</h4>
              <ul>
                <li>On Demand App Solutions</li>
                <li>Chat Solution</li>
                <li>Classified App Solution</li>
                <li>Directory App Solution</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
