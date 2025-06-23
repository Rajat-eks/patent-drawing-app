import AboutLayout from "@/components/layout/aboutLayout";
import { OurMission } from "@/components/organisms/AboutUs";
import React from "react";

interface IndexProps {
  // define props here
}

const index: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <AboutLayout>
        <OurMission />
      </AboutLayout>
    </main>
  );
};

export default index;
