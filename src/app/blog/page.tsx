import Article from "@/components/organisms/Article";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Explore our comprehensive patent drawing resources. Learn about requirements, guidelines, tools, and best practices from PatDraw experts to perfect your patent illustrations.",
  keywords: "Patent Drawings Blog, Patent Drawings Knowledge Resources",
  title: "Blog and Knowledge Help Resources for Patent Drawings",
  canonical: "blog",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Article />
    </main>
  );
};

export default page;
