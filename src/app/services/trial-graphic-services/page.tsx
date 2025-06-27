import ServiceLayout from "@/components/layout/serviceLayout";
import GraphicService from "@/components/organisms/Services/GraphicService";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}
export const metadata = buildMeta({
  description:
    "Enhance your case with compelling trial graphics through our professional trial graphic services, delivering accurate and impactful visuals for effective courtroom presentations.",
  keywords: "Trial Graphics, Trial Graphic Services",
  title: "Trial Graphics | Trial Graphic Services",
  canonical: "",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <GraphicService />
      </ServiceLayout>
    </main>
  );
};

export default page;
