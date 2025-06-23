import React from "react";
import UTILITY_PATENT from "../../../assets/img/Samples/Utility Drawings/UD1.jpg";
import DESGN_PATENT from "../../../assets/img/Samples/Design Drawings/DD1.jpg";
import THREEDMODELLING from "../../../assets/img/Samples/other/3DModelling.png";
import CHEMICAL_DRAWING from "../../../assets/img/Samples/Chemical Structure/CT8.jpg";
import OBJECT_PATENT from "../../../assets/img/Samples/Objected Patent Drawings/OPT2.jpg";
import TRADEMARK_DRAWING from "../../../assets/img/Samples/Trademark Design/TM1.jpg";

import MultiCarousal from "../../../hoc/MultiCarousal";
import Image from "next/image";
import Link from "next/link";

interface ServicesProps {
  // define props here
}

const Services: React.FC<ServicesProps> = (props) => {
  const servivces: any = [
    {
      image: UTILITY_PATENT,
      name: "Utility Patent Drawings",
      para: `Effectual offers professional, accurate, and timely utility patent drawing services of the highest calibre.`,
      order: "/product/utility-patent-drawings",
    },
    {
      image: DESGN_PATENT,
      name: "Design Patent Drawings",
      para: `Only a product's outward appearance is protected by a design patent; its internal workings or design are not covered.`,
      order: "/product/design-patent-drawings",
    },
    {
      image: TRADEMARK_DRAWING,
      name: "Trademark Drawings",
      para: `Trademarks are frequently regarded as the "face" and identity of your company that the public sees, recognizes, and trusts.`,
      order: "/product/trademark-drawings",
    },
    {
      image: CHEMICAL_DRAWING,
      name: "Chemical Structure",
      para: `Effectual offers competent, accurate, and timely chemical structure drawing services at a high standard.`,
      order: "/product/chemical-structure-drawings",
    },
    {
      image: THREEDMODELLING,
      name: "3D Modeling",
      para: `A well-made 3D model can occasionally be the most effective means of conveying a vision to a crowd.`,
      order: "/product/3d-modeling-drawings",
    },
    {
      image: OBJECT_PATENT,
      name: "Objected Patent Drawings",
      para: `Newly revised drawings must be supplied under the heading "REPLACEMENT SHEET" on the top margin.`,
      order: "/product/objected-patent-drawings",
    },
  ];
  return (
    <main className="bg-white text-black font-poppins flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl  font-semibold text-center">
        Comprehensive Patent Drawing Services
      </h2>
      <section className="w-full p-2 px-4">
        <MultiCarousal items={3} dots={true} arrows={true}>
          {servivces?.map((item: any,index:number) => {
            return (
              <div key={index} className="border-[1px] border-gray-600  bg-transparent p-4 rounded-lg flex flex-col items-center justify-center gap-1 mx-4 mb-6 mt-4 ">
                <Image src={item?.image} alt={item.name} className="h-[11rem]" />
                <h3 className="text-red font-semibold text-xl">{item?.name}</h3>
                <p className="text-[13px] text-center px-4">{item?.para}</p>
                <Link
                  href={item?.order}
                  className="text-[14px] bg-blue rounded text-white py-2 px-3 mt-3"
                >
                  Order Now
                </Link>
              </div>
            );
          })}
        </MultiCarousal>
      </section>
    </main>
  );
};

export default Services;
