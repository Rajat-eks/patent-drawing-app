import React, { useState } from "react";
import { getCountry, getCountryCode } from "../../../utils/helper";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import PaypalButton from "../Payment_Method/Paypal/PaypalButton";
import RazorpayButton from "../Payment_Method/Razorpay";
import { RequestInvoice } from "../../../services/product";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Register from "./Register";

interface IndexProps {
  setIsCheckout?: any;
  cart?: any;
  totalAmount: number;
}

const CheckoutDetails: React.FC<IndexProps> = ({
  setIsCheckout,
  totalAmount,
  cart,
}) => {
  const { item } = useSelector((state: any) => state.cart);
  const [isAlreadyUser, setIsAlreadyUser] = useState<boolean>(false);
  const [register, setRegister] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    countryCode: string;
    email: string;
    company: string;
    country: string;
    companyType: string;
  }>({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    company: "",
    country: "",
    companyType: "",
  });

  const [login, setLogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  //REQUEST A INVOICE
  const registerSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: register?.firstName,
        lastName: register?.lastName,
        phone: register?.countryCode + register?.phone,
        email: register?.email,
        organization: register?.company,
        country: register?.country,
        youAre: register?.companyType,
        orderDetails: {
          orderAmount: totalAmount,
          deliveryAmount: 0,
          cart: [
            ...cart?.map((item: any) => {
              return {
                name: item?.name,
                quantity: item?.quantity,
                price: item?.price,
                docketNumber: item?.docketNumber,
                deliverySpeed: item?.deliverySpeed,
                outputFormat: item?.outputFormat,
              };
            }),
          ],
        },
      };
      const response = await RequestInvoice(payload);
      if (response?.status == true) toast.success(response.message);
      console.log(response);
    } catch (error) {
      throw new Error("Error when Request Invoice");
    } finally {
      setIsCheckout(false);
    }
  };

  return (
    <main
      // onClick={(e) => closeHandle(e)} // Assuming you meant closeHandle
      id="closeWrapper"
      className="w-full md:p-12 fixed inset-0 z-[100] flex flex-col md:flex-items justify-center items-center bg-black bg-opacity-80"
    >
      <section className="bg-gray-200 border-2 w-full p-2 md:h-[85vh] rounded overflow-y-auto  ">
        <button
          onClick={() => setIsCheckout(false)}
          className="flex flex-row-reverse fixed right-10 md:right-20 font-semibold cursor-pointer text-red"
        >
          X
        </button>
        <section className="flex md:flex-row flex-col items-start justify-center h-full gap-10 ">
          <section className="md:w-[60%] w-full bg-white h-full p-2 rounded hidden md:block ">
            <button onClick={() => setIsCheckout(false)}>
              <IoIosArrowRoundBack size={28} />{" "}
            </button>
            <div className=" px-10 ">
              <div className="w-full">
                <div className="pt-8 ">
                  <ul className="w-full shadow-md shadow-blue rounded px-4 py-8">
                    <li className="flex items-center justify-between">
                      <span>Order Amount:</span>
                      <span className="font-semibold">${totalAmount}.00</span>
                    </li>

                    <li className="flex items-center justify-between pt-1">
                      <span>Expected Delivery :</span>
                      <span className="font-semibold">4-5 Days</span>
                    </li>
                    <li className="flex items-center justify-between border-t-[2px] border-red font-semibold mt-2">
                      <span>Total Amount:</span>
                      <span>${totalAmount}.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="border-[1px] bg-white px-6 py-6 md:w-[40%] w-full rounded">
            <Register cart={cart} totalAmount={totalAmount} />
          </section> */}
        </section>
      </section>
    </main>
  );
};

export default CheckoutDetails;
