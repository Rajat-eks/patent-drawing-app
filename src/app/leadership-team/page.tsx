import AboutLayout from "@/components/layout/aboutLayout";
import LeadershipTeam from "@/components/organisms/AboutUs/LeadershipTeam";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <AboutLayout>
        <LeadershipTeam />
      </AboutLayout>
    </main>
  );
};

export default page;
