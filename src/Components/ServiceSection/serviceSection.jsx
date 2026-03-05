import React from "react";
import "./serviceSection.scss";
// import bg from "../assets/services-bg.jpg";

const services = [
  {
    title: "INTEGRATED SERVICES",
    description:
      "We build the foundation for cognitive business by working with complex technologies and rapidly evolving business environment.",
    isHighlight: true,
  },
  {
    title: "MOBILE & WEARABLES",
    items: ["IOS", "ANDROID", "HYBRID", "WEARABLES"],
    description : "Our mobile app development services offer modern, feature-rich solutions for iOS, Android and cross-platform mobile apps. We also build amazing wearable solutions.",
    borderTop:true,

  },
  {
    title: "ECOMMERCE DEVELOPMENT",
    items: ["MAGENTO", "WORDPRESS"],
    description:"Adding value to your business, we provide the finest eCommerce development services to help generate high revenue and improve conversions.",
    borderTop:true,

  },
  {
    title: "CLOUD COMPUTING",
    items: ["ARCHITECT", "BUILD", "MANAGE"],
    description:"We develop a holistic strategy to manage robust cloud environments integrating latest technologies like hybrid cloud models and cognitive computing.",
    borderTop:true,

  },
  {
    title: "WEB DEVELOPMENT",
    items: ["PHP", ".NET", "JAVA", "JOOMLA"],
    description:"For 20 years now, we’ve been working with top web technologies to offer next-gen web app solutions and premium websites."
  },
  {
    title: "APP PROTOTYPE AND STRATEGY",
    items: ["TIME", "FIDELITY", "INTERACTIVITY"],
    description:"We create dynamic, fully-interactive and clickable prototypes- a detailed working model of your future app-without any coding, in minimum time."
  },
  {
    title: "OFFSHORE STAFFING",
    items: ["IOS", "ANDROID", "PHP", "MAGENTO"],
    description:"We give you a large, diverse and the right pool of dependable resources- who can identify how to add most business value."
  },
  {
    title: "IOT (INTERNET OF THINGS)",
    items: ["CONSULT", "DEVELOP", "IMPLEMENT & EVALUATE"],
    description:"We help you reinvent experiences and disruptive business models to increase customer engagement and drive enterprise growth using the connected IoT technology."
  },
];

const ServicesSection = () => {
  return (
    <section
      className="services"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="grid-wrapper">
        {services.map((service, index) => (
          <div
            className={`service-card ${
              service.isHighlight ? "highlight" : service.borderTop ? "border-top" : ""
            }`}
            key={index}
          >
            <h3>{service.title}</h3>

            {service.items && (
              <div className="tags">
                {service.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            )}

            {service.description && (
              <p className="description">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;