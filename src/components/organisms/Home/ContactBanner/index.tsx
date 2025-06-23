import React from "react";
import Banner from "../../../assets/img/home/Patdraw.png";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const ContactBanner: React.FC<IndexProps> = (props) => {
  return (
    <main className="relative h-60">
      <div className="relative h-full">
        <Image
          src={Banner}
          alt="Patdraw_banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="absolute   inset-0 top-0 bottom-0 left-0 right-0  flex flex-col items-center justify-center font-poppins text-white ">
        <h4 className="text-xl md:text-2xl font-bold text-center">
          Order your Patent Drawings Now
        </h4>
        <p className="text-center text-[13px] ">
          Join thousands of satisfied clients who trust us for high-quality,
          affordable.
        </p>
        <div className="flex items-center justify-center gap-5 md:gap-10 pt-6 md:pt-10">
          <Link
            href={"/product"}
            className="bg-blue text-white py-2 px-4 text-[13px] rounded"
          >
            Get Started
          </Link>
          <Link
            href={"/patent-drawing-samples"}
            className="bg-red text-white py-2 px-4 text-[13px] rounded"
          >
            View Samples
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ContactBanner;
