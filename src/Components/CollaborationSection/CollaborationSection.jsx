import React from "react";
import "./CollaborationSection.scss";

const CollaborationSection = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <h2 className="main-title">
          TOP-RATED WEB AND MOBILE APP DEVELOPMENT COMPANY
        </h2>

        <p className="sub-text">
          We’ve worked with hundreds of startups, small-medium enterprises and
          top brands, empowering them with our <strong>digital intelligence and expertise</strong>.
          We deliver the right business outcomes <strong>5X faster</strong> than our competitors.
        </p>

        <p className="small-heading">
          / ON-BOARDING PROCESS - BUILDING LONG-TERM PARTNERSHIPS /
        </p>

        <h3 className="section-title">
          KNOW HOW WE COLLABORATE WITH OUR CLIENTS
        </h3>

        <p className="description">
          We’re always excited to listen to new ideas from clients and create new
          levels of value through client businesses.
        </p>

        <div className="cards">
          <div className="card">
            <h4>UNDERSTAND OUR CLIENTS</h4>
            <ul>
              <li>✔ Call or Meeting</li>
              <li>✔ NDA (Non-Disclosure)</li>
            </ul>
          </div>

          <div className="card">
            <h4>PROJECT ESTIMATES</h4>
            <ul>
              <li>✔ Gather Requirements</li>
              <li>✔ Perfect Proposal</li>
            </ul>
          </div>

          <div className="card">
            <h4>STRATEGIC PARTNERSHIP</h4>
            <ul>
              <li>✔ T&C Communicated</li>
              <li>✔ Project Agreement</li>
            </ul>
          </div>

          <div className="card highlight">
            <h4>WORKING TOGETHER</h4>
            <button>LET’S START WITH US →</button>
          </div>
        </div>
        
      </div>
        <div className="progress-dots">
      <span className="dot"></span>
      <span className="dot blue"></span>
      <span className="dot red"></span>
      <span className="dot green"></span>
   </div>
    </section>
  );
};

export default CollaborationSection;