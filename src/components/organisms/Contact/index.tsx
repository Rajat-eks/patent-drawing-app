'use client'
import React, { ChangeEvent, useState } from "react";
import ContactBanner from "../../assets/img/banner/contact-banner.png";
import { FiPhone, CiLocationOn, CiLinkedin } from "../../assets/icons/index";
import { ContactWithUs } from "../../../services/contact";
import GetInTouch from "../GetInTouch";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ContactProps {
  // define props here
}

const Contact: React.FC<ContactProps> = () => {
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
  const onChangeHandler = (e: any) => {
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
        message: userDetails?.organization + " : " + userDetails?.message,
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
    <main className="flex flex-col justify-between ">
  
      <section className="md:h-[36vh] sm:h-[30vh] h-[20vh]  w-full bg-blue relative">
        <Image
          src={ContactBanner}
          alt="contact_banner"
          className="w-full h-full object-cover relative "
        />
        <div className="absolute top-8 md:top-14 left-2 md:left-10 flex items-center justify-center flex-col">
          <h1 className=" text-2xl sm:text-4xl md:text-7xl font-extrabold">
            <span className="font-extrabold">CONTACT </span>
            <span className=" text-black px-2">US</span>
          </h1>

          <h3 className=" sm:text-xl md:text-2xl ">CONNECT WITH US TODAY!</h3>
        </div>
      </section>
      <section className=" bg-white  p-2 sm:p-8 md:p-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid gap-8 md:py-20 ">
            <div className="bg-[#EBF1F8] py-6  md:py-0  items-center  p-1  rounded shadow-lg text-gray-700 flex  gap-4 px-4">
              <span className="border-2 h-[60px] w-[60px] rounded-full flex items-center justify-center border-blue text-red">
                <FiPhone size={28} />
              </span>
              <div>
                <p className="text-[14px] font-[500] font-sans">
                  Call us directly at:
                </p>
                <h2 className="text-xl font-semibold">
                  <a href="tel:+1-972-256-8133">+1-972-256-8133</a>
                </h2>
                <p>
                  <a href="mailto:info@thepatentdrawings.com">
                    info@thepatentdrawings.com
                  </a>
                </p>
              </div>
            </div>
            <div className=" bg-[#EBF1F8] py-6  md:py-0   items-center   rounded shadow-lg text-gray-700 flex gap-4 px-4">
              <span className="border-2 h-[60px] w-[60px] rounded-full flex items-center justify-center border-blue text-red">
                <CiLocationOn size={28} />
              </span>
              <div>
                <p className="text-[14px] font-[500] font-sans">
                  Office Address:
                </p>
                <h2 className=" font-semibold">
                  Suite-427,425 Broadhollow Road
                  <br /> Melville | NY-11747
                </h2>
              </div>
            </div>
            <div className=" bg-[#EBF1F8] py-6  md:py-0   items-center justify-center  rounded shadow-lg text-gray-700 flex  gap-10">
              <span className="border-2 h-[40px] w-[40px] rounded-full flex items-center justify-center border-blue text-red">
                <a
                  href="https://www.linkedin.com/company/patdraw"
                  target="_blank"
                  className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
                >
                  <CiLinkedin size={20} />
                </a>
              </span>
              <span className="border-2 h-[40px] w-[40px] rounded-full flex items-center justify-center border-blue text-red">
                <a
                  href="https://www.facebook.com/EffectualServices"
                  target="_blank"
                  className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
                >
                  <FaFacebookF size={16} />
                </a>
              </span>
              <span className="border-2 h-[40px] w-[40px] rounded-full flex items-center justify-center border-blue text-red">
                <a
                  href="https://twitter.com/effectualip?lang=en"
                  target="_blank"
                  className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
                >
                  <FaXTwitter size={16} />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-full p-4 md:p-12 col-span-2">
            <h1 className="text-2xl font-semibold text-gray-800 uppercase">
              Schedule A Meeting
            </h1>
            <p className="text-[15px] font-poppins text-gray-700 text-center ">
              To schedule time to speak with one of our sales representives,
              complete the form, then click next to choose a date and time that
              works for you.
            </p>
            <form
              action=""
              onSubmit={submitHandler}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-6 "
            >
              <div className="flex flex-col  w-full col-span-2 sm:col-span-1">
                <label
                  htmlFor=""
                  className="px-1 text-[14px] font-[500] w-full"
                >
                  {" "}
                  Name <span className="text-red font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: John Doe"
                  name="name"
                  onChange={onChangeHandler}
                  value={userDetails.name}
                  className="border-[1px] outline-blue w-full  rounded p-2"
                />
              </div>
              <div className="flex flex-col w-full col-span-2 sm:col-span-1">
                <label htmlFor="" className="px-1 text-[14px] font-[500]">
                  {" "}
                  Email <span className="text-red font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: info@example.com"
                  className="border-[1px] outline-blue  rounded p-2"
                  name="email"
                  value={userDetails.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1 ">
                <label htmlFor="" className="px-1 text-[14px] font-[500]">
                  {" "}
                  Phone <span className="text-red font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: +91 00000-00000"
                  className="border-[1px] outline-blue  rounded p-2"
                  name="phone"
                  value={userDetails.phone}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex flex-col  col-span-2 sm:col-span-1">
                <label htmlFor="" className="px-1 text-[14px] font-[500]">
                  {" "}
                  Orgainization
                </label>
                <input
                  type="text"
                  placeholder="Ex: Microsoft"
                  className="border-[1px] outline-blue  rounded p-2"
                  name="organization"
                  value={userDetails.organization}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex flex-col  col-span-2">
                <label htmlFor="" className="px-1 text-[14px] font-[500]">
                  {" "}
                  Message <span className="text-red font-bold">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="border-[1px] outline-blue  rounded p-2 "
                  name="message"
                  value={userDetails.message}
                  onChange={(event) => onChangeHandler(event)}
                ></textarea>
              </div>
              <button className="bg-blue text-white w-full col-span-2 rounded-lg py-2  font-semibold">
                SCHEDULE A MEETING
              </button>
            </form>
          </div>
        </div>
      </section>
      <GetInTouch />
    </main>
  );
};

export default Contact;
