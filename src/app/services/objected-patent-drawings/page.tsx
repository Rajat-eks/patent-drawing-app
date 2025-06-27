import ServiceLayout from "@/components/layout/serviceLayout";
import ObjectedPatent from "@/components/organisms/Services/ObjectedPatent";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Resolve your patent rejections with our expert objected patent drawing services, providing accurate and timely revisions for your objected patent drawings.",
  keywords: "Objected Patent Drawings, Objected Patent Drawing Services",
  title: "Objected Patent Drawings | Objected Patent Drawing Services",
  canonical: "services/objected-patent-drawings",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <ObjectedPatent />
      </ServiceLayout>
    </main>
  );
};

export default page;
