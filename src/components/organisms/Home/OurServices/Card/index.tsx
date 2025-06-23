import React from "react";
import { GrCertificate, MdArrowForwardIos } from "../../../../assets/icons";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  image?: any;
  icon?: string;
  content?: string;
  name?: any;
  link: string;
  order_url: string;
  index: number;
}

const Card: React.FC<IndexProps> = ({
  image,
  content,
  name,
  link,
  icon,
  index,
  order_url,
}) => {
  return (
    <div className="overflow-hidden group border-[2px]  border-blue  p-4 group rounded-lg shadow-lg bg-white hover:bg-blue hover:text-white">
      <Image
        src={image}
        alt={name}
        loading="lazy"
        className="  duration-300 overflow-hidden  group-hover:border-red w-full h-[270px] object-fill p-4 rounded "
      />
      {/* <div className="relative -top-7 left-3  inset-0  text-white">
        <GrCertificate className="bg-red border-2 h-16 w-16 p-3 rounded-full " />
      </div> */}
      <div className="p-0 space-y-2  flex flex-col items-center  justify-between">
        <h2 className="text-xl font-semibold text-red uppercase group-hover:text-white">
          {name}
        </h2>
        <p className="text-[14px]  text-loto text-center">{content}</p>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            className=" border-[1px] bg-blue py-2 px-4 rounded-full text-sm font-[600] pt-2 flex  gap-1 items-center text-white group-hover:bg-white group-hover:text-blue shadow shadow-black"
          >
            Know More <MdArrowForwardIos size={12} />
          </Link>
          <Link
            href={order_url}
            className=" border-[1px] bg-green-600 text-white py-2 px-4 rounded-full text-sm font-[600] pt-2 flex  gap-2 items-center group-hover:bg-white group-hover:text-blue shadow shadow-black"
          >
            Order Now <BsCart2 size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
