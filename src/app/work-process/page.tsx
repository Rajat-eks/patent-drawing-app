import WorkProcess from "@/components/organisms/WorkProcess";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}
export const metadata = buildMeta({
  description:
    "Our services are specially curated & designed to support patent agents & patent attorneys",
  keywords: "Our Work Process, How it Works",
  title: "Our Work Process | PatDraw",
  canonical: "work-process",
});
const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <WorkProcess />
    </main>
  );
};

export default page;
