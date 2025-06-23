"use client"
import React, { useState } from "react";
import { ContactWithUs } from "../../../services/contact";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { submitQuery } from "../../services/query";
// import toast from "react-hot-toast";

const GetInTouch = () => {
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeHanle = (e: any) => {
    if (e.target.id === "closeWrapper") {
      setIsOpen(false);
    }
  };

  //Send a Query
  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      const payload = {
        name: data.name,
        email: data?.email,
        phone: data?.phone,
        message: data?.message,
      };
      const response = await ContactWithUs(payload);
      toast.success(response.message);
      navigate.push("/thank-you-contact");
    } catch (error) {
      throw new Error("An Error Occured");
    } finally {
      setData({
        email: "",
        message: "",
        name: "",
        phone: "",
      });
      setIsOpen(false);
    }
  };
  return (
    <div className=" ">
      <div className=" fixed z-20 right-[0] p-0  top-1/2 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` bg-customBlue px-4 py-1 md:py-2 font-semibold rounded text-[11px] md:text-[15px] text-white bg-red  rotate-90 m-[-38px] md:m-[-40px] animate-pulse`}
        >
          Get In Touch
        </button>
      </div>

      {isOpen && (
        <div
          onClick={(e) => closeHanle(e)}
          id="closeWrapper"
          className="w-full  bg-transparent bg-black fixed inset-0 z-[100] flex justify-center items-center  my-auto border-2 mr-4 md:mr-0"
        >
          <div className="flex flex-col justify-center items-center  rounded-2xl shadow-lg transform mx-auto my-auto translate-x-3 py-5 bg-[#F1F1F3] ">
            <span
              id="closeWrapper"
              onClick={(e) => closeHanle(e)}
              className="z-10 absolute top-2 right-4 cursor-pointer"
            >
              X
            </span>
            <h2 className="md:text-2xl text-xl font-bold">
              Request a Call Back!
            </h2>
            <p className=" w-auto md:w-[75%] text-center text-[13px] text-gray-700 pt-2">
              Thank you for your interest. Please fill out the form and we will
              contact you shortly.
            </p>
            <form
              action=""
              onSubmit={submitHandler}
              className="w-full grid grid-cols-1 gap-6 px-10 py-6"
            >
              <input
                type="text"
                onChange={changeHandler}
                value={data?.name}
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="text"
                required
                onChange={changeHandler}
                value={data?.email}
                name="email"
                placeholder="Your Email*"
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="text"
                onChange={changeHandler}
                value={data?.phone}
                name="phone"
                placeholder="Phone with country code*"
                required
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />
              <input
                type="text"
                onChange={changeHandler}
                value={data?.message}
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-2 text-[14px] rounded focus:outline-customBlue"
              />

              <button
                type="submit"
                className="py-2 rounded-[5px] bg-customBlue text-white w-full bg-red"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInTouch;
