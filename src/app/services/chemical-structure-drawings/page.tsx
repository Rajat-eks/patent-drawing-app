import ServiceLayout from "@/components/layout/serviceLayout";
import ChemicalStructure from "@/components/organisms/Services/ChemicalStructure";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Obtain precise chemical structure drawings with our professional chemical structure drawing services, delivering accurate and timely representations for your research and patents.",
  keywords: "Chemical Structure Drawings, Chemical Structure Drawing Services",
  title: "Chemical Structure Drawings | Chemical Structure Drawing Services",
  canonical: "services/chemical-structure-drawings",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <ChemicalStructure />
      </ServiceLayout>
    </main>
  );
};

export default page;
