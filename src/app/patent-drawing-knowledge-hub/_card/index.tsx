import { buildMeta } from "@/lib/seo";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IndexProps {
  // define props here
  image: StaticImageData;
  url: string;
}

const Card: React.FC<IndexProps> = ({image, url}) => {
  return (
    <div className="shadow-sm p-4 rounded bg-blue">
      <div>
        <Image src={image} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <Link href={url} className="bg-red text-white font-semibold py-2 px-4 rounded">
          Get Access
        </Link>
      </div>
    </div>
  );
};

export default Card;
