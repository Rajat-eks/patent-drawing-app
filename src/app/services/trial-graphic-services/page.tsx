import ServiceLayout from "@/components/layout/serviceLayout";
import GraphicService from "@/components/organisms/Services/GraphicService";
import React from "react";

interface PageProps {
  // define props here
}

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
