 'use client'
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceData } from "../../../data/servicesDetails";
import { ADDQUANTITY, REMOVEITEM, SUBQUANTITY } from "../../../store";
import EmptyCart from "../../assets/img/empty-cart.png";
import { RiDeleteBin2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import CheckoutDetails from "../CheckoutDetails";
import Loader from "../../common/Loader";
import { RequestInvoice } from "../../../services/product";
import GetInTouch from "../GetInTouch";
import SEO from "../../common/SEO";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Cart: React.FC<IndexProps> = (props) => {
  const { item } = useSelector((state: any) => state.cart);
  const [cart, setCart] = useState<any>([]);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState<boolean>(false);

  useEffect(() => {
    // Create a Map for item quantities
    const quantityMapB = new Map(
      item.map((item: any) => [item.itemId, item.quantity])
    );

    // Filter and map the common items between serviceData and item
    const commonItemsWithQuantities = serviceData
      .filter((itemA: any) => quantityMapB.has(itemA.id))
      .map((itemA: any) => {
        const matchedItem = item?.find(
          (items: any) => items.itemId == itemA.id
        );
        return {
          id: itemA.id,
          name: itemA.name,
          outputFormat: matchedItem?.outPutFormat,
          docketReferenceNumber: matchedItem?.docketNumber,
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

  console.log("item", item);

  const removeItemHandler = (id: number) => {
    dispatch(REMOVEITEM(id));
    toast.success("Item removed Successfully");
  };

  if (cart.length == 0) {
    return (
      <section className="flex flex-col items-center justify-center p-4 bg-[#E4EDFB] h-screen w-full">
        <SEO
          description="Review your cart at PatDraw, complete your order seamlessly, and proceed with your mediatory patent drawing needs efficiently."
          keywords="Cart, Order Summary"
          title="Cart | PatDraw"
        />
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
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      RF293
                    </p>
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
                      Docket Reference Number: {item.d}
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Output Format: {item.outputFormat}
                    </p>
                    <p className="w-96 text-xs leading-3 text-gray-600">
                      Delivery: {item?.deliverySpeed}
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
            </div>
          </div>
        </div>
      </div>
      {isCheckout && (
        <CheckoutDetails
          cart={cart}
          setIsCheckout={setIsCheckout}
          totalAmount={totalAmount}
        />
      )}
      <GetInTouch />
    </>
  );
};

export default Cart;
