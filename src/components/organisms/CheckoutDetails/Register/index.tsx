// "use client";
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { I_INITIALVALUES, validationSchema } from "./validation";
// import { RequestInvoice } from "../../../../services/product";
// import toast from "react-hot-toast";
// import { CreateOrder } from "../../../../services/razorpay";
// import { PaymentCompletionViaRazorpay } from "../../../../services/razorpay/paymentCompletion.service";
// import { onApproveOrder } from "../../../../services/paypal/approveOrder.service";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { CreateOrderPaypal } from "../../../../services/paypal/createOrder.service";
// import { REMOVEALLITEM } from "../../../../store";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";

// interface IndexProps {
//   // define props here
//   cart?: any;
//   totalAmount: number;
// }

// const Register: React.FC<IndexProps> = ({ cart, totalAmount }) => {
//   const navigate = useRouter();
//   const [buttonType, setButtonType] = useState<
//     "INVOICE" | "RAZORPAY" | "PAYPAL"
//   >();
//   const [razorPayValues, setRazorPayValues] = useState<any>();
//   const dispatch = useDispatch();



//   //PAYPAL
//   // Create order (calls backend)
//   const [orderID, setOrderID] = useState(null);
//   const generateOrder = async () => {
//     try {
//       const response = await CreateOrderPaypal(totalAmount); // Adjust amount as needed
//       const { id } = response.data;
//       setOrderID(id);
//       console.log("id in response", response);
//       return id;
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   // Capture order (calls backend)

//   /////

//   //PAYMENT SUCCESS
//   const paymentSuccessHandler = async (response: any, values: any) => {
//     try {
//       const payload = {
//         firstName: values?.firstName,
//         lastName: values?.lastName,
//         phone: values?.countryCode + values?.phone,
//         email: values?.email,
//         organization: values?.company,
//         country: values?.country,
//         youAre: values?.companyType,
//         orderDetails: {
//           orderAmount: totalAmount,
//           deliveryAmount: 0,
//           cart: [
//             ...cart?.map((item: any) => {
//               return {
//                 name: item?.name,
//                 quantity: item?.quantity,
//                 price: item?.price,
//                 docketNumber: item?.docketNumber,
//                 deliverySpeed: item?.deliverySpeed,
//                 outputFormat: item?.outputFormat,
//               };
//             }),
//           ],
//         },
//         paymentDetails: {
//           razorpayPaymentID: response?.razorpay_payment_id,
//           totalAmount,
//         },
//       };

//       const responseOfServer = await PaymentCompletionViaRazorpay(payload);
//       if (responseOfServer?.status == true) {
//         toast.success(responseOfServer?.message);
//       }
//     } catch (error) {
//       throw new Error("An error occured");
//     }
//   };
//   //HANDLE
//   const handlePayment = async (values: any, amount: number) => {
//     const orderResponse = await CreateOrder(amount); // GENERATE ID FROM SERVER
//     setButtonType("RAZORPAY");
//     if (orderResponse.status === true) {
//       const { order_id, currency, amount, razorpay_key } = orderResponse?.data;

//       // Razorpay options
//       const options = {
//         key: razorpay_key,
//         amount: amount * 100,
//         currency: currency,
//         name: "Patdraw",
//         description: "Payment for your order",
//         order_id,
//         handler: function (response: any) {
//           paymentSuccessHandler(response, values);
//         },
//         prefill: {
//           name: values?.firstName + " " + values?.lastName,
//           email: values?.email,
//           contact: values?.phone,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
//       if (window.Razorpay) {
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       } else {
//         console.error("Razorpay SDK not loaded.");
//       }
//     }
//   };

//   const formik = useFormik<I_INITIALVALUES>({
//     initialValues: INITIALVALUE,
//     validationSchema,
//     onSubmit: async (values) => {
//       if (buttonType === "INVOICE") {
//         try {
//           const payload = {
//             firstName: values?.firstName,
//             lastName: values?.lastName,
//             phone: values?.countryCode + values?.phone,
//             email: values?.email,
//             organization: values?.company,
//             country: values?.country,
//             youAre: values?.companyType,
//             orderDetails: {
//               orderAmount: totalAmount,
//               deliveryAmount: 0,
//               cart: [
//                 ...cart?.map((item: any) => {
//                   return {
//                     name: item?.name,
//                     quantity: item?.quantity,
//                     price: item?.price,
//                     docketNumber: item?.docketNumber,
//                     deliverySpeed: item?.deliverySpeed,
//                     outputFormat: item?.outputFormat,
//                   };
//                 }),
//               ],
//             },
//           };
//           const response = await RequestInvoice(payload);
//           if (response?.status == true) {
//             toast.success(response.message);
//             navigate.push("/thank-you-invoice");
//           }
//           console.log(response);
//           dispatch(REMOVEALLITEM(""));
//         } catch (error) {
//           throw new Error("Error when Reqest Invoice");
//         } finally {
//           //   setIsCheckout(false);
//         }
//       }
//       if (buttonType == "RAZORPAY") {
//         await handlePayment(values, totalAmount);
//       }
//       if (buttonType == "PAYPAL") {
//       }
//     },
//   });

//   return (
//     <main className="bg-white p-4">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           formik.handleSubmit();
//         }}
//       >
//         {/* Buttons for different API calls */}
//         <div className="flex flex-col gap-2">
//           <button
//             type="submit"
//             onClick={() => setButtonType("INVOICE")}
//             className="text-blue border-blue shadow-md rounded py-2 w-full border-[1px] font-semibold"
//           >
//             Request Invoice
//           </button>
//           <button
//             type="submit"
//             onClick={() => setButtonType("RAZORPAY")}
//             className="text-blue border-blue shadow-md rounded py-2 w-full border-[1px] font-semibold"
//           >
//             Pay via Razorpay
//           </button>

//           <PayPalScriptProvider
//             options={{
//               "client-id":
//                 "Acmy66oaHd--MKyOEbvEBW7aasjefCHaxfTrOTvY3odF2HBCh8oFLDY6dwuSDtYy9SWto5LNuI-sacIW",
//             }}
//           >
//             <PayPalButtons createOrder={generateOrder} onApprove={onApprove} />
//           </PayPalScriptProvider>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default Register;
