"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceData } from "../../../data/servicesDetails";
import {
  ADDQUANTITY,
  REMOVEALLITEM,
  REMOVEITEM,
  SUBQUANTITY,
} from "../../../store";
import EmptyCart from "../../assets/img/empty-cart.png";
import { RiDeleteBin2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { RequestInvoice } from "../../../services/product";
import GetInTouch from "../GetInTouch";
import Image from "next/image";
import Link from "next/link";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { onApproveOrder } from "@/services/paypal/approveOrder.service";
import { CreateOrderPaypal } from "@/services/paypal/createOrder.service";
import { useRouter } from "next/navigation";
import { CreateOrder } from "@/services/razorpay";
import { PaymentCompletionViaRazorpay } from "@/services/razorpay/paymentCompletion.service";

interface IndexProps {
  // define props here
}

const Cart: React.FC<IndexProps> = () => {
  const navigate = useRouter();
  const { item } = useSelector(
    (state: { cart: { item: { [key: string]: any }[] } }) => state.cart
  );
  const [cart, setCart] = useState<{ [key: string]: any }[]>([]);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [buttonType, setButtonType] = useState<
    "INVOICE" | "RAZORPAY" | "PAYPAL"
  >();
  const [razorPayValues, setRazorPayValues] = useState<{
    orderId: string | null;
    paymentId: string | null;
  } | null>(null);

  useEffect(() => {
    // Create a Map for item quantities
    const quantityMapB = new Map(
      item.map((item: any) => [item.itemId, item.quantity])
    );

    // Filter and map the common items between serviceData and item
    const commonItemsWithQuantities = serviceData
      .filter((itemA: { id: string }) => quantityMapB.has(itemA.id))
      .map((itemA: any) => {
        const matchedItem = item?.find(
          (items: any) => items.itemId == itemA.id
        );
        return {
          id: itemA.id,
          name: itemA.name,
          outputFormat: matchedItem?.format,
          docketReferenceNumber: matchedItem?.docket,
          deliverySpeed: matchedItem?.deliverySpeed,
          quantity: quantityMapB.get(itemA.id),
          price: itemA?.price ?? 0,
          strikePrice: itemA?.strikePrice ?? 0,
          avatar: itemA?.samples?.[0] ?? "",
        };
      });
    setCart(commonItemsWithQuantities);
  }, [item]);

  const totalAmount: number = useMemo(() => {
    const calculations = cart?.reduce(
      (previousValue: any, currentValue: any) =>
        previousValue +
        Number(currentValue.price) * Number(currentValue.quantity),
      0
    );
    return calculations;
  }, [cart]);

  const removeItemHandler = (id: number) => {
    dispatch(REMOVEITEM(id));
    toast.success("Item removed Successfully");
  };

  //PAYMENT METHOD

  // Create order (calls backend)
  const [orderID, setOrderID] = useState(null);
  const generateOrder = async () => {
    try {
      const response = await CreateOrderPaypal(totalAmount); // Adjust amount as needed
      const { id } = response.data;
      setOrderID(id);
      return id;
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  const onApprove = async (data: any) => {
    try {
      const response = await onApproveOrder({ orderID: orderID });
    } catch (error) {
      console.error("Error capturing payment:", error);
    }
  };

  //INVOICE HANDLER
  const invoiceHandler = async () => {
    try {
      const payload = {
        firstName: item[0]?.firstName,
        lastName: item[0]?.lastName,
        phone: item[0]?.phone,
        email: item[0]?.email,
        organization: item[0]?.company,
        country: item[0]?.country,
        youAre: item[0]?.firstName,
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
      dispatch(REMOVEALLITEM());
    } catch (error) {
      throw new Error("Error when Reqest Invoice");
    }
  };
  //RAZORPAY HANDLER
  const razorpayHandler = async () => {
    await handlePayment(item, totalAmount);
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
          name: values[0]?.firstName + " " + values[0]?.lastName,
          email: values[0]?.email,
          contact: values[0]?.phone,
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

  //PAYMENT SUCCESS
  const paymentSuccessHandler = async (response: any, values: any) => {
    try {
      const payload = {
        firstName: values[0]?.firstName,
        lastName: values[0]?.lastName,
        phone: values[0]?.phone,
        email: values[0]?.email,
        organization: values[0]?.company,
        country: values[0]?.country,
        youAre: values[0]?.companyType,
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
  if (cart.length == 0) {
    return (
      <section className="flex flex-col items-center justify-center p-4 bg-[#E4EDFB] h-screen w-full">
        <Image src={EmptyCart} alt="EmptyCart" className="w-[30%]" />
        <h2 className="text-3xl font-semibold text-blue">
          Your cart is empty.
        </h2>
        <Link
          href={"/product"}
          className="text-white bg-red py-2 px-6 mt-4 rounded"
        >
          Shop Now
        </Link>
      </section>
    );
  }
  return (
    <>
      <div className=" w-full ">
        <div className="sm:flex w-full p-6  ">
          <div className="w-full   sm:w-3/4 bg-white md:px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl font-poppins text-blue">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-2xl text-blue">
                {cart?.length} Items
              </h2>
            </div>
            {cart?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t  border-gray-50"
                >
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <Image
                      src={item?.avatar}
                      alt="Black Leather Purse"
                      className="h-full object-center object-cover md:block hidden"
                    />
                    <Image
                      src={item?.avatar}
                      alt="Black Leather Purse"
                      className="md:hidden w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-base font-poppins font-black leading-none text-gray-800">
                        {item?.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          className="text-3xl "
                          onClick={() => dispatch(SUBQUANTITY(item.id))}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item?.quantity}
                          className="py-[1px] px-[2px] text-center rounded border-2 w-10 border-blue font-semibold"
                        />
                        <button
                          className="text-2xl "
                          onClick={() => dispatch(ADDQUANTITY(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Docket Reference Number: {item?.docketReferenceNumber}
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Output Format: {item.outputFormat}
                    </p>

                    <div className="flex items-center justify-between pt-5">
                      <div className="flex itemms-start">
                        <button
                          onClick={() => removeItemHandler(item.id)}
                          className="text-xs leading-3 underline text-red-500  cursor-pointer hover:text-red flex items-center gap-1"
                        >
                          Remove <RiDeleteBin2Line size={14} />
                        </button>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        ${item?.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10 border-[1px] p-4"
          >
            <h1 className="font-semibold text-2xl border-b pb-8 text-blue">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart.length}
              </span>
              <span className="font-semibold text-sm">${totalAmount}</span>
            </div>

            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full border-[1px] rounded focus:outline-blue"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalAmount}</span>
              </div>
              <button
                onClick={() => setIsCheckout(true)}
                className="bg-blue font-semibold hover:bg-blue py-3 text-sm text-white uppercase w-full"
              >
                Checkout ({cart?.length} ITEMS)
              </button>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => invoiceHandler()}
                  className="text-blue border-blue shadow-md rounded py-2 w-full border-[1px] font-semibold"
                >
                  Request Invoice
                </button>
                <button
                  type="submit"
                  onClick={() => razorpayHandler()}
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
                  <PayPalButtons
                    createOrder={generateOrder}
                    onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Cart;
