import axios from "axios";
import { resolve } from "path";
import React, { useState } from "react";
import { CreateOrder } from "../../../../services/razorpay";
import { PaymentCompletionViaRazorpay } from "../../../../services/razorpay/paymentCompletion.service";
import toast from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
    cart: any;
    register: any;
  }
}
const RazorpayButton = ({
  totalAmount,
  cart,
  register,
  setButtonType,
}: any) => {
  const [amount, setAmount] = useState<number>(1); // WE CHANGE totalAMount to 1 Rs for test

  //PAYMENT SUCCESS HANDLER
  const paymentSuccessHandler = async (response: any) => {
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
          deliveryAmount: 10,
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
          amount,
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

  // Handler to open Razorpay Checkout
  const handlePayment = async (e: any) => {
    e.preventDefault();
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
          paymentSuccessHandler(response);
        },
        prefill: {
          name: register?.firstName + " " + register?.lastName,
          email: register?.email,
          contact: register?.phone,
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

  return (
    <div className="payment-container pt-[10px]">
      <button
        type="submit"
        onClick={(e: any) => handlePayment(e)}
        className="px-4 py-2 w-full bg-blue-500 text-[17px] text-white bg-blue rounded-md"
      >
        Pay by Razorpay ₹ {amount}
      </button>
    </div>
  );
};

export default RazorpayButton;
