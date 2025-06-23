import React, { useState } from "react";
import About1 from "../../../assets/img/home/who_we_are.png";
import About2 from "../../../assets/img/about2.jpg";
import { FaArrowRight } from "../../../assets/icons";
import Heading from "../../../molecules/Heading";
import Image from "next/image";
import Link from "next/link";

interface AboutUsProps {
  // define props here
}

const AboutUs: React.FC<AboutUsProps> = (props) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <main className="w-full flex flex-col justify-center items-center  pt-8">
      <Heading name="WHO WE ARE" />
      <section className="bg-white  w-full px-4  sm:px-10 md:px-14">
        <div className=" items-center  mx-auto  flex flex-col   font-loto w-full">
          <h4 className=" leading-5 sm:leading-3 sm:text-[20px] md:text-[22px] tracking-tight font-bold text-gray-900 dark:text-white text-center">
            We believe every illustration should accurately and effectively
            depict the subject, according to our standards.
          </h4>
          <section className="flex flex-col md:flex-row  items-center justify-center gap-10">
            <div className="flex flex-col md:w-[60%]">
              <div className="font-light text-sm text-gray-500 sm:text-lg dark:text-gray-400 text-[14px]">
                <p className="mb-4"></p>
                <p className="text-justify text-[13px] md:text-[15px] leading-[24px] font-poppins text-black ">
                  For your patent applications, our staff of highly skilled
                  patent illustrators is available to deliver accurate and
                  superior drawings. Our illustration services include a wide
                  range, including trade dress, utility, design, and trademark
                  drawings, among others.
                </p>
                <p className="text-justify text-[13px] md:text-[15px] leading-[24px] font-poppins text-black pt-[7px]">
                  We are aware that all patent illustrations have to adhere to
                  the stringent regulations set forth by the USPTO. Our
                  draftsmen are equipped with industry knowledge and are aware
                  of the strict standards for formalizing patent drawings.
                </p>
                <p className="text-justify  text-[13px] md:text-[15px] leading-[24px] font-poppins text-black pt-[7px]">
                  A strong history of completing tasks consistently and
                  competently on schedule is necessary for compliance assurance
                  in patent illustrations. For more than ten years, our artists
                  have been creating formal drawings for world-class
                  corporations, lawyers, law/IP firms, legal departments, patent
                  brokerage firms, in-house counsels, and individual inventors.
                </p>
                <p className="text-justify text-[13px] md:text-[15px] leading-[24px] font-poppins text-black pt-[7px]">
                  We think that excellent patent drawings are essential for both
                  obtaining your rightful patent for your invention and for
                  effectively communicating your ideas to the Patent and
                  Trademark offices. They also serve as a polished record that
                  the public will be able to access for many years to come.
                </p>
                <div className="flex justify-center pt-4">
                  <Link
                    href={"/our-company"}
                    className="text-blue border-blue border-2  px-9 py-2 text-[18px] rounded-full font-semibold  flex gap-2 items-center shadow"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 w-[40%]">
              <Image
                className="w-full rounded-lg  object-cover hidden sm:block"
                src={About1}
                alt="office content 1"
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
