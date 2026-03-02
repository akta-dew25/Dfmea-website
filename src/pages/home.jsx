import React from "react";
import HeroSection from "../Components/HeroSection/heroSection";
import ServicesSection from "../Components/ServiceSection/serviceSection";
import Navbar from "../Components/NavbarSection/navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default Home;