import ServiceLayout from "@/components/layout/serviceLayout";
import UtilityPatent from "@/components/organisms/Services/UtilityPatent";
import React from "react";

interface PageProps {
  // define props here
}

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
