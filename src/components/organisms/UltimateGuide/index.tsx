'use client'
import React, { ReactNode, useState } from "react";
import Banner from "../../assets/img/ultimate-guide.jpg";
import ComplexDrawing from "../../assets/img/ultimate-guidebook.png";
import {  RequestForUltimateSheet } from "../../../services/contact/connectForSheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
}

const UltimateGuide: React.FC<IndexProps> = (props) => {
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

  //On Change Handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  //Send a Query
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const payload = {
        name: userDetails.name,
        email: userDetails?.email,
        phone: userDetails?.phone,
        message: "Country" + " : " + userDetails?.organization,
      };
      RequestForUltimateSheet(payload);
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
            className="  object-cover  h-full w-full "
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-blue/50 flex items-center">
            <h1 className="px-5 text-2xl md:text-4xl font-semibold text-white">
              Download Our Comprehensive Guide on Mastering Patent Drawings:
              "The Ultimate Guide to Patent Drawing Excellence: From Basics to
              USPTO Approval"
            </h1>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-start w-full p-5 md:p-10 gap-8 md:gap-16">
        <section>
          <div className="max-w-5xl mx-auto p-6 bg-gray-50">
            <section className="mb-8">
              <h3 className="text-xl font-semibold pb-3">
                Transform your patent applications with professional-quality
                drawings that secure your intellectual property
              </h3>
              <p className="text-[16px] ">
                Is your brilliant invention getting lost in translation? The
                difference between patent approval and rejection often comes
                down to one critical element: the quality of your patent
                drawings.
              </p>
              <p className="text-[16px] ">
                Our comprehensive guide, "Mastering Patent Drawings," gives you
                the insider knowledge that patent professionals use to create
                compelling, USPTO-compliant illustrations that strengthen patent
                applications and protect innovations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                What You'll Discover Inside:
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>USPTO Compliance Secrets: </strong> Learn the exact
                  specifications and requirements that examiners look for—and
                  how to meet them every time.
                </li>
                <li>
                  <strong>Step-by-Step Planning Framework: </strong>Learn the
                  precise margin measurements required by each patent
                  officeDiscover our proven system for identifying which views
                  and illustrations will most effectively communicate your
                  invention.
                </li>
                <li>
                  <strong>Common Pitfalls Exposed: </strong>
                  Avoid the top mistakes that lead to drawing rejections and
                  costly revisions.
                </li>
                <li>
                  <strong>Common Mistakes Section: </strong>
                  Avoid the frequent errors that lead to costly rejections
                </li>
                <li>
                  <strong>Expert Annotation Strategies: </strong>
                  Learn how to properly label and reference your drawings to
                  strengthen your claims
                </li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-2">
                This Guide Answers Your Most Pressing Questions:
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  "Which views do I need to include for my specific invention?"
                </li>
                <li>
                  "What software or tools will give me professional-quality
                  results?"
                </li>
                <li>
                  "How do I properly show internal mechanisms and assembly
                  relationships?"
                </li>
                <li>
                  "What line weights, shading techniques, and formatting will
                  ensure approval?"
                </li>
                <li>
                  "When should I create drawings myself vs. hiring a
                  professional illustrator?"
                </li>
              </ul>
            </section>

            {/* Repeat the above sections for each Patent Office (WIPO, EPO, etc.) */}

            <section className="mb-8 space-y-2">
              <p className="text-[16px] ">
                Whether you're a first-time inventor or experienced patent
                applicant, this 2,000+ word illustrated guide provides
                everything you need to create patent drawings that not only meet
                legal requirements but effectively communicate your innovation's
                unique value.
              </p>
              <p className="text-[16px]  font-semibold">
                Complete the form below to receive immediate access to this
                essential resource that could save you thousands in patent
                revisions and significantly increase your chances of approval.
              </p>
            </section>
          </div>
          <section className="bg-gray-50 px-10 py-10">
            <h3 className="text-xl font-semibold">
              Submit your information here to download the Ultimate Guide to
              Patent Drawing Excellence: From Basics to USPTO Approval
            </h3>
            <form
              onSubmit={submitHandler}
              action=""
              className="flex flex-col gap-5"
            >
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pt-6">
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
        </section>
        <section
          id="2"
          className="md:w-[40%] flex flex-col items-center space-y-6 sticky top-40 self-start"
        >
          <div>
            <Image src={ComplexDrawing} alt="ComplexDrawing" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default UltimateGuide;
