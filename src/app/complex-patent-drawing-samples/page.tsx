import ComplexDesign from "@/components/organisms/ComplexDesign";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Download free complex patent drawing samples covering utility & design patents, annotations, and more. Get expert insights now",
  keywords:
    "Complex Patent Drawing Samples, Complex Utility Patent Drawing Samples, Complex Design Patent Drawing Samples",
  title: "Download Complex Patent Drawing Samples",
  canonical: "complex-patent-drawing-samples",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ComplexDesign />
    </main>
  );
};

export default page;
