import TermsCondition from "@/components/organisms/TermsCondition";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Review PatDraw's comprehensive Terms & Conditions for PatDraw, outlining user agreements, intellectual property, and governing law for a clear understanding of site usage.",
  keywords:
    "Terms & Conditions",
  title: "Terms & Conditions",
  canonical: "terms-condition",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <TermsCondition />
    </main>
  );
};

export default page;
