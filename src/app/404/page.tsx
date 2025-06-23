import NotFound from "@/components/organisms/NotFound";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <NotFound />
    </main>
  );
};

export default page;
