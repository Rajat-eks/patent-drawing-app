import React from "react";
import LeftArrow from "../../assets/icons/Left-Arrow.png";
import RightArrow from "../../assets/icons/Right-Arrow.png";
import Image from "next/image";

interface IndexProps {
  name?: string;
}

const Heading: React.FC<IndexProps> = ({ name }) => {
  return (
    <main className="flex items-center ">
      <Image src={RightArrow} alt="RightArrow" className="w-16 md:w-24" />
      <h2 className="  px-4  text-blue font-bold text-xl sm:text-2xl text-center leading-5 md:text-3xl leading-3">{name}</h2>
      <Image src={LeftArrow} alt="LeftArrow" className="w-16 md:w-24" />
    </main>
  );
};

export default Heading;
