import React from "react";
import Sample1 from "../../../assets/img/sample/design-sample-10.jpg";
import Sample2 from "../../../assets/img/sample/design-sample-11.jpg";
import Sample3 from "../../../assets/img/sample/design-sample-12.jpg";
import Sample4 from "../../../assets/img/sample/design-sample-13.jpg";
import Sample5 from "../../../assets/img/sample/design-sample-14.jpg";
import Sample6 from "../../../assets/img/sample/design-sample-15.jpg";
import Sample7 from "../../../assets/img/sample/design-sample-16.jpg";
import Sample8 from "../../../assets/img/sample/design-sample-17.jpg";
import Sample9 from "../../../assets/img/sample/design-sample-18.jpg";
import Sample10 from "../../../assets/img/sample/design-sample-19.jpg";
import Sample11 from "../../../assets/img/sample/design-sample-2.jpg";
import Sample12 from "../../../assets/img/sample/design-sample-20.jpg";
import Sample13 from "../../../assets/img/sample/design-sample-3.jpg";
import Sample14 from "../../../assets/img/sample/design-sample-4.jpg";
import Sample15 from "../../../assets/img/sample/design-sample-5.jpg";
import DummyImage from "../../../common/DummyImage";
import Dmodeling from "../../../assets/img/home/services/3d modeling___s1__FINAL.png";
import SEO from "../../../common/SEO";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}
export interface IDUMMYIMAGE {
  title: string;
  image: string;
}
const dummyImage: IDUMMYIMAGE[] = [
  // {
  //   image: Sample1,
  //   title: "Chemical Structure",
  // },
  // {
  //   image: Sample2,
  //   title: "Chemical Structure",
  // },
  // {
  //   image: Sample3,
  //   title: "Chemical Structure",
  // },
  // {
  //   image: Sample4,
  //   title: "Manual Hand Drill",
  // },
  // {
  //   image: Sample5,
  //   title: "Manual Hand Drill",
  // },
  // {
  //   image: Sample6,
  //   title: "Mechanical Gearbox",
  // },
  // {
  //   image: Sample7,
  //   title: "Mechanical Gearbox",
  // },
  // {
  //   image: Sample8,
  //   title: "Machenical Pump",
  // },
  // {
  //   image: Sample9,
  //   title: "Music Instrument",
  // },
  // {
  //   image: Sample10,
  //   title: "Robotic Arm",
  // },
  // {
  //   image: Sample11,
  //   title: "AutoMobile",
  // },
  // {
  //   image: Sample12,
  //   title: "Shoes",
  // },
  // {
  //   image: Sample13,
  //   title: "Bio-Sequence",
  // },
  // {
  //   image: Sample14,
  //   title: "Chemical Structure",
  // },
  // {
  //   image: Sample15,
  //   title: "Chemical Structure",
  // },
];
const modeling: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <SEO
        description="Experience precise and detailed 3D modeling with our comprehensive 3D modeling services, delivering high-quality visuals for your projects promptly."
        keywords="3D Modeling, 3D Modeling Services"
        title="3D Modeling | 3D Modeling Services"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          3D Modeling
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex flex-col sm:flex-row w-full md:space-x-6">
        <div className="md:w-[65%]">
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            A well-made 3D model can occasionally be the most effective means of
            conveying a vision to a crowd. Your concept or product will make an
            instant impact on your audience when you present it with a lifelike
            3D illustration created by our team. <br /> <br /> Our crew has the
            ability to work with any kind of file format and can employ
            cutting-edge 3D illustration technologies to set your project out
            from the competition.
          </p>
          <p className="py-3 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            When producing prototypes or conveying your goods to internet
            shoppers, 3D renderings are a terrific tool. Furthermore, more
            satisfied customers are usually the result of superior product
            representations. Together, you and our skilled team of 3D artists
            will create a realistic and accurate 3D model that highlights the
            features of your product. <br />
            <br />A 3D floor plan visualization is a frequently requested
            service from our clients. A cost-effective method of visualizing
            construction projects is through 3D floor plan rendering, which
            displays both residential and commercial representations as well as
            the whole interior space layout and flow.
          </p>
        </div>
   
        <div className="md:w-[35%]">
          <Image src={Dmodeling} alt="UtilityImage" />
        </div>

      </section>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
          <Link
            href="/product/3d-modeling-drawings"
            className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
          >
            Order Your Accurate 3D modelling Drawings Now
          </Link>
        </div>
    </main>
  );
};

export default modeling;
