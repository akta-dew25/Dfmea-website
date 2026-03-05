import React from "react";
import HeroSection from "../Components/HeroSection/heroSection";
import ServicesSection from "../Components/ServiceSection/serviceSection";
import CollaborationSection from "../Components/CollaborationSection/CollaborationSection";
import PartnersSection from "../Components/PartnershipModels/PartnershipModels";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CollaborationSection/>
      <PartnersSection />
    </>
  );
};

export default Home;