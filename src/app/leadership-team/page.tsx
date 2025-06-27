import AboutLayout from "@/components/layout/aboutLayout";
import LeadershipTeam from "@/components/organisms/AboutUs/LeadershipTeam";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Our team is empowered by highly experienced individuals from the Technology, Management and Legal fraternities.",
  keywords: "Our Team, Leadership Team",
  title: "Leadership Team | PatDraw",
  canonical: "leadership-team",
});

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
