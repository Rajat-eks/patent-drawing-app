import React from "react";
import UtilityImage from "../../../assets/img/services/utility_patent.jpg";
import UtilityImage2 from "../../../assets/img/services/utility_patent.jpg";
import DummyImage from "../../../common/DummyImage";
import GraphicalServiceBanner from "../../../assets/img/home/services/s2_final.png";
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
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
  {
    image: UtilityImage,
    title: "Test",
  },
];
const GraphicService: React.FC<IndexProps> = (props) => {
  return (
    <main>
 
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Trial Graphic Services
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex flex-col sm:flex-row w-full md:space-x-6">
        <div className="md:w-[65%]">
          <h6 className="font-[400] text-[15px] font-poppins text-gray-900">
            Win your next court battle by putting forth a strong case supported
            by compelling images.
          </h6>
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            Our talented group of litigation graphics designers has a wealth of
            expertise assisting customers just like you in putting together a
            compelling case that is bolstered by visual aids. <br />
            <br /> Our litigation graphics, which include PowerPoint graphics,
            3D animations, scientific drawings, medical images, and general info
            graphics, are all made to be highly persuasive and simple to
            understand. <br />
            <br /> You will have a visual message that is persuasive in court
            with a superior trial graphic created by our experienced
            illustrators.
          </p>
        </div>

        <div className="md:w-[30%]">
          <Image src={GraphicalServiceBanner} alt="UtilityImage" />
        </div>
      </section>
      <section>
        {" "}
        <div className="pt-4 flex flex-col gap-3">
          <div className=" rounded p-4 hover:border-red border-[1px]">
            <h5 className="border-b-[2px] border-blue  w-32 font-semibold text-lg text-gray-800">
              Presentations-
            </h5>
            <p className="p-1 text-[15px] font-poppins">
              Simplifying and precisely outlining your case is key to a
              successful trial presentation. We have years of experience using
              PowerPoint slides and other presentation formats to provide
              clients with powerful visual aids throughout their trial.
            </p>
          </div>
          <div className="pt-2 border-[1px] rounded p-4 hover:border-red ">
            <h5 className="border-b-[2px] border-blue  w-[210px] font-semibold text-lg text-gray-800">
              Information Graphics-
            </h5>
            <p className="text-[15px] font-poppins">
              Simplifying and precisely outlining your case is key to a
              successful trial presentation. We have years of experience using
              PowerPoint slides and other presentation formats to provide
              clients with powerful visual aids throughout their trial.
            </p>
          </div>
          <div className="pt-2 border-[1px] rounded p-4 hover:border-red ">
            <h5 className="border-b-[2px] border-blue  w-48 font-semibold text-lg text-gray-800">
              Custom Illustrations-
            </h5>
            <p className="text-[15px] font-poppins">
              For use in impending legal proceedings, our team of professionals
              may develop and produce unique graphics. Medical graphics, which
              can assist disclose internal injuries, explain complicated
              procedures, or clarify other complex circumstances, are some
              instances of our previous work. Even while they could be crucial
              to your case, X-rays, MRIs, and CT scans can be challenging for
              juries to understand. Our graphical explanations remove all
              uncertainty from these images, facilitating universal
              understanding.
            </p>
          </div>
          <div className="pt-2 border-[1px] rounded p-4 hover:border-red">
            <h5 className="border-b-[2px] border-blue  w-24 font-semibold text-lg text-gray-800">
              Animations-
            </h5>
            <p className="text-[15px] font-poppins">
              Legal animations are among the most effective resources for
              bolstering your argument. They perform a great job of bolstering
              expert data and opinions, oral testimony, and other pieces of
              evidence. A medical operation, a slip and fall case, an industrial
              or environmental setting, a car accident, or a pedestrian accident
              can all be accurately shown in a high-quality animation. Together,
              you and our team will create a precise, orderly, and visually
              appealing courtroom animation to showcase your case.
            </p>
          </div>
        </div>
      </section>
         <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
                <Link
                  href="/product/trial-graphic-services"
                  className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
                >
                  Get Started
                </Link>
              </div>
      {/* <section className="border-[1px] rounded-b-lg pt-4">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Design Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage data={dummyImage} />
        </div>
      </section> */}
    </main>
  );
};

export default GraphicService;
