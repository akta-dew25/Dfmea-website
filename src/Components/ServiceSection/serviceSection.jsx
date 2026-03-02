import React from "react";
import "./serviceSection.scss";

const services = [
  {
    title: "WEB DEVELOPMENT",
    items: ["PHP", ".NET", "JAVA", "JOOMLA"],
    description:
      "For 20 years now, we’ve been working with top web technologies to offer next-gen web app solutions and premium websites.",
  },
  {
    title: "MOBILE & WEARABLES",
    items: ["IOS", "ANDROID", "HYBRID", "WEARABLES"],
  },
  {
    title: "ECOMMERCE DEVELOPMENT",
    items: ["MAGENTO", "WORDPRESS"],
  },
  {
    title: "CLOUD COMPUTING",
    items: ["ARCHITECT", "BUILD", "MANAGE"],
  },
  {
    title: "APP PROTOTYPE & STRATEGY",
    items: ["TIME", "FIDELITY", "INTERACTIVITY"],
    description:
      "We create dynamic, fully-interactive and clickable prototypes — a detailed working model of your future app without any coding.",
  },
  {
    title: "OFFSHORE STAFFING",
    items: ["IOS", "ANDROID", "PHP", "MAGENTO"],
  },
  {
    title: "IOT (INTERNET OF THINGS)",
    items: ["CONSULT", "DEVELOP", "IMPLEMENT"],
  },
  // {
  //   title: "UI/UX DESIGN",
  //   items: ["WIREFRAME", "DESIGN", "TESTING"],
  // },
];

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="left-panel">
        <h2>INTEGRATED SERVICES</h2>
        <p>
          We build the foundation for cognitive business by working with complex
          technologies and rapidly evolving business environment.
        </p>
        <p>CHECK OUT OUR SERVICES →</p>
      </div>

      <div className="right-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-content">
              <h3>{service.title}</h3>

              <div className="tags">
                {service.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              {service.description && (
                <div className="description">
                  <p>{service.description}</p>
                  {/* <span className="read-more">READ MORE</span> */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
