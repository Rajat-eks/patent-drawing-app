import Samples from "@/components/organisms/Samples";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  title: "Patent Drawing Samples | Utility, Design Patent Drawing Examples",
  description:
    "Browse our professional Patent Drawing Samples, including Utility Patent Drawing Sample and Design Patent Drawing Samples. All illustrations meet USPTO and international standards.",
  keywords:
    "Patent Drawing Samples, Utility Patent Drawing Sample, Design Patent Drawing Samples",
  canonical: "patent-drawing-samples",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Samples />
    </main>
  );
};

export default page;
