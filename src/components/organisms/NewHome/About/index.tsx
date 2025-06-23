import React from "react";
import TIME from "../../../assets/img/icons/time wasted.png";
import PROTECTION from "../../../assets/img/icons/protection at Risk.png";
import RISING from "../../../assets/img/icons/rising cost.png";
import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  // define props here
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <main className="bg-gradient-to-r from-customRed via-customGreen to-customGreen font-poppins flex flex-col items-center justify-center py-10 ">
      <h2 className="text-2xl font-bold text-center">
        Perfect Patent Drawings,{" "}
        <span className="text-blue">Zero Rejections</span>
      </h2>
      <p className="text-[13px] pt-1 text-center">
        Are patent drawing rejections eating into your time and budget? Stop
        losing precious weeks to revision cycles.
      </p>
      <section className="flex flex-col items-center justify-center  pt-10  sm:px-5 md:px-10">
        <span className="border-t-[2px] w-[20%] border-gray-800 rounded "></span>
        <h4 className="pt-4 font-semibold text-gray-800 text-center">
          What are the Hidden Costs of Inaccurate Patent Drawings?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-5">
            <Image src={TIME} alt="time-wasted" className="w-10" />
            <div className="flex flex-col items-start justify-center">
              <h5 className="text-red font-semibold">Time Wasted </h5>
              <p className="text-[12px]">
                Each rejectrion means 3-6 months of delays and missed
                opportunities
              </p>
            </div>
          </div>
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-5">
            <Image src={PROTECTION} alt="protection" className="w-10" />
            <div className="flex flex-col items-start justify-center">
              <h5 className="text-red font-semibold">Protection at Risk</h5>
              <p className="text-[12px]">
                Poor drawings can leave critical features of your invention
                unprotected.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-5">
            <Image src={RISING} alt="protection" className="w-10" />
            <div className="flex flex-col items-start justify-center">
              <h5 className="text-red font-semibold">Rising Costs</h5>
              <p className="text-[12px]">
               Every revision cycle adds thousands to your prevent costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Link href={'/product'} className="p-2 text-white rounded bg-blue text-[13px]">
        Order Your Accurate Patent Drawings Now{" "}
      </Link>
    </main>
  );
};

export default About;
