import Link from "next/link";
import React from "react";
import { TbFileInvoice } from "react-icons/tb";
interface IndexProps {
  // define props here
}

const OrderInvoice: React.FC<IndexProps> = (props) => {
  return (
    <main className="p-10  flex flex-col items-center justify-center gap-10">
      <section className="bg-blue p-10  text-white flex flex-col items-center justify-center rounded-2xl gap-10 w-[70%]">
        <TbFileInvoice size={100} />
        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-xl font-semibold">
            Invoice Generation in Progress.
          </h4>
          <p className="text-[13px] font-[500]">
            We are generating your invoice and will be sharing it with you
            shortly.
          </p>
        </div>
      </section>
      <section className="bg-gray-200  border-blue border-l-[6px] p-4 text-[14px] w-[70%]">
        <p>
          Thank you for requesting an invoice for your drawing services. Our
          system is currently processing your request, and the invoice will be
          delivered to you as soon as it's ready.
        </p>
      </section>
      <div className="w-[60%] flex items-center justify-center">
        <Link
          href={"/pay-invoice"}
          className="text-[14px] bg-red py-2 px-10 rounded text-white"
        >
          Pay Invoice
        </Link>
      </div>
    </main>
  );
};

export default OrderInvoice;
