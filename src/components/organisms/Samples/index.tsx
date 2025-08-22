"use client";
import React, { useRef, useState } from "react";
import RequestForm from "./RequestForm";
import {
  dummyImage as utilityDrawing,
  IDUMMYIMAGE,
} from "../Services/UtilityPatent";
import { dummyImage as chemicalStructure } from "../Services/ChemicalStructure";
import { dummyImage as designPatent } from "../Services/DesignPatent";
import { PiGreaterThanBold } from "react-icons/pi";
import Banner from "../../assets/img/sampleBanner.png";
import Image from "next/image";
import Link from "next/link";

interface SamplesProps {
  // define props here
}

const renderImage = (item: IDUMMYIMAGE) => (
  <Image
    key={item.image}
    src={item.image}
    alt={item.title}
    loading="lazy"
    style={{ width: "100%", height: "200px" }}
    className="border-4 border-gray-400 rounded object-fit hover:cursor-zoom-out hover:scale-200 transition-transform duration-200 "
  />
);
const sample: IDUMMYIMAGE[] = [
  chemicalStructure[0],
  chemicalStructure[3],
  utilityDrawing[1],
  utilityDrawing[3],
  utilityDrawing[7],
  designPatent[0],
  designPatent[3],
  designPatent[5],
];
const Samples: React.FC<SamplesProps> = (props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const viewMoreHandler = () => {
    if (formRef.current) {
      const top =
        formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="pt-4 ">
        <div className=" w-full h-[40vh] relative">
          <Image
            src={Banner}
            alt="banner"
            className="  object-cover  h-full w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-blue/50"></div>
        </div>
        <div className="flex flex-col p-10 gap-4 absolute top-40 left-0 text-white">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[13px] text-red">
              Home
            </Link>
            <PiGreaterThanBold size={10} />
            <span className="text-[13px]">Work Samples</span>
          </div>
          <h1 className="text-3xl ">Our Work Samples</h1>
        </div>
      </section>
      <main className="py-20 flex flex-col items-center justify-center w-full">
        <section className="bg-gray-200  border-blue border-l-[6px] p-4 text-[14px] w-[80%]">
          <p>
            Download free sample patent drawings to see our quality standards
            and precision. We help inventors and attorneys visualize and protect
            intellectual property with USPTO-compliant illustrations.
          </p>
        </section>

        <section className="py-5 w-[90%] md:w-[80%] flex flex-col items-center justify-center gap-10">
          <h4 className="text-center text-2xl font-semibold ">
            Our Patent Drawing Samples
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {sample?.map(renderImage)}
          </div>
          <button
            onClick={viewMoreHandler}
            className="text-[14px] bg-red py-2 px-10 rounded text-white"
          >
            {"See More"}
          </button>
        </section>
        <section className="bg-gray-300 w-full flex flex-col items-center justify-center space-y-3 p-8 sm:p-12 md:p-16">
          <h3 className="text-2xl font-semibold">
            Expert Patent Illustrations
          </h3>
          <p className="text-[14px]">
            Professional USPTO-compliant illustration starting from $28 per
            sheet
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={"/product/utility-patent-drawings"}
              className="text-[14px] bg-red py-2 px-4 sm:px-10 rounded text-white"
            >
              Utility Patent Drawing @$28
            </Link>
            <Link
              href={"/product/design-patent-drawings"}
              className="text-[14px] bg-blue py-2 px-4 sm:px-10 rounded text-white"
            >
              Design Patent Drawing @$28
            </Link>
          </div>
        </section>
        <section ref={formRef} className="w-full">
          <RequestForm />
        </section>
      </main>
    </>
  );
};

export default Samples;
