"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADDITEM } from "../../../store";
import CartSample from "../../common/CartSample";
import { SERVICE_INTERFACE, serviceData } from "../../../data/servicesDetails";
import toast from "react-hot-toast";
import GetInTouch from "../GetInTouch";
import Contact from "./Contact";
import Reviews from "../NewHome/Reviews";
import FAQ from "./FAQ";
import { BsCheck2 } from "react-icons/bs";
import UNBEATABLE_PRICE from "../../assets/img/icons/unbeatable prices.png";
import QUALITY_GUARANTEE from "../../assets/img/icons/quality guranteed.png";
import UNLIMTED from "../../assets/img/icons/unlimited.png";
import PTO from "../../assets/img/icons/uspto_pto compliance.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import OrderForm from "./OrderForm";

interface ProductProps {
  // define props here
}

const prices: any = [
  {
    name: "Design Patent Drawings",
    price: 28,
    order: "/product/design-patent-drawings",
  },
  {
    name: "Trademark Drawings",
    price: 55,
    order: "/product/trademark-drawings",
  },

  {
    name: "Objected Patent Drawings",
    price: 28,
    order: "/product/objected-patent-drawings",
  },
];

const Product: React.FC<ProductProps> = (props) => {
  const { serviceId } = useParams();
  const [service, setService] = useState<SERVICE_INTERFACE>();
  const navigate = useRouter();

  const memoizedCallback = useCallback(() => {
    const data = serviceData.find(
      (item: SERVICE_INTERFACE) => item?.id == serviceId
    );
    if (data) {
      setService(data);
    } else {
      navigate.push("/not-found");
    }
  }, [serviceId]);

  useEffect(() => {
    memoizedCallback();
  }, [serviceId]);

  return (
    <main className=" p-4 md:p-10">
      <section className="flex flex-col md:flex-row justify-around  gap-10 md:gap-20">
        <section className=" w-full md:w-[40%] ">
          <CartSample samples={service?.samples || []} />
        </section>
        <section className=" w-full md:w-[60%]">
          <h1 className="text-2xl font-semibold text-red">{service?.name}</h1>
          {service?.price !== 0 && (
            <div className="flex items-center gap-3   px-2 py-4">
              <span className="line-through text-xl">
                ${service?.strikePrice}
              </span>
              <span className="text-3xl font-semibold ">
                ${service?.price}{" "}
                <span className="text-[16px] font-semibold text-gray-700">
                  per sheet
                </span>
              </span>
            </div>
          )}
          <p className="text-[14px] font-poppins pt-2">{service?.details}</p>
          <div className="flex items-center gap-4 pt-2">
            <h3 className="md:text-2xl text-xl font-semibold">
              Having a Query?{" "}
            </h3>
            <Link
              href={"/contact-us"}
              className="text-[12px] md:text-[15px] rounded-full py-1 md:py-2 px-2 md:px-5 bg-blue text-white text-center  border-[1px]"
            >
              Contact Us
            </Link>
          </div>
          {service?.price !== 0 ? (
            <section>
              <div>
                <h5 className="pt-4 mt-5 font-semibold border-t-[1px] border-blue text-[19px]">
                  {" "}
                  Submit your information to start your order/project
                </h5>
                <ul className=" pt-2">
                  <li className="text-[13px] ">
                    <Link
                      href={"/non-disclosure-agreement"}
                      target="_blank"
                      className="font-semibold hover:text-blue"
                    >
                      Click here &nbsp;
                    </Link>
                    to read Non Disclosure Agreement (NDA). You can also sign
                    our NDA while submitting the below information.
                  </li>
                </ul>
              </div>

              {/*Order Details */}
              <OrderForm serviceId={serviceId} service={service} />
            </section>
          ) : (
            <Contact service={service?.name} />
            // <h1>hello</h1>
          )}
        </section>
      </section>

      <section className="border-t-[2px]"></section>
      <section>
        {(service?.name === "Utility Patent Drawings" ||
          service?.name === "Design Patent Drawings" ||
          service?.name === "Objected Patent Drawings") && (
          <section>
            <main className="flex flex-col items-center justify-center py-10 font-poppins">
              <h2 className="text-2xl font-[600]">The PatDraw Advantage</h2>
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="border-[1px] rounded p-4 flex items-center gap-2">
                  <Image
                    src={UNBEATABLE_PRICE}
                    alt="UNBEATABLE_PRICE"
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-[16px] font-semibold text-blue">
                      Unbeatable Prices
                    </h4>
                    <span className="text-[13px] text-center">
                      Why Pay More When You Can Get the Best for Less?
                    </span>
                  </div>
                </div>
                <div className="border-[1px] rounded p-4 flex items-center gap-2">
                  <Image
                    src={QUALITY_GUARANTEE}
                    alt="QUALITY_GUARANTEE"
                    className="w-10"
                  />
                  <div>
                    <h4 className="text-[16px] font-semibold text-blue">
                      Quality Guaranteed
                    </h4>
                    <span className="text-[13px] text-center">
                      35-point quality checklist ensures perfection in every
                      drawing.
                    </span>
                  </div>
                </div>
                <div className="border-[1px] rounded p-4 flex items-center gap-2">
                  <Image src={PTO} alt="PTO" className="w-10" />
                  <div>
                    <h4 className="text-[16px] font-semibold text-blue">
                      USPTO/PTO Compliance
                    </h4>
                    <span className="text-[13px] text-center">
                      Every drawing meticulously crafted to meet all USPTO and
                      PCT requirements.
                    </span>
                  </div>
                </div>
                <div className="border-[1px] rounded p-4 flex items-center gap-2">
                  <Image src={UNLIMTED} alt="PTO" className="w-10" />
                  <div>
                    <h4 className="text-[16px] font-semibold text-blue">
                      Unlimited Revisions
                    </h4>
                    <span className="text-[13px] text-center">
                      Request as many changes as you need - your satisfaction is
                      guaranteed at no extra cost.
                    </span>
                  </div>
                </div>
              </section>
            </main>
            <div className="flex items-center justify-center py-6">
              <Link
                href={"/patent-drawing-samples"}
                className=" text-white rounded bg-blue text-[15px] py-3 px-10"
              >
                View Our Work Samples
              </Link>
            </div>
            <section className="flex flex-col items-center bg-customGreen">
              <h3 className="text-2xl font-semibold text-center  py-6 px-4">
                Discover Our Comprehensive Products
              </h3>
              <p className="text-[15px] text-center px-4 py-2">
                Professional-grade illustration services designed to address
                complex intellectual property requirements with accuracy,
                compliance, and meticulous attention to detail.
              </p>
              <section className="w-full grid md:grid-cols-3 grid-col-1 p-2 items-center  font-poppins ">
                {prices?.map((item: any) => {
                  return (
                    <div className="text-black bg-white border-[1px] p-4 rounded flex flex-col items-center justify-center gap-6 m-4 my-10 shadow-md">
                      <div className="flex flex-col items-center justify-center ">
                        <h3 className="text-xl font-[600] py-2 text-center">
                          {item?.name}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="flex flex-col items-center justify-center border-r-[2px] border-red p-4 text-blue">
                            <h2 className="text-3xl font-semibold">
                              ${item?.price}
                            </h2>
                            <span className="text-[13px]">per view</span>
                          </div>
                          <div className="text-[13px] ">
                            <ul>
                              <li className="flex items-center gap-1">
                                {" "}
                                <span className="font-semibold">
                                  <BsCheck2 color="red" size={16} />
                                </span>
                                USPTO Compliant.
                              </li>
                              <li className="flex items-center gap-1">
                                {" "}
                                <span className="font-semibold">
                                  <BsCheck2 color="red" size={16} />
                                </span>
                                Same-Day Delivery option.
                              </li>
                              <li className="flex items-center gap-1">
                                {" "}
                                <span className="font-semibold">
                                  <BsCheck2 color="red" size={16} />
                                </span>
                                Unlimited Revisions.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={item.order}
                        className="border-[1px] border-red rounded-md text-[13px] py-1 px-2"
                      >
                        Order Now
                      </Link>
                    </div>
                  );
                })}
              </section>
            </section>
            <Reviews />
            <FAQ serviceName={service?.name} />
          </section>
        )}
      </section>
      <GetInTouch />
    </main>
  );
};

export default Product;
