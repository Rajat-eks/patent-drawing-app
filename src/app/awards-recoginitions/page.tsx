import AboutLayout from "@/components/layout/aboutLayout";
import AwardsRecognition from "@/components/organisms/Home/AwardsRecognition";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "At our company, we’re proud to showcase the awards and recognitions that highlight our journey of excellence and innovation.",
  keywords:
    "Awards & Recognitions",
  title: "Awards & Recognitions | PatDraw",
  canonical: "awards-recoginitions",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <AboutLayout>
        <AwardsRecognition />
      </AboutLayout>
    </main>
  );
};

export default page;
