import React from "react";
import Award1 from "../../../assets/img/awards/EUCounsil.png";
import Award2 from "../../../assets/img/awards/ISO.png";
import Award3 from "../../../assets/img/awards/RED.png";
import Award4 from "../../../assets/img/awards/SocialTalks.png";
import Award5 from "../../../assets/img/awards/ahk.png";
import Award6 from "../../../assets/img/awards/badge-firm.png";
import Award7 from "../../../assets/img/awards/client-logo10.png";
import Award8 from "../../../assets/img/awards/client-logo10.png";
import Award9 from "../../../assets/img/awards/client-logo11.png";
import Award10 from "../../../assets/img/awards/client-logo12.png";
import Award11 from "../../../assets/img/awards/client-logo4.png";
import Award12 from "../../../assets/img/awards/client-logo5.png";
import Award13 from "../../../assets/img/awards/client-logo6.png";
import Award14 from "../../../assets/img/awards/client-logo7.png";
import Award16 from "../../../assets/img/awards/client-logo8.png";
import Award17 from "../../../assets/img/awards/client-logo9.png";
import Award18 from "../../../assets/img/awards/globaFootprint.png";
import Award19 from "../../../assets/img/awards/iacc.png";
import Image from "next/image";

interface AwardsProps {
  // define props here
}

const Awards: React.FC<AwardsProps> = (props) => {
  return (
    <main>
    
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Awards & Recognitions
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="pt-6 font-normal">
        <p className="text-[15px] font-poppins">
          At our company, we’re proud to showcase the awards and recognitions
          that highlight our journey of excellence and innovation. Join us in
          celebrating these milestones, which reflect our unwavering dedication
          and the trust our clients place in us.
        </p>

        <section className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award1} alt="award1" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award2} alt="award2" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award3} alt="award3" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award4} alt="award4" loading="lazy" />
          </div>

          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award6} alt="award6" loading="lazy" />
          </div>

          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award8} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award9} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award10} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award11} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award12} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award13} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award14} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-md shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award16} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award17} alt="award7" loading="lazy" />
          </div>
          <div className="border-[1px] shadow-lg shadow-black  rounded-lg flex items-center justify-center p-2">
            <Image src={Award18} alt="award7" loading="lazy" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Awards;
