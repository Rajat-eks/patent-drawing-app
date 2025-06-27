import ServicesPrice from "@/components/organisms/ServicesPrice";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "The Patent Drawings offering professional patent drawing services at competitive prices. Our Patent Drawings team ensures high-quality, precise designs for all your patent needs.",
  keywords:
    "Patent Drawings Services, The Patent Drawings Services, Patent Drawing Services Price, Patent drawings price.",
  title: "Patent Drawings Services Price- The Patent Drawings",
  canonical: "product",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServicesPrice />
    </main>
  );
};

export default page;
