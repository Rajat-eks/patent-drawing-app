import Samples from "@/components/organisms/Samples";
import { buildMeta } from "@/lib/seo";
import React from "react";

export const metadata = buildMeta({
  title: "Patent Drawing Samples | Utility, Design Patent Drawing Examples",
  description:
    "Browse our professional Patent Drawing Samples, including Utility Patent Drawing Sample and Design Patent Drawing Samples. All illustrations meet USPTO and international standards.",
  keywords:
    "Patent Drawing Samples, Utility Patent Drawing Sample, Design Patent Drawing Samples",
  canonical: "patent-drawing-samples",
});

const page: React.FC = () => {
  return (
    <main>
      <Samples />
      <div className="w-full flex justify-center py-10 px-4">
        <a
          href="https://thepatentdrawings.com/product/design-patent-drawings"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] sm:text-[16px] font-semibold bg-blue text-white py-3 px-8 rounded-lg shadow hover:bg-blue/90 transition-colors"
        >
          Design Patent Drawings @ $28/Sheet
        </a>
      </div>
    </main>
  );
};

export default page;
