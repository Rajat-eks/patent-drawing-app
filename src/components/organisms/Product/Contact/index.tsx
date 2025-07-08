"use client";
import React, { useState } from "react";
import { ContactWithUs } from "../../../../services/contact";
import { FiPhone } from "react-icons/fi";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { uploadFile } from "../../../../services/upload";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
  service: string;
}

const index: React.FC<IndexProps> = ({ service }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<{
    name: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
    files: {
      url: string;
      file: string;
    }[];
  }>({
    name: "",
    email: "",
    phone: "+1",
    organization: "",
    message: "",
    files: [],
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
        message: `
        We have received a query for - ${service}
        ${userDetails?.files.length > 0 ? "Files Attached" : ""}
        ${userDetails?.files.map((file: any) => file.url).join(", ")}
        ${userDetails?.organization} : ${userDetails?.message}
      `,
      };
      ContactWithUs(payload);
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
        files: [],
      });
    }
  };

  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files: any = e.target.files;
      const uploadedFiles = await uploadFile(files);
      if (uploadedFiles.status) {
        setUserDetails({
          ...userDetails,
          files: [
            ...userDetails.files,
            ...uploadedFiles.data.map((file: any) => ({
              url: file.url,
              file: file.file,
            })),
          ],
        });
      }
    } catch (error) {
      console.error(error);
      throw new Error("An Error Occured");
    }
  };
  const removeFileHandler = async (url: string) => {
    try {
      if (url) {
        setUserDetails({
          ...userDetails,
          files: [...userDetails.files.filter((file: any) => file.url !== url)],
        });
      }
    } catch (error) {
      console.error(error);
      throw new Error("An Error Occured");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-1 w-full p-4  col-span-2">
        <form
          action=""
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-6 "
        >
          <div className="flex flex-col  w-full col-span-2 sm:col-span-1">
            <label htmlFor="" className="px-1 text-[14px] font-[500] w-full">
              {" "}
              Name <span className="text-red font-bold">*</span>
            </label>
            <input
              type="text"
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
          <div className="flex flex-col  col-span-2 sm:col-span-1">
            <label htmlFor="" className="px-1 text-[14px] font-[500]">
              {" "}
              Files
            </label>
            <input
              type="file"
              className="border-[1px] outline-blue  rounded p-2"
              name="organization"
              onChange={onFileUpload}
              multiple
            />
          </div>
          <div className="flex flex-col  col-span-2 sm:col-span-1 items-center">
            <div>
              {userDetails?.files.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {Array.from(userDetails?.files).map((file, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Image
                        src={file?.url}
                        alt=""
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <p className="text-[12px]">{file.file}</p>
                      <button
                        className="text-red"
                        onClick={() => removeFileHandler(file.url)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No files uploaded</p>
              )}
            </div>
          </div>

          <div className="flex flex-col  col-span-2">
            <label htmlFor="" className="px-1 text-[14px] font-[500]">
              {" "}
              Message <span className="text-red font-bold">*</span>
            </label>
            <textarea
              rows={6}
              className="border-[1px] outline-blue  rounded p-2 "
              name="message"
              value={userDetails.message}
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <button className="bg-blue text-white w-full col-span-2 rounded-lg py-2  font-semibold">
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
