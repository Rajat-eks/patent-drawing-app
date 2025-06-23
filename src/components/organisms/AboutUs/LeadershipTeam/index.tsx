import React from "react";
import {
  CiLinkedin,
  FaFacebookF,
  FaXTwitter,
} from "../../../assets/icons/index";
import AmitGoel from "../../../assets/img/founders/amit_goel.png";
import AmitAggrawal from "../../../assets/img/founders/amit-agg.png";
import Meetika from "../../../assets/img/founders/meetika-agg-n.png";

import Manoj from "../../../assets/img/founders/manoj-poonia-n.jpg";
import Ram from "../../../assets/img/founders/ram-tenneti-n.png";
import Nishant from "../../../assets/img/founders/nishant-singh-n.png";
import Gerhard from "../../../assets/img/founders/gerhard-horsch-n.png";
import Rakesh from "../../../assets/img/founders/rakesh-pandey-n.png";
import SEO from "../../../common/SEO";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const founders: any = [
  {
    name: "Dr Amit Goel",
    designation: "Director & Co-Founder",
    linkdin: "https://in.linkedin.com/in/dramitgoel",
    avatar: AmitGoel,
  },
  {
    name: "Amit Aggarwal",
    designation: "Co-Founder",
    linkdin:
      "https://www.linkedin.com/in/amit-aggarwal-386aa129/?originalSubdomain=in",
    avatar: AmitAggrawal,
  },
  {
    name: "Meetika Aggarwal",
    designation: "Director",
    linkdin: "https://www.linkedin.com/in/meetika-aggarwal-8273148/",
    avatar: Meetika,
  },
];

const leadershipTeam: any = [
  {
    name: "Ram Tenneti",
    designation: "Vice President",
    linkdin: "https://in.linkedin.com/in/ram-tenneti-6a91976",
    avatar: Ram,
  },
  {
    name: "Nishant Singh",
    designation: "Vice President",
    linkdin: "https://in.linkedin.com/in/nishant-singh-653966",
    avatar: Nishant,
  },
  {
    name: "Manoj Poonia",
    designation: "Vice President",
    linkdin: "https://in.linkedin.com/in/pooniamanoj",
    avatar: Manoj,
  },
  {
    name: "Dr. Gerhard Hörsch",
    designation: "Vice President",
    linkdin: "https://de.linkedin.com/in/dr-gerhard-hoersch-4157b41",
    avatar: Gerhard,
  },
  {
    name: "Rakesh Pandey",
    designation: "Vice President",
    linkdin: "https://in.linkedin.com/in/rakeshpandeyeffectual",
    avatar: Rakesh,
  },
];

const LeadershipTeam: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <SEO
        description="Our team is empowered by highly experienced individuals from the Technology, Management and Legal fraternities."
        keywords="Our Team, Leadership Team"
        title="Leadership Team | PatDraw"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Leadership Team
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="py-6">
        <p className="text-justify text-[15px] font-poppins">
          Our team is empowered by highly experienced individuals from the
          Technology, Management and Legal fraternities. They bring with them
          years of rich and diverse experience and have also worked on several
          emerging technology fields. This diverse and versatile experience of
          our team helps us in understanding the client requirements better.
        </p>
      </section>
      <section>
        <span className="flex flex-col justify-center items-center">
          <h1 className="text-center font-bold text-2xl text-blue">
            BOARD OF FOUNDERS
          </h1>
          <span className="border-b-4 border-red  w-20 text-center"></span>
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-8 sm:px-4 md:px-0 py-4">
          {founders?.map((item: any,index:number) => (
            <div key={index} className="border-2 flex flex-col items-center justify-center p-4 bg-gray-300 rounded-lg shadow-lg">
              <Image src={item?.avatar} alt="amit_goel" loading="lazy" />
              <h2 className="text-xl font-semibold">{item?.name}</h2>
              <h5 className="text-sm">{item.designation}</h5>
              <div className="flex items-center justify-around gap-6 pt-4">
                <a href={item?.linkdin} target="_blank">
                  {" "}
                  <CiLinkedin className="cursor-pointer h-7 w-7 bg-blue rounded-full text-white p-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <span className="flex flex-col justify-center items-center pt-6">
          <h1 className="text-center  text-2xl  font-bold  text-blue">
            EXECUTIVE LEADERSHIP
          </h1>
          <span className="border-b-4 border-red  w-20 text-center"></span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-8 sm:px-4 md:px-0 py-4">
          {leadershipTeam?.map((item: any,index:number) => (
            <div  key={index} className="border-2 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
              <Image src={item?.avatar} alt="amit_goel" />
              <h2 className="text-xl font-semibold uppercase">{item?.name}</h2>
              <h5 className="text-sm uppercase">{item.designation}</h5>
              <div className="flex items-center justify-around gap-6 pt-4">
                <a href={item?.linkdin} target="_blank">
                  {" "}
                  <CiLinkedin className="cursor-pointer h-7 w-7 bg-blue rounded-full text-white p-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LeadershipTeam;
