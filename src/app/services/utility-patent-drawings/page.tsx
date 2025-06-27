import ServiceLayout from "@/components/layout/serviceLayout";
import UtilityPatent from "@/components/organisms/Services/UtilityPatent";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "PatDraw (Effectual) offers professional, accurate, and timely utility patent drawing services of the highest calibre.",
  keywords: "Utility Patent Drawings, Utility Patent Drawing Services",
  title: "Utility Patent Drawings | Utility Patent Drawing Services",
  canonical: "services/utility-patent-drawing",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <UtilityPatent />
      </ServiceLayout>
    </main>
  );
};

export default page;
