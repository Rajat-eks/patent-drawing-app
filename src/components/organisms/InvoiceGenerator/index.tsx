"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CreateOrder } from "../../../services/razorpay";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CreateOrderPaypal } from "../../../services/paypal/createOrder.service";
import { onApproveOrder } from "../../../services/paypal/approveOrder.service";
import useFetch from "@rajatv7865/usefetch";

const InvoiceGenerator: React.FC = () => {
  // const { error, loading, data, refatch } = useFetch();

  const [orderID, setOrderID] = useState(null);

  // Capture order (calls backend)
  const onApprove = async (data: any) => {
    try {
      const response = await onApproveOrder({ orderID: orderID });
    } catch (error) {
      console.error("Error capturing payment:", error);
    }
  };

  // Handler to open Razorpay Checkout
  const handlePayment = async (amount: number) => {
    const orderResponse = await CreateOrder(amount); // GENERATE ID FROM SERVER
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
          // paymentSuccessHandler(response);
        },
        prefill: {
          name: formik.values.name,
          email: formik.values.email,
          contact: formik.values.phone,
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      note: "",
      amount: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      amount: Yup.number()
        .required("Required")
        .positive("Must be a positive number"),
      phone: Yup.string()
        .required("Required")
        .matches(/^[0-9]{10}$/, "Must be a valid phone number"),
      note: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handlePayment(Number(values.amount));
      formik.resetForm();
    },
  });

  const amountRef = useRef(formik.values.amount);

  useEffect(() => {
    amountRef.current = formik.values.amount; // Always keeps latest value
  }, [formik.values.amount]);

  const generateOrder = async (amount: number) => {
    try {
      if (amount < 1) {
        alert("Amount should be greater than 0");
        return;
      }
      const response = await CreateOrderPaypal(amount); // Adjust amount as needed
      const { id } = response.data;
      setOrderID(id);
      return id;
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <div className="max-w-md md:mx-auto my-10 mx-6">
      <h1 className="text-2xl font-bold mb-5">Pay Invoice</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4 mb-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>{" "}
        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700"
          >
            Note
          </label>
          <textarea
            id="note"
            name="note"
            rows={4}
            cols={10}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.note}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          {formik.touched.note && formik.errors.note ? (
            <div className="text-red-500 text-sm">{formik.errors.note}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount (USD)
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            min={0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div className="text-red-500 text-sm">{formik.errors.amount}</div>
          ) : null}
        </div>
        <div className="space-y-3">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Pay by Razorpay USD {formik.values.amount || 0}
          </button>
        </div>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Acmy66oaHd--MKyOEbvEBW7aasjefCHaxfTrOTvY3odF2HBCh8oFLDY6dwuSDtYy9SWto5LNuI-sacIW",
          }}
        >
          <PayPalButtons
            createOrder={() => {
              return generateOrder(Number(amountRef.current)); // Pass formik value directly
            }}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </form>
    </div>
  );
};

export default InvoiceGenerator;
