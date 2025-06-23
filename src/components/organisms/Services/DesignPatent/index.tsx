import React from "react";
import DummyImage from "../../../common/DummyImage";
import DesignBanner from "../../../assets/img/home/services/DESIGN PATENT DRAWINGS_FINAL.png";

//IMAGES
import Sample1 from "../../../assets/img/Samples/Design Drawings/DD1.jpg";
import Sample2 from "../../../assets/img/Samples/Design Drawings/DD2.jpg";
import Sample3 from "../../../assets/img/Samples/Design Drawings/DD3.jpg";
import Sample4 from "../../../assets/img/Samples/Design Drawings/DD4.jpg";
import Sample5 from "../../../assets/img/Samples/Design Drawings/DD5.jpg";
import Sample6 from "../../../assets/img/Samples/Design Drawings/DD6.jpg";
import Sample7 from "../../../assets/img/Samples/Design Drawings/DD7.jpg";
import Sample8 from "../../../assets/img/Samples/Design Drawings/DD8.jpg";
import Sample9 from "../../../assets/img/Samples/Design Drawings/DD9.jpg";
import Sample10 from "../../../assets/img/Samples/Design Drawings/DD10.jpg";
import Sample11 from "../../../assets/img/Samples/Design Drawings/DD11.jpg";
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
  {
    image: Sample11,
    title: "AutoMobile",
  },
];
const DesignPatent: React.FC<IndexProps> = (props) => {
  return (
    <main className="px-2">
      <SEO
        description="Get expert design patent drawings with our reliable design patent drawings services, ensuring precision and timely delivery for your innovation."
        keywords="Design Patent Drawings, Design Patent Drawing Services"
        title="Design Patent Drawings | Design Patent Drawing Services"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Design Patent Drawings
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="py-2 flex flex-col  md:flex-row w-full md:space-x-6">
        <div className="md:w-[65%] w-full">
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            Only a product's outward appearance is protected by a design patent;
            its internal workings or design are not covered. It encompasses an
            object's distinctive ornamental components mainly and depends on
            succinct textual explanations. <br />
            <br /> Displaying the invention from all angles—front, side, top,
            bottom, and three dimensions—is essential. <br />
            <br />
            In order to be used specifically in design patent applications,
            design patent drawings are graphical depictions of a manufactured
            product's aesthetic design. They require detailed representations of
            the qualities, dimensions, textures, and curves of the materials. No
            detail can be omitted from these drawings; all features that are
            visible when the thing is being used must be clearly shown.
          </p>
        </div>
        <div className="sm:w-[35%]">
          <Image src={DesignBanner} alt="UtilityImage" />
        </div>
      </section>
      <div>
        <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
          Our team at Effectual Services has a great deal of experience creating
          illustrations for a variety of industries, including mechanical
          engineering, automotive, consumer durables, biotechnology,
          pharmaceuticals, information technology, computers,
          telecommunications, electronics, and general utilities.
        </p>
        <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
          With a flawless track record of error-free work, we often serve law
          firms and corporate legal departments with scrupulously correct,
          high-quality drawings using cutting-edge software like AutoCAD,
          TurboCAD, CorelDRAW, and Visio.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
              <Link
                href="/product/design-patent-drawings"
                className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
              >
                Order Your Accurate Design Patent Drawings Now
              </Link>
            </div>
      <section className="border-[1px] rounded-b-lg mt-2">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Design Patent Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage
            data={dummyImage}
            link={"/product/design-patent-drawings"}
          />
        </div>
      </section>
    </main>
  );
};

export default DesignPatent;
