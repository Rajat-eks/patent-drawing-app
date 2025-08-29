import React from "react";
import Card from "./_card";
import { buildMeta } from "@/lib/seo";
import Banner1 from "../../components/assets/img/S1_Promotional banner_Final.png";
import ComplexDrawing from "../../components/assets/img/ultimate-guidebook.png";
import MasteringGuideBook from "../../components/assets/img/mastering-guidebook.png";
import ComplexDrawing2 from "../../components/assets/img/guide.png";
import Image from "next/image";
import ArticleBanner from "../../components/assets/img/article/article-banner.png";
interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Explore Patent Drawing Knowledge with helpful guides, tips, and free resources supporting inventors, attorneys, and businesses in creating accurate patent illustrations.",
  keywords: "Patent Drawing Knowledge",
  title: "Patent Drawing Knowledge Hub | PatDraw",
  canonical: "patent-drawing-knowledge-hub",
});
const pages = [
  {
    image: Banner1,
    url: "/patent-drawings-checklist-step-by-step-complete-guide",
  },

  {
    image: ComplexDrawing,
    url: "/ultimate-guide-patent-drawing-excellence",
  },
  {
    image: MasteringGuideBook,
    url: "/mastering-line-quality-patent-drawings-comprehensive-guide",
  },
  {
    image: ComplexDrawing2,
    url: "/comprehensive-guide-sheet-sizes-secifically-patent-drawings",
  },
];
const page: React.FC<PageProps> = (props) => {
  return (
    <main className="pt-10">
      <section>
        <div className="h-[40vh] w-full relative">
          <Image
            src={ArticleBanner}
            alt="ArticleBanner"
            className="w-full"
            fill
            priority
          />
        </div>
        <div className="absolute top-60 left-20 text-3xl space-y-2 text-white ">
          <h1 className="text-3xl font-bold">Patent Drawing Knowledge Hub</h1>
          <p className="text-[19px] font-normal w-[1100px]">
            {" "}
            Find comprehensive guides, tutorials, and downloadable resources
            about patent drawings that help inventors and attorneys create
            precise, compliant, and professional patent illustrations with ease.
          </p>
        </div>
      </section>

      <section className="px-10 py-5 grid grid-cols-3 space-y-5 gap-5">
        {pages.map((item, index) => (
          <Card key={index} image={item.image} url={item.url} />
        ))}
      </section>
    </main>
  );
};

export default page;
