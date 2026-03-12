import React from "react";
import HeroSection from "../Components/HeroSection/heroSection";
import ServicesSection from "../Components/ServiceSection/serviceSection";
import CollaborationSection from "../Components/CollaborationSection/CollaborationSection";
import PartnersSection from "../Components/PartnershipModels/PartnershipModels";
import QuoteForm from "../Components/QuoteForm/QuoteForm";
import Footer from "../Components/CollaborationSection/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CollaborationSection />
      <PartnersSection />

      {/* request a quote page */}
      {/* <QuoteForm /> */}

      <Footer />
    </>
  );
};

export default Home;
