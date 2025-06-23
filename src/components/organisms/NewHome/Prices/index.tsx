import React from "react";
import { BsCheck2 } from "react-icons/bs";
import MultiCarousal from "../../../hoc/MultiCarousal";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Prices: React.FC<IndexProps> = (props) => {
   const prices: any = [
    {
      name: "Utility Patent Drawings",
      price: 28,
      order: "/product/utility-patent-drawings",
    },
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
  return (
    <main className="flex flex-col items-center py-10 font-poppins bg-customGreen">
      <span className="uppercase bg-green-600 py-[1px] px-1 text-white text-[13px] rounded mb-2 text-center">
        INDUSTRY'S BEST PRICING
      </span>
      <h2 className="text-2xl font-[600] text-center">
        Premium Patent Drawings at Unbeatable Prices
      </h2>
      <p className="text-[13px] py-1 text-center p-4">
        Starting at just <b>$28</b> per sheet for utility and design patents.
      </p>
      <section className="w-full p-2">
        <MultiCarousal items={3} dots={true} arrows={false}>
          {prices?.map((item: any,index:number) => {
            return (
              <div key={index} className="text-black bg-white border-[1px] p-4 rounded flex flex-col items-center justify-center gap-6 m-4 my-10 shadow-md">
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-xl font-[600] py-2">{item?.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center border-r-[2px] border-red p-4 text-blue">
                      <h2 className="text-3xl font-semibold">${item?.price}</h2>
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
        </MultiCarousal>
      </section>
    </main>
  );
};

export default Prices;
