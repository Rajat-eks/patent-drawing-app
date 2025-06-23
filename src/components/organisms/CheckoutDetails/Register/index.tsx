"use client"
import React, { useState } from "react";
import { useFormik } from "formik";
import { I_INITIALVALUES, validationSchema } from "./validation";
import { getCountry, getCountryCode } from "../../../../utils/helper";
import { RequestInvoice } from "../../../../services/product";
import toast from "react-hot-toast";
import { CreateOrder } from "../../../../services/razorpay";
import { PaymentCompletionViaRazorpay } from "../../../../services/razorpay/paymentCompletion.service";
import { onApproveOrder } from "../../../../services/paypal/approveOrder.service";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CreateOrderPaypal } from "../../../../services/paypal/createOrder.service";
import { REMOVEALLITEM } from "../../../../store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface IndexProps {
  // define props here
  cart?: any;
  totalAmount: number;
}

const Register: React.FC<IndexProps> = ({ cart, totalAmount }) => {
  const navigate = useRouter();
  const [buttonType, setButtonType] = useState<
    "INVOICE" | "RAZORPAY" | "PAYPAL"
  >();
  const [razorPayValues, setRazorPayValues] = useState<any>();
  const dispatch = useDispatch();

  const INITIALVALUE = {
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "",
    email: "",
    company: "",
    country: "",
    companyType: "",
  };

  //PAYPAL
  // Create order (calls backend)
  const [orderID, setOrderID] = useState(null);
  const generateOrder = async () => {
    try {
      const response = await CreateOrderPaypal(totalAmount); // Adjust amount as needed
      const { id } = response.data;
      setOrderID(id);
      console.log("id in response", response);
      return id;
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // Capture order (calls backend)
  const onApprove = async (data: any) => {
    try {
      const response = await onApproveOrder({ orderID: orderID });
    } catch (error) {
      console.error("Error capturing payment:", error);
    }
  };
  /////

  //PAYMENT SUCCESS
  const paymentSuccessHandler = async (response: any, values: any) => {
    try {
      const payload = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        phone: values?.countryCode + values?.phone,
        email: values?.email,
        organization: values?.company,
        country: values?.country,
        youAre: values?.companyType,
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
        paymentDetails: {
          razorpayPaymentID: response?.razorpay_payment_id,
          totalAmount,
        },
      };

      const responseOfServer = await PaymentCompletionViaRazorpay(payload);
      if (responseOfServer?.status == true) {
        toast.success(responseOfServer?.message);
      }
    } catch (error) {
      throw new Error("An error occured");
    }
  };
  //HANDLE
  const handlePayment = async (values: any, amount: number) => {
    const orderResponse = await CreateOrder(amount); // GENERATE ID FROM SERVER
    setButtonType("RAZORPAY");
    if (orderResponse.status === true) {
      const { order_id, currency, amount, razorpay_key } = orderResponse?.data;

      // Razorpay options
      const options = {
        key: razorpay_key,
        amount: amount * 100,
        currency: currency,
        name: "Patdraw",
        description: "Payment for your order",
        order_id,
        handler: function (response: any) {
          paymentSuccessHandler(response, values);
        },
        prefill: {
          name: values?.firstName + " " + values?.lastName,
          email: values?.email,
          contact: values?.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded.");
      }
    }
  };

  const formik = useFormik<I_INITIALVALUES>({
    initialValues: INITIALVALUE,
    validationSchema,
    onSubmit: async (values) => {
      if (buttonType === "INVOICE") {
        try {
          const payload = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            phone: values?.countryCode + values?.phone,
            email: values?.email,
            organization: values?.company,
            country: values?.country,
            youAre: values?.companyType,
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
          if (response?.status == true) {
            toast.success(response.message);
            navigate.push("/thank-you-invoice");
          }
          console.log(response);
          dispatch(REMOVEALLITEM(""));
        } catch (error) {
          throw new Error("Error when Reqest Invoice");
        } finally {
          //   setIsCheckout(false);
        }
      }
      if (buttonType == "RAZORPAY") {
        await handlePayment(values, totalAmount);
      }
      if (buttonType == "PAYPAL") {
      }
    },
  });

  return (
    <main className="bg-white p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div>
          <label htmlFor="firstName" className="font-poppins text-[16px]">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName" className="font-poppins text-[16px]">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="font-poppins text-[16px]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="country" className="font-poppins text-[16px]">
            Country Code
          </label>
          <select
            id="countryCode"
            name="countryCode"
            className="p-[6px] border-[1px] w-full rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.countryCode}
          >
            <option value="" label="Select country code" disabled />
            {getCountryCode().map(({ label, value }:any) => {
              return <option value={value}>{label}</option>;
            })}
          </select>
          {formik.touched.countryCode && formik.errors.countryCode ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.countryCode}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="font-poppins text-[16px]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="font-poppins text-[16px]">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
          />
          {formik.touched.company && formik.errors.company ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.company}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="country" className="font-poppins text-[16px]">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="p-[6px] border-[1px] w-full rounded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="" label="Select a country" disabled />
            {getCountry()
              .sort((a:any, b:any) => {
                const priority = ["United States", "Australia", "India"];
                const indexA = priority.indexOf(a.value);
                const indexB = priority.indexOf(b.value);

                if (indexA === -1 && indexB === -1)
                  return a.label.localeCompare(b.label); // Alphabetical sorting for non-priority countries
                if (indexA === -1) return 1; // Move `b` (priority country) up
                if (indexB === -1) return -1; // Move `a` (priority country) up
                return indexA - indexB; // Maintain priority order
              })
              .map(({ label, value }:any) => {
                return <option value={value}>{label}</option>;
              })}
          </select>
          {formik.touched.country && formik.errors.country ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.country}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="companyType" className="font-poppins text-[16px]">
            Company Type
          </label>
          <input
            id="companyType"
            name="companyType"
            type="text"
            className=" p-[6px] border-[1px] w-full rounded "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyType}
          />
          {formik.touched.companyType && formik.errors.companyType ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.companyType}
            </div>
          ) : null}
        </div>

        {/* Buttons for different API calls */}
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            onClick={() => setButtonType("INVOICE")}
            className="text-blue border-blue shadow-md rounded py-2 w-full border-[1px] font-semibold"
          >
            Request Invoice
          </button>
          <button
            type="submit"
            onClick={() => setButtonType("RAZORPAY")}
            className="text-blue border-blue shadow-md rounded py-2 w-full border-[1px] font-semibold"
          >
            Pay via Razorpay
          </button>

          <PayPalScriptProvider
            options={{
              "client-id":
                "Acmy66oaHd--MKyOEbvEBW7aasjefCHaxfTrOTvY3odF2HBCh8oFLDY6dwuSDtYy9SWto5LNuI-sacIW",
            }}
          >
            <PayPalButtons createOrder={generateOrder} onApprove={onApprove} />
          </PayPalScriptProvider>
        </div>
      </form>
    </main>
  );
};

export default Register;
