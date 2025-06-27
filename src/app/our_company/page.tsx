import AboutLayout from "@/components/layout/aboutLayout";
import { OurCompany } from "@/components/organisms/AboutUs";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "With over two decades of experience, the Patent Drawings team has completed thousands of utility and design drawings for a wide range of clients worldwide.",
  keywords: "Our Company, About Us, Who we are",
  title: "About Us | PatDraw",
  canonical: "our-company",
});

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
