import React from "react";
import Modeling from "@/components/organisms/Services/3DModelling";
import ServiceLayout from "@/components/layout/serviceLayout";
import { buildMeta } from "@/lib/seo";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Experience precise and detailed 3D modeling with our comprehensive 3D modeling services, delivering high-quality visuals for your projects promptly.",
  keywords:
    "3D Modeling, 3D Modeling Services",
  title: "3D Modeling | 3D Modeling Services",
  canonical: "services/3d-modeling-drawings",
});
const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <Modeling />
      </ServiceLayout>
    </main>
  );
};

export default page;
