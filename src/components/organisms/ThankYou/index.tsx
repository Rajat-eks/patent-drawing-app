import Link from "next/link";
import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
interface IndexProps {
  // define props here
}

const Thankyou: React.FC<IndexProps> = (props) => {
  return (
    <main className="p-10  flex flex-col items-center justify-center gap-10">
      <section className="bg-blue p-10  text-white flex flex-col items-center justify-center rounded-2xl gap-10 w-[70%]">
        <IoMdCheckboxOutline size={100} />
        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-xl font-semibold">
            Thank You! We have recieved your submission.
          </h4>
          <p className="text-[13px] font-[500]">
            Our team is now processing your request.{" "}
          </p>
        </div>
      </section>
      <section className="bg-gray-200  border-blue border-l-[6px] p-4 text-[14px] w-[70%]">
        <p>
          Thank you for your interest in <b>Patdraw</b>. We understand the
          importance of protecting your intellectual property with precise and
          professionals patent illustrations. A member of our specialized team
          will contact you soon to discuss your specifies requirements in
          details.
        </p>
      </section>
      <div className="w-[40%] flex items-center justify-between">
        <Link
          href={"/blog"}
          type="submit"
          className="text-[14px] bg-blue py-2 px-10 rounded text-white"
        >
          Explore Resources
        </Link>
        <Link
          href={"/patent-drawing-samples"}
          className="text-[14px] bg-red py-2 px-10 rounded text-white"
        >
          Download Samples
        </Link>
      </div>
    </main>
  );
};

export default Thankyou;
