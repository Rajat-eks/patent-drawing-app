import FAQ from "@/components/organisms/FAQ";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Find answers to your frequently asked questions regarding mediatory processes, ensuring clarity and understanding for a smoother resolution experience.",
  keywords:
    "FAQs, Frequently Asked Questions",
  title: "Frequently Asked Questions| PatDraw",
  canonical: "faq",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <FAQ />
    </main>
  );
};

export default page;
