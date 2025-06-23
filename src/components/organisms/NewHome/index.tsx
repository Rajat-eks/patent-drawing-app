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
import SEO from "../../common/SEO";

interface NewHomeProps {
  // define props here
}

const NewHome: React.FC<NewHomeProps> = (props) => {
  return (
    <main>
      <SEO
        description="PatDraw, a leading patent drawing services company, delivers expert and mediatory support, ensuring precise and compliant patent illustrations for your inventions."
        keywords="PatDraw, Patent Drawing Services, Patent Drawing Company, Effectual Patent Drawings, Professional Patent Drawings, Perfect Patent Drawings, Premium Patent Drawings
"
        title="PatDraw | Patent Drawing Services Company"
      />
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
