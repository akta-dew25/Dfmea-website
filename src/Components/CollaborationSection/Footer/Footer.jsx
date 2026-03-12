import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-col">
          <h3>INFOSOLUTIONS</h3>
          <p>
            We build scalable digital products, mobile apps, and enterprise
            solutions for startups and global businesses.
          </p>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Ecommerce Development</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-col">
          <h4>Technologies</h4>
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>NextJS</li>
            <li>Python</li>
            <li>Flutter</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Work</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Subscribe</h4>
          <p>Get the latest updates and tech insights.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">
        <p>
          Copyright © 2026 Infosolutions. All Rights Reserved. Privacy Policy |
          Terms & Conditions | Sitemap
        </p>
      </div>
    </footer>
  );
};

export default Footer;
