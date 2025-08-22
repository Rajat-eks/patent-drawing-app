import React from "react";
import Banner from "@/components/assets/img/2.png";
import Banner2 from "@/components/assets/img/4.png";
import Image from "next/image";
import SidebarBanner from "@/components/assets/img/S1_Promotional banner_Final.png";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <div className="pt-5 space-y-6">
      <section>
        <div className="h-[300px] relative">
          <Image
            src={Banner}
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" absolute top-50 left-14 right-0 bottom-0 text-white  space-y-2">
          <h3 className="text-3xl font-semibold">
            Patent Drawings Checklist: A Step-by-Step Complete Guide
          </h3>
          <p className="text-xl">
            Your Ultimate Guide to USPTO-Compliant Patent Drawings
          </p>
        </div>
      </section>
      <section className="px-6 flex items-start gap-8 h-[60vh]">
        <section className="w-[75%] text-[17px] space-y-4 pt-20">
          <p>
            Patent drawings serve as the visual foundation of your intellectual
            property protection strategy. Every line, dimension, and annotation
            plays a crucial role in defining your invention's scope and ensuring
            successful patent prosecution. Our comprehensive checklist
            eliminates the guesswork from patent drawing preparation.
          </p>
          <p>
            Drawing rejections cost inventors valuable time and money. USPTO
            examiners scrutinize every technical detail, from line weights to
            reference numbering systems. Common mistakes like improper margins,
            inconsistent projections, or unclear cross-sections can derail your
            application timeline and weaken your patent protection.
          </p>
        </section>
        <section className="w-[25%]">
          <Image src={SidebarBanner} alt="Sidebar Banner" />
        </section>
      </section>

      <section className="">
        <div className="h-[300px] relative">
          <Image
            src={Banner2}
            alt="Banner"
            className="h-full w-full object-cover "
          />
          {/* Overlay text inside the relative container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center px-8 text-white bg-black/60">
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold">
                Why This Checklist Matters
              </h3>
              <p className="text-xl">
                Professional patent drawings increase application success rates
                by 99%. Our detailed guidelines cover mechanical, electrical,
                chemical, and design patents, ensuring your drawings meet
                international standards from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 space-y-10">
        <div className="space-y-3">
          <h4 className="text-2xl  font-semibold">
            Who Should Read This Guide
          </h4>
          <ul className="space-y-1">
            <li>
              • Patent attorneys and agents seeking comprehensive drawing
              compliance standards to avoid USPTO rejections and streamline
              application processes
            </li>
            <li>
              • Inventors and entrepreneurs preparing their first patent
              applications who need clear, actionable guidelines for creating
              professional-quality drawings
            </li>
            <li>
              • Technical illustrators and CAD professionals working on patent
              documentation who require detailed specifications for line
              weights, views, and reference numbering systems
            </li>
            <li>
              • In-house IP teams and R&D departments establishing standardized
              drawing procedures to ensure consistent, compliant patent
              submissions across multiple inventors and projects
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-2xl  font-semibold">
            What You'll Gain From This Guide
          </h4>
          <ul className="space-y-1">
            <li>
              • A complete checklist covering USPTO technical requirements, from
              paper specifications to digital submission standards, ensuring
              your drawings meet all regulatory criteria
            </li>
            <li>
              • Proven strategies for organizing views, cross-sections, and
              detail drawings that effectively communicate your invention's
              novelty and technical features to patent examiners
            </li>
            <li>
              • Expert insights on reference character systems, lead line
              placement, and annotation best practices that prevent common
              rejection reasons and costly revision cycles
            </li>
            <li>
              • International filing considerations and jurisdiction-specific
              requirements for PCT, EPO, and other major patent offices to
              support global IP protection strategies
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-50  p-10">
        <h3 className="text-xl font-semibold">
          Submit your information here to download the Your Ultimate Guide to
          USPTO-Compliant Patent Drawings: A Comprehensive Guide
        </h3>
        <form
          // onSubmit={submitHandler}
          action=""
          className="flex flex-col gap-5"
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 pt-6">
            {" "}
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1 ">
                Full Name
              </label>
              <input
                type="text"
                className="p-2 h-full rounded border-[1px] border-gray-300"
                name="name"
                // value={userDetails.name}
                // onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Email Address
              </label>

              <input
                type="text"
                className="p-2 h-full rounded border-[1px] border-gray-300"
                name="email"
                // value={userDetails.email}
                // onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Phone Number
              </label>
              <input
                type="text"
                className="p-2 h-full rounded border-[1px] border-gray-300"
                name="phone"
                // value={userDetails.phone}
                // onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Country
              </label>
              <input
                type="text"
                className="p-2 h-full rounded border-[1px] border-gray-300"
                name="organization"
                // value={userDetails.organization}
                // onChange={onChangeHandler}
              />
            </div>
          </section>
          <button
            type="submit"
            className="bg-blue py-2 x-4 rounded-xl text-white w-40"
          >
            Download Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default page;
