import React from "react";
import EngagemmentModel from "@/components/organisms/AboutUs/EngagementModel";
import AboutLayout from "@/components/layout/aboutLayout";
import { buildMeta } from "@/lib/seo";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "We hire and train specialists tailored to client specifications. We manage the team and provide necessary infrastructure.",
  keywords: "Our Engagement Models",
  title: "Our Engagement Models | PatDraw",
  canonical: "our-engagement-model",
});

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
