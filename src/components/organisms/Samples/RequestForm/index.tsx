"use client"
import React, { memo, useState } from "react";
import { ContactWithUs } from "../../../../services/contact";
import { useRouter } from "next/navigation";

interface IndexProps {}

const RequestForm: React.FC<IndexProps> = () => {
  const navigate = useRouter();
  const [data, setData] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
  }>({
    company: "",
    email: "",
    name: "",
    phone: "+1",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ContactWithUs({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        company: data?.company,
        message: "Request For Drawing Samples.",
      });
      navigate.push("/thank-you-contact");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col  justify-center items-center py-4 w-full">
      <h3 className="text-2xl font-semibold">Download More Free Samples</h3>
      <p className="text-[14px] pt-2 text-center">
        Fill out the form below to access our complete sample portfolio.
      </p>
      <section className="flex flex-col items-center w-[70%] py-3 sm:py-6">
        <form
          action=""
          onSubmit={submitHandler}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10  items-center  w-full"
        >
          <div className="flex flex-col gap-[2px] w-full">
            <label htmlFor="" className="text-[14px]">
              Full Name*
            </label>
            <input
              name="name"
              id="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              required
              className="bg-gray-300 p-2 rounded outline-blue w-full"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="" className="text-[14px]">
              Email Address*
            </label>
            <input
              name="email"
              id="email"
              onChange={onChangeHandler}
              value={data.email}
              type="text"
              required
              className="bg-gray-300 p-2 rounded outline-blue"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="" className="text-[14px]">
              Phone Number{" "}
              <small className="text-[11px]">(with country code)</small>*
            </label>
            <input
              name="phone"
              id="phone"
              onChange={onChangeHandler}
              value={data.phone}
              type="text"
              required
              className="bg-gray-300 p-2 rounded outline-blue"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="" className="text-[14px]">
              Company Name*
            </label>
            <input
              name="company"
              id="company"
              onChange={onChangeHandler}
              value={data.company}
              type="text"
              required
              className="bg-gray-300 p-2 rounded outline-blue"
            />
          </div>
          <div className="w-[80%] md:w-[60%]">
            <button
              type="submit"
              className="text-[14px] bg-red py-2 px-10 rounded text-white"
            >
              Submit & Get Access
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default memo(RequestForm);
