import React from "react";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import Statistics from "./Statistics";
// import Samples from './Samples'
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import AwardsRecognition from "./AwardsRecognition";
import GlobalFootprint from "./GlobalFootprint";
import AboutUs from "./AboutUs";
import GetInTouch from "../GetInTouch";

// import WhyChoose from './WhyChoose'

interface HomeProps {
  // define props here
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <Statistics />
      <OurServices />
      <AwardsRecognition />
      <GlobalFootprint />
      <Testimonial />
      <GetInTouch />
    </main>
  );
};

export default Home;
