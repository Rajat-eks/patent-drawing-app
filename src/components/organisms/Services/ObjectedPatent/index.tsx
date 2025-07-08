import React from "react";
import DummyImage from "../../../common/DummyImage";
import ObjectPatent from "../../../assets/img/home/services/object patent drawings_s1_FINAL.png";

//IMAGE
import Sample1 from "../../../assets/img/Samples/Objected Patent Drawings/OPT1.jpg";
import Sample2 from "../../../assets/img/Samples/Objected Patent Drawings/OPT2.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}

export interface IDUMMYIMAGE {
  title: string;
  image: StaticImageData;
}
const dummyImage: IDUMMYIMAGE[] = [
  {
    image: Sample1,
    title: "Chemical Structure",
  },
  {
    image: Sample2,
    title: "Chemical Structure",
  },
];

const ObjectedPatent: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Objected Patent Drawings
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex flex-col md:flex-row  w-full md:space-x-6">
        <div className="md:w-[65%]">
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            Newly revised drawings must be supplied under the heading
            "REPLACEMENT SHEET" on the top margin during the period when
            responses to the USPTO regarding modifications or corrections of
            drawings are required. <br />
            <br />
            The purpose of the replacement drawings is to precisely fix any
            faults or errors that were included in the original patent
            application. The goal of this is to change the office action that
            the USPTO sent for utility, design patent, and trademark drawings
            across all domains.
          </p>
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            In accordance with our clients' requests, we make sure to offer the
            disputed patent drawings in a variety of forms.
          </p>
        </div>
        <div className="md:w-[35%]">
          <Image src={ObjectPatent} alt="Objected Patent" />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
        <Link
          href="/product/objected-patent-drawings"
          className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
        >
          Order Your Accurate Objected Patent Drawings Now
        </Link>
      </div>
      <section className="border-[1px] rounded-b-lg mt-2">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Objected Patent Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage
            data={dummyImage}
            link={"/product/objected-patent-drawing"}
          />
        </div>
      </section>
    </main>
  );
};

export default ObjectedPatent;
