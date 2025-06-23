
import Contact from "@/components/organisms/Contact";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default page;
