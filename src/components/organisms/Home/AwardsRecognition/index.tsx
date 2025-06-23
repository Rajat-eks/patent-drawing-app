import React from "react";
import Award1 from "../../../assets/img/awards/EUCounsil.png";
import MultiCarousal from "../../../hoc/MultiCarousal";
import Award2 from "../../../assets/img/awards/ISO.png";
import Award3 from "../../../assets/img/awards/RED.png";
import Award4 from "../../../assets/img/awards/SocialTalks.png";
import Award5 from "../../../assets/img/awards/ahk.png";
import Award6 from "../../../assets/img/awards/badge-firm.png";
import Award8 from "../../../assets/img/awards/client-logo10.png";
import Award9 from "../../../assets/img/awards/client-logo11.png";
import Award10 from "../../../assets/img/awards/client-logo12.png";
import Heading from "../../../molecules/Heading";
import Image from "next/image";
// import Card from './Card'

interface AwardsRecognitionProps {
  // define props here
}

const AwardsRecognition: React.FC<AwardsRecognitionProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-center bg-white border-t-[1px] border-gray-400 font-poppins py-10">
      {/* <Heading name="   AWARDS & RECOGINITIONS" /> */}
      <h2 className="text-2xl font-bold">Awards & Recoginitions</h2>
      <section className="w-full px-10 py-1">
        <MultiCarousal items={6} arrows={true}>
          <div className="sm:w-[11rem] w-[18rem] p-2 h-[100px] m-2  rounded  ">
            <Image
              src={Award1}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg "
            />
          </div>
          <div className="sm:w-40 w-[18rem] p-2 h-[110px] m-2   rounded">
            <Image
              src={Award2}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award3}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award4}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award5}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award6}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>

          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award8}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award9}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
          <div className="sm:w-40 w-[16rem] p-2 h-[100px] m-2   rounded">
            <Image
              src={Award10}
              alt="Award1"
              className="aspect-[7/2] object-contain mix-blend-color-burn bg-white h-full px-0  rounded-lg"
            />
          </div>
        </MultiCarousal>
      </section>
    </main>
  );
};

export default AwardsRecognition;
