import React from "react";
import DummyImage from "../../../common/DummyImage";
import ChemicalBanner from "../../../assets/img/home/services/_final_Chemical Structure & Chemical Sequence Drawings_s1.png";

//IMAGES
import Sample1 from "../../../assets/img/Samples/Chemical Structure/CT1.jpg";
import Sample2 from "../../../assets/img/Samples/Chemical Structure/CT2.jpg";
import Sample3 from "../../../assets/img/Samples/Chemical Structure/CT3.jpg";
import Sample4 from "../../../assets/img/Samples/Chemical Structure/CT4.jpg";
import Sample5 from "../../../assets/img/Samples/Chemical Structure/CT5.jpg";
import Sample6 from "../../../assets/img/Samples/Chemical Structure/CT6.jpg";
import Sample7 from "../../../assets/img/Samples/Chemical Structure/CT7.jpg";
import Sample8 from "../../../assets/img/Samples/Chemical Structure/CT8.jpg";
import Sample9 from "../../../assets/img/Samples/Chemical Structure/CT9.jpg";
import Sample10 from "../../../assets/img/Samples/Chemical Structure/CT10.jpg";
import SEO from "../../../common/SEO";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}
export interface IDUMMYIMAGE {
  title: any;
  image: any;
}
export const dummyImage: IDUMMYIMAGE[] = [
  {
    image: Sample1,
    title: "Chemical Structure",
  },
  {
    image: Sample2,
    title: "Chemical Structure",
  },
  {
    image: Sample3,
    title: "Chemical Structure",
  },
  {
    image: Sample4,
    title: "Manual Hand Drill",
  },
  {
    image: Sample5,
    title: "Manual Hand Drill",
  },
  {
    image: Sample6,
    title: "Mechanical Gearbox",
  },
  {
    image: Sample7,
    title: "Mechanical Gearbox",
  },
  {
    image: Sample8,
    title: "Machenical Pump",
  },
  {
    image: Sample9,
    title: "Music Instrument",
  },
  {
    image: Sample10,
    title: "Robotic Arm",
  },
];
const ChemicalStructure: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <SEO
        description="Obtain precise chemical structure drawings with our professional chemical structure drawing services, delivering accurate and timely representations for your research and patents."
        keywords="Chemical Structure Drawings, Chemical Structure Drawing Services"
        title="Chemical Structure Drawings | Chemical Structure Drawing Services"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Chemical Structure
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex flex-col sm:flex-row w-full md:space-x-6">
        <div className="md:w-[65%]">
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            Effectual offers competent, accurate, and timely chemical structure
            drawing services at a high standard. Without sacrificing quality, we
            create a large number of drawings using a variety of software
            programs (AutoCAD, MS VISIO, CORAL DRAW, Adobe Illustrator, etc.).{" "}
            <br />
            <br />
            We have a committed group of experts from several technical fields
            working on different clients' deadlines.
          </p>
          <p className="py-3 text-pretty font-[400] text-[15px] font-poppins text-gray-900">
            Based on the client's supplied rough sketches, flowcharts, photos,
            etc., we create formal chemical structure drawings. These formal
            drawings meet all international PTO and PCT criteria.
          </p>
        </div>
        <div className="md:w-[35%]">
          <Image src={ChemicalBanner} alt="UtilityImage" />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
        <Link
          href="/product/chemical-structure-drawings"
          className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
        >
          Order Your Accurate Chemical Structure Drawings Now
        </Link>
      </div>
      <section className="border-[1px] rounded-b-lg mt-2">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Chemical Structure Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage
            data={dummyImage}
            link={"/product/chemical-structure-drawings"}
          />
        </div>
      </section>
    </main>
  );
};

export default ChemicalStructure;
