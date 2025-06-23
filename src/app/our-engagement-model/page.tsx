import React from "react";
import EngagemmentModel from "@/components/organisms/AboutUs/EngagementModel";
import AboutLayout from "@/components/layout/aboutLayout";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <AboutLayout>
        <EngagemmentModel />
      </AboutLayout>
    </main>
  );
};

export default page;
