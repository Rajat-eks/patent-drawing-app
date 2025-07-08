"use client";
import React, { useState } from "react";
import { IDUMMYIMAGE } from "../../organisms/Services/UtilityPatent";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface IndexProps {
  data: IDUMMYIMAGE[];
  link?: string;
  name?: string;
}

const index: React.FC<IndexProps> = ({ data, link }) => {
  const [selectedImage, setSelectedImage] = useState<IDUMMYIMAGE>(data[0]);
  const [index, setIndex] = useState<number>(0);
  const [isShow, setIsShow] = useState(false);

  const nextImageHandler = () => {
    setIndex(index + 1);
    if (data?.length - 1 > index && index >= 0) {
      setSelectedImage(data[index]);
    }
  };
  const prevImageHandler = () => {
    setIndex(index - 1);
    if (data?.length - 1 > index && index >= 0) {
      setSelectedImage(data[index]);
    }
  };

  const showToogleHandler = (id: number) => {
    setSelectedImage(data[id]);
    setIsShow(true);
  };

  const closeHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "closeWrapper") {
      setIsShow(false);
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.map(({ image, title }, index) => {
          return (
            <div
              key={index}
              onClick={() => showToogleHandler(index)}
              className="cursor-pointer group relative "
            >
              <Image
                className="object-fill  w-full h-40 max-w-full rounded-lg border-2"
                src={image}
                alt={title}
              />
              <div className="hidden group-hover:flex absolute top-0 left-0 inset-0 rounded-md bg-black bg-opacity-70 text-[18px] font-bold text-center  items-center justify-center">
                <h4>
                  {/* View */}
                  <GoEye size={25} color="white" />
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      {isShow && (
        <section className="bg-black bg-opacity-30 fixed inset-0 z-[100] flex justify-center items-center">
          <div
            id="closeWrapper"
            onClick={closeHandle}
            className="w-full md:p-6 fixed inset-0 z-[100] flex justify-center items-center"
          >
            <div className="flex  flex-col justify-center items-center mx-8 md:mx-0 rounded-2xl shadow-lg transform translate-x-3 py-5 md:py-8 bg-[#F1F1F3] ">
              <span
                onClick={closeHandle}
                id="closeWrapper"
                className="z-10 absolute top-2 right-4 cursor-pointer"
              >
                X
              </span>

              <div className="min-w-[50vw] max-w-[60vw]  h-[70vh] flex justify-center gap-5 items-center text-center text-[13px] text-gray-700 pt-2">
                <button onClick={prevImageHandler}>
                  <FaChevronLeft size={40} color="white" />
                </button>
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.title}
                  className=" p-8 max-w-full"
                />
                <div className="absolute top-10  left-10">
                  <Link
                    href={link || "/product"}
                    className="font-poppins text-[15px] border-[1px] rounded-full bg-blue text-white py-2 px-4 flex items-center gap-2"
                  >
                    Order Now <BsCart2 size={17} />
                  </Link>
                </div>
                <button onClick={nextImageHandler}>
                  <FaChevronRight size={40} color="white" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default index;
