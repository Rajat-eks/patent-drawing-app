import React from "react";
import MISSED_DEADLINE from "../../../assets/img/icons/time wasted.png";
import WEAK_PROTECTION from "../../../assets/img/icons/protection at Risk.png";
import HIDDEN_COST from "../../../assets/img/icons/rising cost.png";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Sample: React.FC<IndexProps> = (props) => {
  return (
    <main className="bg-customGreen flex flex-col items-center justify-center gap-1 font-poppins p-4 md:p-10">
      <h2 className="text-2xl font-semibold text-center">
        Time is Money. Don't Waste Either on poor Patent Drawings
      </h2>
      <p className="text-[13px] text-center">
        Patent attroneys and inventors lose countless hours dealing with
        incorrect drawings, missed deadlines, and endless revisions.{" "}
      </p>
      <section className="flex flex-col items-center justify-center gap-4 pt-5">
        <span className="border-b-[2px] border-gray-800 w-[20%]  "></span>
        <p className="font-semibold text-gray-700 tracking-wide text-center">
          The real Cost of Poor Patent Drawings
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-4">
            <Image src={MISSED_DEADLINE} alt="MISSED_DEADLINE" className="w-10" />
            <div className="flex flex-col  justify-center">
              <h5 className="text-red font-semibold">Missed Deadline</h5>
              <p className="text-[12px]">
                Late submissions can jeopardize your entire patent application
                process.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-4">
            <Image src={WEAK_PROTECTION} alt="WEAK_PROTECTION" className="w-10" />
            <div className="flex flex-col  justify-center">
              <h5 className="text-red font-semibold">Weak Protection</h5>
              <p className="text-[12px]">
                Inaccurate drawings leave your innovations vulnerable to
                competitors.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-white bg-transparent p-4 rounded-lg flex items-center gap-4">
            <Image src={HIDDEN_COST} alt="HIDDEN_COST" className="w-10" />
            <div className="flex flex-col  justify-center">
              <h5 className="text-red font-semibold">Hidden Costs</h5>
              <p className="text-[12px]">
                Rivisions and corrections drain your resources and inflate your
                budget.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 pt-10">
        <Link
          href={"/product"}
          className="bg-blue text-white text-[14px] rounded py-2 px-4"
        >
          Order Your Quality Drawings Now
        </Link>
        <Link
          href={"/patent-drawing-samples"}
          className="bg-red text-white text-[14px] rounded py-2 px-4"
        >
          View Samples
        </Link>
      </div>
    </main>
  );
};

export default Sample;
