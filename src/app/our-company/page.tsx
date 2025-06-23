import AboutLayout from "@/components/layout/aboutLayout";
import { OurCompany } from "@/components/organisms/AboutUs";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <AboutLayout>
        <OurCompany />
      </AboutLayout>
    </main>
  );
};

export default page;
