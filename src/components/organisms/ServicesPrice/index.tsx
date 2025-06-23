import React from "react";
import Service1 from "../../assets/img/home/services/UTILITY PATENT DRAWING_s1final.png";
import Service2 from "../../assets/img/home/services/DESIGN PATENT DRAWINGS_FINAL.png";
import Service3 from "../../assets/img/home/services/trademark s1_final.png";
import Service4 from "../../assets/img/home/services/_final_Chemical Structure & Chemical Sequence Drawings_s1.png";
import Service5 from "../../assets/img/home/services/3d modeling___s1__FINAL.png";
import Service6 from "../../assets/img/home/services/object patent drawings_s1_FINAL.png";
import PricingCard from "./PricingCard";
import Heading from "../../molecules/Heading";
import Card from "../Home/OurServices/Card";
import Head from "next/head";

interface IndexProps {
  // define props here
}

interface PATENTS {
  image?: any;
  name?: string;
  content?: string;
  link: string;
  order_url: string;
}
const patents: PATENTS[] = [
  {
    image: Service1,
    name: "Utility Patent Drawings",
    content:
      "Effectual offers professional, accurate, and timely utility patent drawing services of the highest calibre.",
    link: "/services/utility-patent-drawings",
    order_url: "/product/utility-patent-drawings",
  },
  {
    image: Service2,
    name: "Design Patent Drawings",
    content:
      "Only a product's outward appearance is protected by a design patent; its internal workings or design are not covered.",
    link: "/services/design-patent-drawings",
    order_url: "/product/design-patent-drawings",
  },
  {
    image: Service3,
    name: "Trademark  Drawings",
    content: `Trademarks are frequently regarded as the "face" and identity of your company that the public sees, recognizes, and trusts.`,
    link: "/services/trademark-drawings",
    order_url: "/product/trademark-drawingss",
  },
  {
    image: Service4,
    name: "Chemical Structure",
    content:
      "Effectual offers competent, accurate, and timely chemical structure drawing services at a high standard.",
    link: "/services/chemical-structure-drawings",
    order_url: "/product/chemical-structure-drawings",
  },
  {
    image: Service5,
    name: "3D Modeling",
    content:
      "A well-made 3D model can occasionally be the most effective means of conveying a vision to a crowd.",
    link: "/services/3d-modeling-drawings",
    order_url: "/product/3d-modeling-drawings",
  },
  {
    image: Service6,
    name: "Objected Patent Drawings.",
    content: `Newly revised drawings must be supplied under the heading "REPLACEMENT SHEET" on the top margin`,
    link: "/services/objected-patent-drawings",
    order_url: "/product/objected-patent-drawing",
  },
];

const ServicesPrice: React.FC<IndexProps> = (props) => {
  return (
    <>
      <Head>
        <title>Patent Drawings Services Price- The Patent Drawings</title>
        <meta
          name="description"
          content="The Patent Drawings offering professional patent drawing services at competitive prices. Our Patent Drawings team ensures high-quality, precise designs for all your patent needs."
        />
        <meta
          name="keywords"
          content="Patent Drawings Services, The Patent Drawings Services, Patent Drawing Services Price, Patent drawings price."
        />
        <link rel="canonical" href="https://thepatentdrawings.com/product" />
      </Head>
      <main className="flex flex-col justify-center items-center  bg-gradient-to-r from-[#EFF2FA]  via-[#E0ECFA] to-[#F1F1F3]">
        <Heading name="OUR SERVICES" />
        <h4 className="text-[17px]  font-poppins px-4 sm:px-10 md:px-20 text-center text-black py-3">
          Where we present an exclusive array of top-tier services meticulously
          crafted to fulfill your unique needs. Delve into our offerings and
          uncover how our unparalleled expertise and unwavering commitment can
          elevate your ambitions to new heights.
        </h4>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-7 md:px-10">
          {/* <MultiCarousal items={3}> */}
          {patents?.map(
            (
              { image, name, content, link, order_url }: PATENTS,
              index: number
            ) => {
              return (
                <Card
                  index={index + 1}
                  key={index}
                  image={image}
                  content={content}
                  name={name}
                  link={link}
                  order_url={order_url}
                />
              );
            }
          )}
        </section>
        <span className="w-full h-[2px] bg-red block mt-6"></span>
      </main>
    </>
  );
};

export default ServicesPrice;
