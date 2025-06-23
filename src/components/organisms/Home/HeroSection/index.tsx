import React from "react";
import Bnaner1 from "../../../assets/img/banner/Design Patent Drawing.png";
import Bnaner3 from "../../../assets/img/banner/Utility Patent Drawing.png";
import Bnaner2 from "../../../assets/img/banner/trademark patent  Drawing.png";
import MultiCarousal from "../../../hoc/MultiCarousal";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const index: React.FC<IndexProps> = (props) => {
  return (
    <main className="p-0 m-0 w-full ">
      {/* <span className="w-full h-[2px] bg-gradient-to-r from-red via-white to-blue block"></span> */}
      <MultiCarousal items={1} dots={true} arrows={true}>
        <section className="w-full ">
          <div className="md:h-[55vh] sm:h-[40vh] h-[20vh]  overflow-hidden">
            <Image
              src={Bnaner3}
              loading="lazy"
              alt="Utility Patent Drawing"
              className="h-full w-full  md:object-cover  "
            />
          </div>
        </section>
        <section className="w-full ">
          <div className="md:h-[54vh] sm:h-[40vh] h-[20vh]  overflow-hidden">
            <Image
              src={Bnaner1}
              loading="lazy"
              alt="Design Patent Drawing"
              className="h-full w-full md:object-cover "
            />
          </div>
        </section>
        <section className="w-full ">
          <div className="md:h-[56vh] sm:h-[40vh] h-[20vh]  overflow-hidden">
            <Image
              src={Bnaner2}
              loading="lazy"
              alt="Trademark Patent Drawing"
              className="h-full w-full md:object-cover"
            />
          </div>
        </section>
      </MultiCarousal>
      {/* <span className="w-full h-[2px] bg-gradient-to-r from-blue via-white to-red block"></span> */}
    </main>
  );
};

export default index;
