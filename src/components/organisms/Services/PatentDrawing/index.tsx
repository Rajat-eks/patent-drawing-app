import React from "react";
import DummyImage from "../../../common/DummyImage";
import ObjectPatent from "../../../assets/img/home/services/object patent drawings_s1_FINAL.png";

import UtilityImage from "../../../assets/img/services/utility_patent.jpg";
import UtilityImage1 from "../../../assets/img/Samples/Utility Drawings/UD1.jpg";
import UtilityImage2 from "../../../assets/img/Samples/Utility Drawings/UD2.jpg";
import UtilityImage3 from "../../../assets/img/Samples/Utility Drawings/UD3.jpg";
import UtilityImage4 from "../../../assets/img/Samples/Utility Drawings/UD4.jpg";
import UtilityImage5 from "../../../assets/img/Samples/Utility Drawings/UD5.jpg";
import UtilityImage6 from "../../../assets/img/Samples/Utility Drawings/UD6.jpg";
import UtilityImage7 from "../../../assets/img/Samples/Utility Drawings/UD7.jpg";
import UtilityImage8 from "../../../assets/img/Samples/Utility Drawings/UD8.jpg";
import UtilityImage9 from "../../../assets/img/Samples/Utility Drawings/UD9.jpg";
import Image from "next/image";

interface IndexProps {
  // define props here
}
export interface IDUMMYIMAGE {
  title: any;
  image: any;
}
const dummyImage: IDUMMYIMAGE[] = [
  {
    image: UtilityImage1,
    title: "Test",
  },
  {
    image: UtilityImage2,
    title: "Test",
  },
  {
    image: UtilityImage3,
    title: "Test",
  },
  {
    image: UtilityImage4,
    title: "Test",
  },
  {
    image: UtilityImage5,
    title: "Test",
  },
  {
    image: UtilityImage6,
    title: "Test",
  },
  {
    image: UtilityImage7,
    title: "Test",
  },
  {
    image: UtilityImage8,
    title: "Test",
  },
  {
    image: UtilityImage9,
    title: "Test",
  },

];
const PatentDrawing: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <div className="flex flex-col gap-1">
        <h1 className="  text-xl text-blue font-[500]">Patent Drawings</h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex w-full space-x-6">
        <div className="w-[65%]">
          <p className="py-1 font-[400] text-[15px] text-gray-900">
            Effectual offers professional, accurate, and timely utility patent
            drawing services of the highest calibre. Without sacrificing
            quality, we create a large number of drawings using a variety of
            software programs (AutoCAD, MS VISIO, CORAL DRAW, Adobe Illustrator,
            etc.). We have a committed group of experts from several technical
            fields working on distinct client requirements within the deadline.
          </p>
          <p className="py-1 font-[400] text-[15px] text-gray-900">
            We use the client's rough sketches, flowcharts, photos, etc. to
            create official patent drawings. These formal drawings meet all
            international PTO and PCT criteria.
          </p>
          <p className="py-1 font-[400] text-[15px] text-gray-900">
            In the realm of patent documentation, drawings play a crucial role
            in ensuring comprehension. Well-executed drawings enhance the
            patent's clarity, a stipulation mandated by numerous Patent Offices
            worldwide. This significance is especially pronounced in technology
            fields like Mechanical Engineering, Life Sciences, and Biomedical
            Devices, where a patent may be unintelligible without accurately
            rendered illustrations.
          </p>
          <p className="py-1 font-[400] text-[15px] text-gray-900">
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
        <div className="w-[35%]">
          <Image src={ObjectPatent} alt="UtilityImage" />
        </div>
      </section>
      <section className="border-[1px] rounded-b-lg">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Design Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage data={dummyImage} link={'/product/objected-patent-drawing'}/>
        </div>
      </section>
    </main>
  );
};

export default PatentDrawing;
