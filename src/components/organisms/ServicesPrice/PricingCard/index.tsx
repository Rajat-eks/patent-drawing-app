import React from "react";
import { GrCertificate, MdArrowForwardIos } from "../../../assets/icons";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  image?: any;
  icon?: string;
  content?: string;
  name?: any;
  link: string;
}

const PricingCard: React.FC<IndexProps> = ({
  image,
  content,
  name,
  link,
  icon,
}) => {
  return (
    <div className="overflow-hidden group border-[1px] border-blue border-opacity-10 p-2 group rounded-sm shadow-lg bg-white hover:bg-blue hover:text-white">
      <Image
        src={image}
        alt={name}
        loading="lazy"
        className="border-b-[3px] border-blue  duration-300 overflow-hidden  group-hover:border-red w-full h-[270px] object-fill "
      />
      <div className="relative -top-7 left-3  inset-0  text-white">
        <GrCertificate className="bg-red border-2 h-16 w-16 p-3 rounded-full " />
      </div>
      <div className="p-0 space-y-2">
        <h1 className="text-2xl font-semibold text-blue group-hover:text-white">
          {name}
        </h1>
        {/* <p className="text-[14px]  text-loto">{content}</p> */}
      </div>
      <section className="flex justify-between items-center pt-4 pb-2 px-2">
        <div className="text-[15px] font-semibold ">Pricing -</div>
        <div className="flex gap-2 items-center">
          {/* <span className="line-through font-semibold ">$266</span> */}
          <span className="text-lg font-semibold">$67/<span className="text-[14px] text-gray-600 group-hover:text-white">Design</span></span>
        </div>
      </section>
      <div className="flex justify-between items-center py-2 px-2">
        <Link
          href={link}
          className="text-red text-sm font-[600] pt-2 flex  gap-1 items-center border-[1px] rounded py-2 px-4 hover:text-white hover:bg-red  border-red"
        >
          View Details
        </Link>
        <Link
          href={link}
          className="text-red text-sm font-[600] pt-2 flex  gap-1 items-center border-[1px] rounded py-2 px-4 hover:text-white hover:bg-red border-red "
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
