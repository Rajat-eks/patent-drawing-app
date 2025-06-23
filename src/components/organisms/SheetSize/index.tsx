'use client'
import React, { useState } from "react";
import Banner from "../../assets/img/guide-banner.jpg";
import ComplexDrawing from "../../assets/img/guide.png";
import { RequestForSheet } from "../../../services/contact/connectForSheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
}

const SheetSizes: React.FC<IndexProps> = (props) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "+1",
    organization: "",
    message: "",
  });

  //On Chnage Handler
  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  //Send a Query
  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      const payload = {
        name: userDetails.name,
        email: userDetails?.email,
        phone: userDetails?.phone,
        message: "Country" + " : " + userDetails?.organization,
      };
      RequestForSheet(payload);
      router.push("/thank-you-contact");
    } catch (error) {
      throw new Error("An Error Occured");
    } finally {
      setUserDetails({
        email: "",
        message: "",
        name: "",
        organization: "",
        phone: "+91",
      });
    }
  };

  return (
    <main>
      <section className="pt-4 ">
        <div className=" w-full h-[40vh] relative">
          <Image
            src={Banner}
            alt="banner"
            className="  object-contain  h-full w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-blue/50 flex items-center">
            <h1 className="px-5 text-2xl md:text-4xl font-semibold text-white">
              Download the Comprehensive Guide to “Sheet Sizes” Specifically in
              Patent Drawings
            </h1>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-start w-full p-5 md:p-10 gap-8 md:gap-16">
        <section>
          <div className="max-w-5xl mx-auto p-6 bg-gray-50">
            <section className="mb-8">
              <p className="text-[16px] ">
                Are you preparing patent drawings for global filing? Don't let
                your application get rejected over technical details! Our
                comprehensive "Patent Drawing Sheet Size Guide" gives you the
                exact specifications you need for successful submissions across
                major patent offices worldwide.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                What This Guide Covers:
              </h2>
              <p className="text-[16px] ">
                This authoritative resource delivers precise sheet size
                requirements for patent drawings across eight major patent
                offices: USPTO, WIPO, European Patent Office, Canadian
                Intellectual Property Office, Japan Patent Office, German Patent
                Office, Taiwan Patent Office, and Indian Patent Office.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Features:</h2>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Complete Size Specifications: </strong> Get exact
                  measurements in both metric and imperial units for each
                  jurisdiction.
                </li>
                <li>
                  <strong>Detailed Margin Requirements: </strong>Learn the
                  precise margin measurements required by each patent office
                </li>
                <li>
                  <strong>Utility vs. Design Patent Comparison: </strong>
                  Understand the different requirements based on patent type
                </li>
                <li>
                  <strong>Common Mistakes Section: </strong>
                  Avoid the frequent errors that lead to costly rejections
                </li>
                <li>
                  <strong>Electronic Filing Guidelines: </strong>
                  Special considerations for digital submissions
                </li>
                <li>
                  <strong>Best Practices Checklist: </strong>
                  Ensure your drawings meet all formal requirements the first
                  time
                </li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-2">
                Questions This Guide Answers:
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  What are the precise sheet size requirements for major patent
                  offices worldwide?
                </li>
                <li>
                  How do margin requirements differ between patent offices?
                </li>
                <li>
                  Are there special considerations for design patents versus
                  utility patents?
                </li>
                <li>
                  What are the most common mistakes that lead to drawing
                  rejections?
                </li>
                <li>How should I prepare drawings for electronic filing?</li>
                <li>
                  What paper quality and technical specifications should I
                  follow?
                </li>
                <li>How should sheets be numbered and oriented properly?</li>
              </ul>
            </section>

            {/* Repeat the above sections for each Patent Office (WIPO, EPO, etc.) */}

            <section className="mb-8 space-y-2">
              <p className="text-[16px] ">
                Whether you're a patent attorney, a professional patent
                illustrator, an inventor preparing your own drawings, or a
                company expanding your intellectual property globally, this
                guide is an essential resource. Save time, reduce costs, and
                eliminate the frustration of drawing rejections with our
                expertly compiled reference.
              </p>
              <p className="text-[16px] ">
                Download our guide today and ensure your patent drawings meet
                the exact requirements of patent offices worldwide, increasing
                your chances of a smooth application process and successful
                patent protection.
              </p>
            </section>
          </div>
        </section>
        <section className="md:w-[40%] flex flex-col items-center space-y-6">
          <div>
            <Image src={ComplexDrawing} alt="ComplexDrawing" />
          </div>
        </section>
      </section>
      <section className="bg-[#F2F4EB] px-10 py-10">
        <h3 className="text-xl font-semibold">
          Submit your information here to download the Comprehensive Guide to
          “Sheet Sizes” Specifically in Patent Drawings
        </h3>
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col gap-5"
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {" "}
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1 ">
                Full Name
              </label>
              <input
                type="text"
                className="p-2 h-full rounded"
                name="name"
                value={userDetails.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Email Address
              </label>

              <input
                type="text"
                className="p-2 h-full rounded"
                name="email"
                value={userDetails.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Phone Number
              </label>
              <input
                type="text"
                className="p-2 h-full rounded"
                name="phone"
                value={userDetails.phone}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[14px] px-1">
                Country
              </label>
              <input
                type="text"
                className="p-2 h-full rounded"
                name="organization"
                value={userDetails.organization}
                onChange={onChangeHandler}
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
    </main>
  );
};

export default SheetSizes;
