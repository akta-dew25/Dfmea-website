import React from "react";
import "./PartnershipModels.scss";
import { FaFileAlt, FaUserTie, FaUsers } from "react-icons/fa";

const PartnershipModels = () => {
  return (
    <section className="partnership">
      <div className="container">

        <p className="small-title">
          / CUSTOM DEVELOPMENT - CHOOSE YOUR WORKING MODEL /
        </p>

        <h2>PARTNERSHIP MODELS</h2>

        <p className="description">
          A relation tailored to your needs. From an individual developer to a
          dedicated project team, we have all you need. Our three effective
          partnership models are designed to adapt to individual business
          requirements and multiply profits for our clients.
        </p>

        <div className="timeline">
          <div className="line"></div>

          <div className="model">
            <div className="icon">
              <FaFileAlt />
            </div>
            <h3>FIXED PRICE PROJECT</h3>
            <p>
              We provide time estimates and assign skilled resources to work
              with you on your project, on a fixed-price basis.
            </p>
          </div>

          <div className="model">
            <div className="icon">
              <FaUserTie />
            </div>
            <h3>HOSTED TEAM EXTENSION</h3>
            <p>
              You can improve the operational efficiency of your project by
              adding our skilled professionals to work remotely with your team.
            </p>
          </div>

          <div className="model">
            <div className="icon">
              <FaUsers />
            </div>
            <h3>DEDICATED TEAM MODEL</h3>
            <p>
              We provide a dedicated team of designers, developers, project
              manager and QA for an estimated time (minimum 3 months) to
              complete your project.
            </p>
          </div>
        </div>

        <button className="cta-btn">
          LET’S DISCUSS YOUR PROJECT &nbsp; &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default PartnershipModels;