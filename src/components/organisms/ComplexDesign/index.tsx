'use client'
import React, { ChangeEvent, useState } from "react";
import Banner from "../../assets/img/sampleBanner.png";
import ComplexDrawing from "../../assets/img/complex-drawing.png";
import { ContactWithUs } from "../../../services/contact";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
}

const ComplexDesign: React.FC<IndexProps> = (props) => {
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

  //On Change Handler
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  //Send a Query
  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const payload = {
        name: userDetails.name,
        email: userDetails?.email,
        phone: userDetails?.phone,
        message: "Country" + " : " + userDetails?.organization,
      };
      ContactWithUs(payload);
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
            className="  object-cover  h-full w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-blue/50 flex items-center">
            <h1 className="px-5 text-4xl font-semibold text-white">
            Download the “Complex Patent Drawing Samples”
            </h1>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-start w-full p-5 md:p-10 gap-8 md:gap-16">
        <section className="md:w-[60%] text-justify">
          <p className="text-[15px]">
            Discover the art of creating intricate patent illustrations with our
            exclusive collection of complex patent drawing samples. These
            detailed examples showcase the expertise and precision required in
            patent artwork, covering a wide range of technology areas and
            industry domains.
          </p>
          <div className="py-8">
            <h2 className="text-lg font-semibold">
              Get Access to Our Comprehensive Samples
            </h2>
            <p className="text-[15px]">
              Our samples are derived from previously published patent
              applications, ensuring they are publicly available and compliant
              with all legal standards. By downloading these samples, you will
              gain insights into:
            </p>
            <ul className="py-2 space-y-2 list-disc pl-5">
              <li>
                <div className="flex flex-col items-start gap-1 text-[14px]">
                  <b>Utility and Design Patent Drawings:</b>
                  <p>Understand the differences and applications of each.</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-start gap-1 text-[14px]">
                  <b>Detailed Annotations and Reference Numbering:</b>
                  <p>Learn how to clearly identify parts and functions.</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col items-start gap-1 text-[14px]">
                  <b>Exploded and Sectional Views:</b>
                  <p>
                    Visualize assembly relationships and cross-sectional
                    details.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Download Free Samples Now</h2>
            <p className="text-[15px]">
              To access these valuable resources, simply fill out the form below
              with your contact information. Our complex patent drawing samples
              will be sent directly to your inbox, providing you with a wealth
              of knowledge and inspiration for your own patent applications.
            </p>
          </div>
        </section>
        <section className="md:w-[40%] flex flex-col items-center space-y-6">
          <div>
            <Image src={ComplexDrawing} alt="ComplexDrawing" />
          </div>
        </section>
      </section>
      <section className="bg-[#F2F4EB] px-10 py-10">
        <h3 className="text-xl font-semibold">Submit your information here to download the “Complex Patent Drawing Samples”</h3>
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

export default ComplexDesign;
