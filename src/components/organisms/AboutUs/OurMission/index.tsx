import React from "react";
import VISION from "../../../assets/icons/vision.png";
import MISSION from "../../../assets/icons/mission.png";
import VALUE from "../../../assets/img/value.jpg";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const OurMission: React.FC<IndexProps> = (props) => {
  return (
    <main className="flex flex-col gap-8">
 
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Mission & Vision
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10">
        <div className=" bg-gray-200 rounded-xl flex flex-col justify-between items-center p-4 shadow-md shadow-blue">
          <h4 className="text-xl text-red font-semibold">MISSION</h4>

          <div className="flex flex-col">
            <span className="border-2 w-10 border-red rounded "></span>
            <p className="text-sm w-full py-1 leading-5  text-center">
              We provide fast, high-quality, and affordable intellectual
              property services to law firms, attorneys, universities, and
              inventors worldwide, supporting them through every stage of a
              patent's lifecycle.
            </p>
          </div>
          <Image
            src={MISSION}
            alt="VALUE"
            loading="lazy"
            className="w-[80%] rounded-full"
          />
        </div>
        <div className=" bg-gray-200 rounded-xl flex flex-col justify-between items-center p-4 shadow-md shadow-red">
          <h4 className="text-xl text-blue font-semibold text-center">
            VISION
          </h4>
          <Image
            src={VISION}
            alt="VALUE"
            loading="lazy"
            className="w-[80%] h-[26vh] rounded-full object-cover"
          />

          <div className="flex flex-col ">
            <span className="border-2 w-10 border-blue rounded text-center"></span>
            <p className="text-sm w-full py-1 leading-5 text-center text-[15px] font-poppins">
              To be a global leader in delivering cutting-edge, confidential,
              and high-value intellectual property services that empower
              innovation.
            </p>
          </div>
        </div>
        <div className=" bg-gray-200 rounded-xl flex flex-col justify-between items-center p-4 shadow-md shadow-blue">
          <h4 className="text-xl text-red font-semibold text-center">GOAL</h4>

          <div className="flex flex-col">
            <span className="border-2 w-10 border-red rounded text-center"></span>
            <p className="text-sm w-full py-1 leading-5 text-center">
              Attract top global talent, foster innovation, and form
              partnerships to deliver exceptional value while exceeding client
              expectations in intellectual property protection.
            </p>
          </div>
          <Image
            src={VALUE}
            alt="VALUE"
            loading="lazy"
            className="w-[80%] rounded-full"
          />
        </div>
      </section>
      <section className="flex md:flex-row flex-col  justify-center items-center gap-5">
        <span className="text-justify font-poppins text-[15px]">
          Our goal is to offer top-notch services to individuals that consider
          and strive to incorporate innovation into their line of work. We
          constantly strive to offer services to individuals with unfathomable
          purpose at a price below expectation, and we are passionate supporters
          of intellectual property rights for an individual or an organization.
          In particular, our goal are:
          <ul className="pt-4 px-2 list-disc space-y-4 font-poppins text-[15px]">
            <li>
              To deliver fast, high-quality, and reasonably priced end-to-end
              intellectual property services to law firms, in-house attorneys,
              universities, and inventors worldwide.
            </li>
            <li>
              At every stage of a Patent's lifecycle—from conception to
              protection to commercialization—to guarantee improved delivery
              through partnerships with individuals and companies.
            </li>
            <li>
              To provide cutting-edge businesses with exceptional value while
              maintaining the highest standards of quality and confidentiality.
            </li>
            <li>
              Our aim is to draw in top talent from across the globe and
              establish a nurturing and stimulating atmosphere that offers many
              prospects for advancement.
            </li>
          </ul>
        </span>
      </section>
    </main>
  );
};

export default OurMission;
