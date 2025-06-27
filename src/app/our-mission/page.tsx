import AboutLayout from "@/components/layout/aboutLayout";
import { OurMission } from "@/components/organisms/AboutUs";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface IndexProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Our goal is to offer top-notch services to individuals that consider and strive to incorporate innovation into their line of work.",
  keywords: "Mission & Vision",
  title: "Mission & Vision | PatDraw",
  canonical: "our-mission",
});

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
