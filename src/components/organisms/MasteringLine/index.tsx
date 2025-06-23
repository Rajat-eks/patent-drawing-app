'use client'
import React, { useState } from "react";
import MasteringGuideBook from "../../assets/img/mastering-guidebook.png";
import Banner from "../../assets/img/mastering-banner.jpg";

import { RequestForMastering } from "../../../services/contact/connectForSheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
}

const MasteringLine: React.FC<IndexProps> = (props) => {
  const navigate = useRouter();
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
      RequestForMastering(payload);
      navigate.push("/thank-you-contact");
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
              Mastering Line Quality in Patent Drawings: A Comprehensive Guide
            </h1>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-start w-full p-5 md:p-10 gap-8 md:gap-16">
        <section className="spcace-y-10 md:w-[70%]">
          <h1 className="py-2 text-2xl font-semibold text-black">
            Mastering Line Quality in Patent Drawings: A Comprehensive Guide
          </h1>
          <h3 className="text-black font-semibold py-2">
            Master the Critical Standards of Line Quality in Patent Drawings
          </h3>
          <section>
            <div className="space-y-4">
              <section>
                <p>
                  Are your patent drawings getting rejected due to line quality
                  issues? Don't let poor line standards derail your patent
                  applications and cost you valuable time and money. Our
                  comprehensive{" "}
                  <strong>Patent Drawing Line Quality Guide</strong> is your
                  definitive resource for meeting international patent office
                  requirements with confidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-6">
                  What's Inside This Essential Guide?
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    <strong>Complete International Coverage:</strong> Get
                    detailed line quality requirements from 8 major patent
                    offices including USPTO, WIPO, European Patent Office, Japan
                    Patent Office, Canadian IPO, German Patent Office, Taiwan
                    Patent Office, and Indian Patent Office.
                  </li>
                  <li>
                    <strong>Utility vs Design Patent Specifications:</strong>{" "}
                    Understand the crucial differences in line quality standards
                    between utility and design patent applications, ensuring
                    your drawings meet the right criteria every time.
                  </li>
                  <li>
                    <strong>Technical Precision Standards:</strong> Access exact
                    measurements, thickness requirements (0.3-0.8mm ranges),
                    material specifications, and digital format standards that
                    examiners expect to see.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-6">
                  Exclusive Patent Drawing Line Quality Examples
                </h2>
                <p className="mt-2">
                  <b>
                    {" "}
                    See the difference that professional line quality makes!
                  </b>{" "}
                  Our guide includes comprehensive visual examples that clearly
                  demonstrate:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    <b>Line Thickness Standards:</b> Perfect 0.4mm uniform lines
                    vs. inconsistent thickness variations
                  </li>
                  <li>
                    <b>Intersection Quality:</b> Clean, precise connections vs.
                    gaps and overlapping errors
                  </li>
                  <li>
                    <b>Shading & Hatching:</b> Proper 45° uniform hatching vs.
                    irregular, unprofessional patterns
                  </li>
                  <li>
                    <b>Digital Precision:</b> CAD-perfect geometry vs. common
                    hand-drawing mistakes
                  </li>
                  <li>
                    <b>Before & After Comparisons:</b> Real patent drawing
                    transformations showing exact improvements needed
                  </li>
                </ul>
              </section>
              <p>
                These <b>Patent Drawing Line Quality Examples</b> show you
                exactly what patent examiners approve versus what gets rejected,
                giving you the visual blueprint for success.
              </p>
              <section>
                <h2 className="text-2xl font-semibold mt-6">
                  Key Questions This Guide Answers:
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    What exact line thickness does each patent office require?
                  </li>
                  <li>
                    Which materials are acceptable vs. prohibited for patent
                    drawings?
                  </li>
                  <li>
                    How do line quality requirements differ between utility and
                    design patents?
                  </li>
                  <li>
                    What are the most common line quality mistakes that cause
                    rejections?
                  </li>
                  <li>
                    How can you ensure consistent line quality across multiple
                    drawing sheets?
                  </li>
                  <li>
                    What digital format specifications must you meet for
                    electronic filing?
                  </li>
                  <li>
                    How do correct vs. incorrect Patent Drawing Line Quality
                    Examples compare visually?
                  </li>
                  <li>
                    What specific techniques create professional-grade patent
                    drawings that pass examination?
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-6">
                  Professional Features Include:
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    <strong>Country-Specific Requirements:</strong> Detailed
                    breakdown for each major patent jurisdiction
                  </li>
                  <li>
                    <strong>Patent Drawing Line Quality Examples:</strong>{" "}
                    Visual comparisons showing correct vs. incorrect techniques
                  </li>
                  <li>
                    <strong>Common Mistakes Analysis:</strong> Learn from
                    others' errors with our comprehensive mistake prevention
                    guide
                  </li>
                  <li>
                    <strong>Best Practices:</strong> Professional tips from
                    experienced patent drawing specialists
                  </li>
                  <li>
                    <strong>Quality Control Checklists:</strong> Systematic
                    review procedures to ensure compliance
                  </li>
                  <li>
                    <strong>Tool Recommendations:</strong> Both traditional and
                    digital drawing solutions
                  </li>
                  <li>
                    <strong>Technical Specifications:</strong> Precise
                    measurements and material requirements
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-6">
                  Why Download Now?
                </h2>
                <p className="mt-2">
                  This guide consolidates years of expertise into a single,
                  accessible resource. Whether you're a patent attorney,
                  inventor, or draftsperson, this guide saves time and ensures
                  your drawings meet the highest international standards.
                </p>
                <p className="mt-2">
                  <strong>
                    The included Patent Drawing Line Quality Examples alone are
                    worth the download -{" "}
                  </strong>{" "}
                  see exactly what works and what doesn't with side-by-side
                  visual comparisons that eliminate guesswork.
                </p>
                <b className="pt-2">
                  Stop guessing about line quality requirements. Get the
                  definitive guide with visual examples trusted by patent
                  professionals worldwide.
                </b>
              </section>
            </div>
          </section>
          <section className="bg-gray-50  py-10">
            <h3 className="text-xl font-semibold">
              Submit your information here to download the Mastering Line
              Quality in Patent Drawings: A Comprehensive Guide
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
          className="md:w-[30%] flex flex-col items-center space-y-6 sticky top-40 self-start"
        >
          <div>
            <Image src={MasteringGuideBook} alt="ComplexDrawing" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default MasteringLine;
