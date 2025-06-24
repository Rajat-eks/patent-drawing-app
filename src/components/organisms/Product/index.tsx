"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDITEM } from "../../../store";
import CartSample from "../../common/CartSample";
import { SERVICE_INTERFACE, serviceData } from "../../../data/servicesDetails";
import toast from "react-hot-toast";
import GetInTouch from "../GetInTouch";
import SEO from "../../common/SEO";
import { uploadFile } from "../../../services/upload";
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

interface ProductProps {
  // define props here
}

const outputFormat: { label: string; value: string }[] = [
  {
    label: "PDF",
    value: "PDF",
  },
  {
    label: "VSD (Visio)",
    value: "VSD",
  },
  {
    label: "CDR",
    value: "CDR",
  },
  {
    label: "JPEG",
    value: "JPEG",
  },
  {
    label: "PNG",
    value: "PNG",
  },
  {
    label: "Docx (MS Word)",
    value: "Docx",
  },
  {
    label: "PPT (MS Powerpoint)",
    value: "PPT",
  },
  {
    label: "DWG",
    value: "DWG",
  },
  {
    label: "IGES",
    value: "IGES",
  },
  {
    label: "CAT",
    value: "CAT",
  },
  {
    label: "CAD",
    value: "CAD",
  },
  {
    label: "SLD",
    value: "SLD",
  },
  {
    label: "AI",
    value: "AI",
  },
  {
    label: "ASM",
    value: "ASM",
  },
  {
    label: "STL",
    value: "STL",
  },
  {
    label: "EASM",
    value: "EASM",
  },
  {
    label: "STEP",
    value: "STEP",
  },
  {
    label: "Others/More than 1",
    value: "OTHERS/MORE THAN 1",
  },
];

const patentDrawings: { label: string; value: string }[] = [
  {
    label: "US",
    value: "US",
  },
  {
    label: "EP",
    value: "EP",
  },
  {
    label: "WIPO",
    value: "WIPO",
  },
  {
    label: "CA",
    value: "CA",
  },
  {
    label: "UK",
    value: "UK",
  },
  {
    label: "JP",
    value: "JP",
  },
  {
    label: "KR",
    value: "KR",
  },
  {
    label: "AU",
    value: "AU",
  },
  {
    label: "DE",
    value: "DE",
  },
  {
    label: "IL",
    value: "IL",
  },
  {
    label: "SG",
    value: "SG",
  },
  {
    label: "Other",
    value: "Other",
  },
];

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { serviceId } = useParams();
  const { name } = useSelector((state: any) => state.auth);
  const [service, setService] = useState<SERVICE_INTERFACE>();
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [countOfItem, setCountOfItem] = useState<number>(1);
  const [isAgreementSigned, setIsAgreementSigned] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);

  //Handle form
  const [data, setData] = useState({
    isNDAPlace: "Yes",
    ndaDetails: {
      name: "",
      email: "",
      organization: "",
      address: "",
    },
    docketNumber: "",
    file: [],
    alreadySignedNDA: false,
    deliverySpeed: "Regular",
    outPutFormat: "PDF",
    patentOffice: "US",
    applicationFillingDate: "",
    additionalInfromation: "",
  });

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

  //ONCHANGE HANDLER
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //ADD ITEM IN CART
  const addItemHandler = () => {
    dispatch(
      ADDITEM({
        itemId: serviceId,
        quantity: countOfItem,
        ...data,
      })
    );
    navigate.push("/cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success("Item added Successfully!");
  };

  //UPLOAD FILE HANDLER
  const uploadFileHandler = async (files: FileList) => {
    try {
      const response = await uploadFile(files);
      setData({ ...data, file: response.data });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // This clears the file input
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <main className=" p-4 md:p-10">
      <SEO
        description={service?.seo.description || ""}
        keywords={service?.seo.keywords || ""}
        title={service?.seo.title || ""}
      />
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
                <h5 className="pt-4 mt-5 font-bold border-t-[1px] border-blue text-xl">
                  {" "}
                  Submit your information to start your order/project
                </h5>
                <ul className=" p-2">
                  <li className="text-[13px] ">
                    <a
                      href={"/non_disclosure_agreement.pdf"}
                      target="_blank"
                      onClick={() => setIsAgreementSigned(true)}
                      className="font-semibold hover:text-blue"
                    >
                      Click here &nbsp;
                    </a>
                    to read Non Disclosure Agreement (NDA). You can also sign
                    our NDA while submitting the below information.
                  </li>
                </ul>
              </div>
              <form action="" className="pt-3 font-poppins">
                <div className="grid  grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[500]">
                      NDA is in Place?
                    </label>
                    <select
                      name="isNDAPlace"
                      onChange={onChangeHandler}
                      value={data?.isNDAPlace}
                      className=" p-[6px] border-[1px] full md:w-60 rounded "
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[550]">
                      Docket Reference Number
                    </label>
                    <input
                      className=" p-[6px] border-[1px] md:w-60 rounded "
                      name="docketNumber"
                      onChange={onChangeHandler}
                      value={data?.docketNumber}
                      type="text"
                    />
                  </div>
                </div>
                {data?.isNDAPlace === "No" && (
                  <section
                    className=" p-2 grid grid-cols-1 md:grid-cols-2 my-5 rounded"
                    id="NDA_FORM"
                  >
                    <div className="flex flex-col justify-center-center">
                      <label className="p-1 text-gray-700 font-[550]">
                        Name
                      </label>
                      <input
                        className=" p-[6px] border-[1px] w-full md:w-60 rounded "
                        name="name"
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            ndaDetails: {
                              ...data.ndaDetails,
                              [e.target.name]: e.target.value,
                            },
                          })
                        }
                        value={data?.ndaDetails?.name}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col justify-center-center">
                      <label className="p-1 text-gray-700 font-[550]">
                        Email
                      </label>
                      <input
                        className=" p-[6px] border-[1px] w-full md:w-60 rounded "
                        name="email"
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            ndaDetails: {
                              ...data.ndaDetails,
                              [e.target.name]: e.target.value,
                            },
                          })
                        }
                        value={data?.ndaDetails?.email}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col justify-center-center">
                      <label className="p-1 text-gray-700 font-[550]">
                        Organization
                      </label>
                      <input
                        className=" p-[6px] border-[1px] w-full md:w-60 rounded "
                        name="organization"
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            ndaDetails: {
                              ...data.ndaDetails,
                              [e.target.name]: e.target.value,
                            },
                          })
                        }
                        value={data?.ndaDetails?.organization}
                        type="text"
                      />
                    </div>{" "}
                    <div className="flex flex-col justify-center-center">
                      <label className="p-1 text-gray-700 font-[550]">
                        Address
                      </label>
                      <input
                        className=" p-[6px] border-[1px] w-60 rounded "
                        name="address"
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            ndaDetails: {
                              ...data.ndaDetails,
                              [e.target.name]: e.target.value,
                            },
                          })
                        }
                        value={data?.ndaDetails?.address}
                        type="text"
                      />
                    </div>
                  </section>
                )}

                <div className="grid  grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[550]">
                      Upload Files
                    </label>
                    <input
                      className=" p-[6px] border-[1px] md:w-60 rounded "
                      ref={fileInputRef}
                      name="file"
                      accept="/*"
                      multiple={true}
                      onChange={(e: any) => uploadFileHandler(e.target.files)}
                      // value={data?.file[0]}
                      type="file"
                    />
                    <p className="text-[12px] font-thin p-1 text-red">
                      (max size: 50MB)
                    </p>
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[550]">
                      Already/Previously Signed NDA with us{" "}
                    </label>
                    <select
                      name="alreadySignedNDA"
                      onChange={onChangeHandler}
                      // value={data?.alreadySignedNDA}
                      id=""
                      className=" p-[6px] border-[1px] md:w-60 rounded "
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[550]">
                      Select Output Format{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="outPutFormat"
                      onChange={onChangeHandler}
                      value={data?.outPutFormat}
                      id=""
                      className=" p-[6px] border-[1px] md:w-60 rounded "
                    >
                      {outputFormat.map(({ label, value }) => {
                        return <option value={value}>{label}</option>;
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col justify-center-center">
                    <label className="p-1 text-gray-700 font-[550]">
                      Select the patent office for which drawings are needed*
                    </label>
                    <select
                      name="patentOffice"
                      onChange={onChangeHandler}
                      value={data?.patentOffice}
                      id=""
                      className=" p-[6px] border-[1px] md:w-60 rounded "
                    >
                      {patentDrawings.map(({ label, value }) => {
                        return <option value={value}>{label}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col justify-center-center">
                  <label className="p-1 text-gray-700 font-[550]">
                    Application filing date, if any
                  </label>
                  <textarea
                    className=" p-[6px] border-[1px] w-full rounded "
                    name="applicationFillingDate"
                    onChange={onChangeHandler}
                    value={data?.applicationFillingDate}
                    id=""
                    cols={6}
                    rows={4}
                  ></textarea>
                  <p className="text-[12px] font-thin p-1 text-red">
                    (This would help to keep the record and to ensure the
                    availability of the draftsperson.)
                  </p>
                </div>

                <div className="flex flex-col justify-center-center">
                  <label className="p-1 text-gray-700 font-[550]">
                    If you have Additional Information, please share it here.
                  </label>
                  <textarea
                    className=" p-[6px] border-[1px] w-full rounded "
                    name="additionalInfromation"
                    onChange={onChangeHandler}
                    value={data?.additionalInfromation}
                    id=""
                    cols={6}
                    rows={4}
                  ></textarea>
                  <p className="text-[12px] font-thin p-1 text-red">
                    ( Please enter the number of sheets you require and click
                    "Add to Cart." Please note that the cost of patent drawings
                    may vary with the final sheet count, as per Patent Office
                    standards.)
                  </p>
                </div>
              </form>
              <div className="flex items-center gap-10 py-4">
                <div className="flex items-center gap-2">
                  <button
                    className="text-3xl "
                    onClick={() => setCountOfItem(countOfItem - 1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={countOfItem}
                    disabled
                    onChange={(e: any) =>
                      setCountOfItem(Number(e.target.value))
                    }
                    className="py-[1px] px-[2px] text-center rounded border-2 w-10 border-blue font-semibold"
                  />
                  <button
                    className="text-2xl "
                    onClick={() => setCountOfItem(countOfItem + 1)}
                  >
                    +
                  </button>
                </div>
                {service?.price !== 0 ? (
                  <button
                    onClick={() => addItemHandler()}
                    // disabled={!isAgreementSigned ? true : false}
                    className="text-white py-[6px] font-semibold  text-[14px] bg-red rounded px-[10px] disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link
                    href={"/contact-us"}
                    className="text-white py-[6px] font-semibold  text-[14px] bg-red rounded px-[10px] disabled:cursor-not-allowed"
                  >
                    Order Now
                  </Link>
                )}
              </div>
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
