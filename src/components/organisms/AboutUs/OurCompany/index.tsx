import React from "react";
import ComapanyImage from "../../../assets/logo/logo.jpg";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const OurCompany: React.FC<IndexProps> = (props) => {
  return (
    <>

      <main>
        <div className="flex flex-col gap-1">
          <h1 className="  text-2xl font-semibold text-blue font-poppins ">
            Our Company
          </h1>
          <span className="border-2 w-14 border-red"></span>
        </div>
        <section className="flex sm:flex-row flex-col items-start py-4 gap-2 ">
          <div className="md:w-[85%] w-full  md:order-1 order-2">
            <p className="text-justify font-poppins text-[15px]">
              With over two decades of experience, the Patent Drawings team has
              completed thousands of utility and design drawings for a wide
              range of clients worldwide. <br /> <br /> Our three main
              objectives are to serve you with professionalism, friendliness,
              and speed. We understand that every project has a deadline, and we
              work hard to meet or beat our clients' expectations by completing
              the drawings far ahead of schedule. <br />
            </p>
          </div>
          <div className="md:order-2 order-1">
            <Image
              src={ComapanyImage}
              alt="company_Image"
              className="rounded-2xl w-96"
              loading="lazy"
            />
          </div>
        </section>
        <p className="text-[15px] font-poppins">
          Our clients know they are getting quality and professionalism in every
          sheet we produce, and they trust us to be very experienced in drafting
          patent drawings.
        </p>
        <ul className="p-4 list-disc space-y-4  text-justify text-[15px] font-poppins">
          <li>
            Our clientele includes Attorneys, Law/IP Firms, Corporations, Legal
            Departments, Patent Brokerage Firms, In-house counsels and
            individual inventors across the globe.
          </li>
          <li>
            Increased efficiency, flexibility, and production are the outcomes
            of using our patent services. We work hard to be our clients'
            "one-stop" source for all of their intellectual property needs by
            offering essential support at every turn, from creating and
            safeguarding intellectual property to commercializing it.
          </li>
          <li>
            Our workflow is integrated with our Six Sigma process methodology,
            which maximizes productivity and optimizes client workflows. Our
            solutions approach has been thoughtfully designed to use our special
            blend of technology, deep industry understanding, and strategic
            insight.
          </li>
        </ul>
      </main>
    </>
  );
};

export default OurCompany;
