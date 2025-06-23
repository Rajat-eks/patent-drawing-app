import TermsCondition from "@/components/organisms/TermsCondition";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <TermsCondition />
    </main>
  );
};

export default page;
