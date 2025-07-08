import React from "react";
import IMAGE3 from "../../../assets/img/whoWe/security.png";

import WHYCHOOSEUS from "../../../assets/img/home/why_choose_us.png";

import Accuracy from "../../../assets/img/home/services-icon/accuracy.png";
import Available from "../../../assets/img/home/services-icon/available 24_7.png";
import Experience from "../../../assets/img/home/services-icon/experience.png";
import FastAndQuick from "../../../assets/img/home/services-icon/fast & quick.png";
import Output from "../../../assets/img/home/services-icon/output.png";
import Price from "../../../assets/img/home/services-icon/price, cost efficiency.png";
import Proficiency from "../../../assets/img/home/services-icon/proficiency in solidworks.png";
import Quality from "../../../assets/img/home/services-icon/quality control.png";
import Biggest from "../../../assets/img/home/services-icon/we have one of the biggest.png";
import Heading from "../../../molecules/Heading";
import Image, { StaticImageData } from "next/image";

interface WhoWeAreProps {
  // define props here
}

interface CHOOSEUS {
  icon: StaticImageData;
  heading?: string;
  content?: string;
}

const chooseUs: CHOOSEUS[] = [
  {
    icon: Experience,
    heading: "Experience",
    content: `Highly experienced team of multi industry subject matter experts `,
  },
  {
    icon: Accuracy,
    heading: "Accuracy",
    content: `High accuracy and Consistency, minimizing objections from examiners`,
  },
  {
    icon: IMAGE3,
    heading: "Compliant",
    content: `We are Compliant with Federal import export laws regarding Intellectual Property`,
  },
  {
    icon: FastAndQuick,
    heading: "Fast & Quick turnaround",
    content: `We can respond to your requests for expedited patent drawings the same day.`,
  },
  {
    icon: Quality,
    heading: "Quality control ",
    content: `Our staff of highly skilled quality control specialists reviews our patent drawings several times`,
  },
  {
    icon: Available,
    heading: "Available 24/7",
    content: `Online Order and Upload, Review and Download anytime. `,
  },
  {
    icon: Price,
    heading: "Price, cost effective ",
    content: `We ensure that cost is never a barrier. We promise to never go above your allocated budget.`,
  },
  {
    icon: Biggest,
    heading: "We have one of the biggest",
    content: `In house teams of patent illustrators in the business, and we provide nearly limitless resources for each assignment.`,
  },
  {
    icon: Output,
    heading: "Output in any format that you require",
    content: `MS Visio, PDF, JPG, DOCX, PPTX, etc.—can be obtained from us.`,
  },
  // {
  //   icon: Proficiency,
  //   heading: "Our proficiency with SolidWorks",
  //   content: `MS Visio, AutoCAD, PDF, and images is extensive. We are even capable of producing excellent patent drawings from hand sketches.`,
  // },
];

const WhyChooseUs: React.FC<WhoWeAreProps> = (props) => {
  return (
    <div className="relative   from-[#FBFBE4] to-[#EBECF8] via-[#ffffff] bg-green bg-opacity-70 w-full">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Puts the video behind content
        }}
      >
        <source src={"/video/WHY CHOOSE US.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="flex flex-col justify-center items-center pt-6 ">
        <Heading name="WHY CHOOSE US" />
        {/* <h2 className='text-4xl font-semibold py-4 '>We Provide these Services</h2> */}
        <section className="flex px-4  md:px-12 gap-4">
          <div className=" items-center justify-center hidden sm:flex w-[40%]">
            <Image
              src={WHYCHOOSEUS}
              alt="WHYCHOOSEUS"
              className="h-[600px] object-fill rounded-xl "
            />
          </div>
          <section className="w-full my-6 grid   gap-12 sm:gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2 md:gap-6 space-y-5 md:space-y-1 ">
              {chooseUs?.map(
                ({ icon, heading, content }: CHOOSEUS, index: number) => {
                  return (
                    <div
                      className=" shadow-md border-gray-300 bg-white p-2 rounded-lg  flex flex-col items-center justify-center  group hover:bg-blue hover:text-white hover:border-0 group relative"
                      key={index}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        className=" bg-red  border-[1px] w-14 h-14 rounded-full absolute top-[-20px]"
                      />
                      <h3 className="text-[15px] text-center font-semibold text-blue group-hover:text-white pt-6">
                        {heading}
                      </h3>
                      <p className=" text-center pt-2 text-[14px]">{content}</p>
                    </div>
                  );
                }
              )}
            </div>
            <section className="flex items-center justify-center">
              <div className=" shadow-md border-gray-300 bg-white p-2 rounded-lg  flex flex-col items-center justify-center  group hover:bg-blue hover:text-white hover:border-0 group relative">
                <Image
                  src={Proficiency}
                  alt="icon"
                  className=" bg-red  border-[1px] w-14 h-14 rounded-full absolute top-[-20px]"
                />
                <h1 className="text-[15px] text-center font-semibold text-blue group-hover:text-white pt-6">
                  {"Our proficiency with SolidWorks"}
                </h1>
                <p className=" text-center pt-2 text-[14px]">{`MS Visio, AutoCAD, PDF, and images is extensive. We are even capable of producing excellent patent drawings from hand sketches.`}</p>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default WhyChooseUs;
