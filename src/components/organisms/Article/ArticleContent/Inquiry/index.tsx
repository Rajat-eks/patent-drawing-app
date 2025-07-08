'use client'
import React, { memo, ReactElement, useState } from "react";
import { ContactWithUs } from "../../../../../services/contact";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
}

const Inquiry: React.FC<IndexProps> = (props) => {
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
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <main className="bg-[#F5F7FC] border-[1px] rounded p-4">
      <h3 className="text-xl text-center font-semibold ">
        Download Free Samples
      </h3>
      <p className="text-[13px] text-center pb-2 border-b-[1px]">
        Fill out the form below to access our complete sample portfolio.
      </p>
      <form onSubmit={submitHandler} action="" className="space-y-2 p-1">
        <div>
          <label htmlFor="" className="text-gray-700 text-[14px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onChangeHandler}
            value={userDetails.name}
            className="p-[5px] bg-white outline-blue text-gray-700 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-700 text-[14px]">
            Email Id
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={onChangeHandler}
            value={userDetails.email}
            className="p-[5px] bg-white outline-blue text-gray-700 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-700 text-[14px]">
            Phone No.
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={onChangeHandler}
            value={userDetails.phone}
            className="p-[5px] bg-white outline-blue text-gray-700 w-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-700 text-[14px]">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            id="message"
            onChange={onChangeHandler}
            value={userDetails.message}
            className="p-[5px] bg-white outline-blue text-gray-700 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-red rounded-full text-[15px] text-white px-8 py-[11px]"
        >
          Submit & Get Access
        </button>
      </form>
    </main>
  );
};

export default memo(Inquiry);
