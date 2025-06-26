import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  // define props here
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  return (
    <main className="mt-1 sm:mt-2 md:mt-5 bg-customGreen text-black flex flex-col items-center justify-center gap-5 py-20 font-poppins w-full ">
      <h1 className="font-poppins flex flex-col items-center justify-center text-3xl leading-10 font-[700] text-center tracking-wide w-full">
        Professional Patent Drawings <br />
        That Get Approved
      </h1>
      <p className="text-[13px] text-center">
        Transform your innovations into precise, USPTO-compliant patent sketch /
        illustrations
      </p>
      <div className="flex gap-5 text-[14px] pt-4">
        <Link
          href={"/contact-us"}
          className="p-2 rounded text-white bg-blue text-[13px]"
        >
          Contact Us
        </Link>
        <Link
          href={"/patent-drawing-samples"}
          className="py-2 px-3 rounded text-white bg-red text-[13px] "
        >
          View Samples
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
