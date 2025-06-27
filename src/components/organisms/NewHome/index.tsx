import React from "react";
import HeroSection from "./HeroSection";
import Analytics from "./Analytics";
import About from "./About";
import Services from "./Services";
import Sample from "./Sample";
import Advantage from "./Advantage";
import Prices from "./Prices";
import Reviews from "./Reviews";
import CompanyInfo from "./CompanyInfo";
import AwardsRecognition from "../Home/AwardsRecognition";
import ContactBanner from "../Home/ContactBanner";

interface NewHomeProps {
  // define props here
}

const NewHome: React.FC<NewHomeProps> = (props) => {
  return (
    <main>
   
      <HeroSection />
      <Analytics />
      <About />
      <Services />
      <Sample />
      <Advantage />
      <Prices />
      <Reviews />
      <CompanyInfo />
      <AwardsRecognition />
      <ContactBanner />
    </main>
  );
};

export default NewHome;
