"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  RxArrowUp,
  CiLocationOn,
  FiPhone,
  MdOutlineEmail,
  CiLinkedin,
  FaFacebookF,
  FaXTwitter,
} from "../../assets/icons/index";
import Logo from "../../assets/logo/logo.jpg";
import SENDBUTTON from "../../assets/icons/SEND BUTTON.png";
import { ContactWithUs } from "../../../services/contact";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Footer: React.FC<IndexProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const navigate = useRouter();

  const [userDetails, setUserDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
  }>({
    name: "Subscriber",
    email: "",
    phone: "+1",
    organization: "",
    message: "Subscriber Request",
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
    <footer className="w-full ">
      <div className=" border-t-[1px]  bg-gradient-to-r from-[#E49698] to-[#798CB7] via-white flex flex-col md:flex-row items-center justify-between py-7 px-2 md:px-14">
        <div className="text-black flex flex-col gap-0 md:gap-1 items-start justify-start pb-3">
          <h2 className="md:text-xl font-poppins text-lg font-semibold">
            Get Updates From The Patent Drawings Company
          </h2>
          <p className="text-[14px] py-1 sm:py-0 ">
            W&#39;ll be with you to identify new IP opportunities.
          </p>
        </div>
        <div className=" w-full md:w-[34vw] flex items-center justify-between text-white p-3 rounded-full bg-white">
          <input
            type="text"
            onChange={onChangeHandler}
            name="email"
            value={userDetails.email}
            placeholder="Enter Your Email"
            className="outline-none  w-[90%]  text-black text-xl"
          />
          <button className="w-[10%] " onClick={submitHandler}>
            <Image src={SENDBUTTON} alt="SENDBUTTON" className="w-8" />
          </button>
        </div>
      </div>
      <div className="flex flex-col  pt-6 bg-white text-blue">
        <div className="grid grid-cols-1 sm:grid-cols-5 px-2 md:px-10">
          <div className="md:px-6 p flex flex-col justify-start space-y-4 ">
            <div className=" bg-white  flex justify-start items-start ">
              <Image src={Logo} alt="logo" className="p-1 w-32" />
            </div>
            <div className="text-[12px]  ">
              Powered by{" "}
              <a
                className="text-red  font-semibold"
                target="_blank"
                href="https://www.effectualservices.com/"
              >
                Effectual Knowledge Services pvt. ltd.
              </a>
            </div>
            <p className="text-[12px] font-[500] font-poppins text-black ">
              Effectual Services is an award-winning Intellectual Property (IP)
              management advisory & consulting firm.
            </p>
          </div>
          <div className=" pt-2 md:pt-0">
            <h3 className="text-[18px] font-[600] font-poppins uppercase text-red">
              Quick Links
            </h3>
            <ul className="text-[15px] py-4  space-y-2  font-poppins text-black">
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/our-company"}>About Us</Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/utility-patent-drawings"}>
                  Our Services
                </Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/leadership-team"}>Founders & Leadership</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[18px] font-[600] uppercase text-red">
              Our Services
            </h3>
            <ul className="text-[15px] py-4 font-poppins  space-y-2  text-black">
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/utility-patent-drawings"}>
                  Utility Patent Drawings
                </Link>
              </li>

              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/design-patent-drawings"}>
                  Design Patent Drawings
                </Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/objected-patent-drawings"}>
                  Objected Patent Drawings
                </Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/trademark-drawings"}>
                  Trademark Drawings
                </Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/chemical-structure-drawings"}>
                  Chemical Structure
                </Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/3d-modeling-drawings"}>3D modeling</Link>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red">
                <Link href={"/services/trial-graphic-services"}>
                  Trial Graphic Services
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col items-start md:items-center  ">
            <h3 className="text-[18px] font-[600] uppercase font-poppins text-red">
              JOIN US
            </h3>
            <div className="text-[15px] py-4  flex flex-row md:flex-col items-center   space-y-4  font-header text-black w-full gap-4 md:gap-0">
              <span className=" pt-3  md:pt-0">
                <a
                  href="https://www.linkedin.com/company/patdraw"
                  target="_blank"
                  className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
                >
                  <CiLinkedin size={20} />
                </a>
              </span>

              <a
                href="https://www.facebook.com/EffectualServices"
                target="_blank"
                className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com/effectualip?lang=en"
                target="_blank"
                className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="text-[18px] font-[600] uppercase font-poppins text-red">
              OFFICE
            </h3>
            <ul className="text-[15px] py-2 md:py-4 space-y-5 sm:space-y-8  md:space-y-10 font-poppins text-black">
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-start gap-2 ">
                <CiLocationOn size={25} />
                Suite-427,425 Broadhollow Road Melville | NY-11747
              </li>
              <li>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-start gap-2 ">
                    <FiPhone size={16} />
                    US -{" "}
                    <a
                      className="block"
                      href="tel:+1-972-256-8133"
                      aria-label="Call +1-972-256-8133"
                    >
                      +1-972-256-8133
                    </a>
                  </li>
                  <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-start gap-2 ">
                    <FiPhone size={16} />
                    US - <br />
                    <a
                      className="block"
                      href="tel:+14696661181"
                      aria-label="Call (469) 666-1181"
                    >
                      (469) 666-1181
                    </a>
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-center gap-2 ">
                <MdOutlineEmail size={16} />
                <a href="mailto:info@thepatentdrawings.com">
                  info@thepatentdrawings.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between min-w-full py-2 px-4 text-[12px] sm:text-[14px]  font-[500] bg-gradient-to-r from-[#E69D9E] via-white to-[#7D8FB9] text-black">
          <h6>@2025 Patdraw. All rights reserved.</h6>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-3">
              <li className="cursor-pointer text-center">
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              <li className="cursor-pointer text-center">
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li className="cursor-pointer text-center">
                <Link href={"/terms-condition"}>Terms & Condition</Link>
              </li>
              <li className="cursor-pointer text-center">
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li className="cursor-pointer text-center">
                <Link href={"/refund-policy"}>Refund Policy</Link>
              </li>
              <li className="cursor-pointer text-center">
                <Link href={"/blog"}>Article</Link>
              </li>
            </ul>
            <span
              onClick={scrollToTop}
              className="bg-red text-white  h-8 w-8 rounded-full  items-center justify-center cursor-pointer hidden sm:flex"
            >
              <RxArrowUp size={23} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
