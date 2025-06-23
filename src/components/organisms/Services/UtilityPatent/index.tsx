import React from "react";
import DummyImage from "../../../common/DummyImage";
import UtilityPatentBanner from "../../../assets/img/home/services/UTILITY PATENT DRAWING_s1final.png";
import SEO from "../../../common/SEO";
import FAQ from "../../Product/FAQ";

//IMAGES
import Sample1 from "../../../assets/img/Samples/Utility Drawings/UD1.jpg";
import Sample2 from "../../../assets/img/Samples/Utility Drawings/UD2.jpg";
import Sample3 from "../../../assets/img/Samples/Utility Drawings/UD3.jpg";
import Sample4 from "../../../assets/img/Samples/Utility Drawings/UD4.jpg";
import Sample5 from "../../../assets/img/Samples/Utility Drawings/UD5.jpg";
import Sample6 from "../../../assets/img/Samples/Utility Drawings/UD6.jpg";
import Sample7 from "../../../assets/img/Samples/Utility Drawings/UD7.jpg";
import Sample8 from "../../../assets/img/Samples/Utility Drawings/UD8.jpg";
import Sample9 from "../../../assets/img/Samples/Utility Drawings/UD9.jpg";
import Reviews from "../../NewHome/Reviews";
import MultiCarousal from "../../../hoc/MultiCarousal";
import { BsCheck2 } from "react-icons/bs";
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
];

const UtilityPatent: React.FC<IndexProps> = (props) => {
  return (
    <main className="px-4">
      <SEO
        description="PatDraw (Effectual) offers professional, accurate, and timely utility patent drawing services of the highest calibre."
        keywords="Utility Patent Drawings, Utility Patent Drawing Services"
        title="Utility Patent Drawings | Utility Patent Drawing Services"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Utility Patent Drawings
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="py-4 flex flex-col md:flex-row w-full md:space-x-6">
        <div className="md:w-[65%] w-full">
          <p className="py-2 text-justify font-medium text-base font-poppins text-gray-900">
            Effectual offers professional, accurate, and timely utility patent
            drawing services of the highest calibre. Without sacrificing
            quality, we create a large number of drawings using a variety of
            software programs (AutoCAD, MS VISIO, CORAL DRAW, Adobe Illustrator,
            etc.). <br />
            <br /> We have a committed group of experts from several technical
            fields working on distinct client requirements within the deadline.
          </p>
          <p className="py-3 text-justify font-medium text-base font-poppins text-gray-900">
            We use the client's rough sketches, flowcharts, photos, etc. to
            create official patent drawings. These formal drawings meet all
            international PTO and PCT criteria. <br />
            <br />
            In the realm of patent documentation, drawings play a crucial role
            in ensuring comprehension. Well-executed drawings enhance the
            patent's clarity, a stipulation mandated by numerous Patent Offices
            worldwide.
          </p>
        </div>
        <div className="md:w-[35%] w-full mt-4 md:mt-0">
          <Image
            src={UtilityPatentBanner}
            loading="lazy"
            alt="UtilityImage"
            className="w-full h-auto"
          />
        </div>
      </section>

      <div>
        <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
          This significance is especially pronounced in technology fields like
          Mechanical Engineering, Life Sciences, and Biomedical Devices, where a
          patent may be unintelligible without accurately rendered
          illustrations.
        </p>
        <p className="py-1 text-justify w-full break-words whitespace-normal font-[400] text-[15px] font-poppins text-gray-900 ">
          At Effectual Services, our team possesses extensive expertise in
          crafting illustrations across a wide range of domains such as
          Biotechnology, Pharmaceuticals, Information Technology, Computers,
          Telecommunications, Electronics, Mechanical Engineering, Automotive,
          Consumer Durables, and General Utilities. We consistently provide
          meticulously accurate, high-quality drawings to both law firms and
          corporate legal departments, with an impeccable record of error-free
          work
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
        <Link
          href="/product/utility-patent-drawings"
          className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
        >
          Order Your Accurate Utility Patent Drawings Now
        </Link>
      </div>

      <section className="border-[1px] rounded-b-lg my-4">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] py-1 font-semibold">
          Utility Patent Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage
            data={dummyImage}
            link={"/product/utility-patent-drawings"}
          />
        </div>
      </section>
    </main>
  );
};

export default UtilityPatent;
