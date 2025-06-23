import React from "react";
import UNBEATABLE_PRICE from "../../../assets/img/icons/unbeatable prices.png";
import QUALITY_GUARANTEE from "../../../assets/img/icons/quality guranteed.png";
import PTO from "../../../assets/img/icons/uspto_pto compliance.png";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const Advantage: React.FC<IndexProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-center p-10 font-poppins">
      <h2 className="text-2xl font-[600]">The PatDraw Advantage</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        <div className="border-[1px] rounded p-4 flex items-center gap-2">
          <Image src={UNBEATABLE_PRICE} alt="UNBEATABLE_PRICE" className="w-10" />
          <div>
            <h4 className="text-[16px] font-semibold text-blue">
              Unbeatable Prices
            </h4>
            <span className="text-[13px] text-center">
              Why Pay More When You Can Get the Best for Less?
            </span>
          </div>
        </div>
        <div className="border-[1px] rounded p-4 flex items-center gap-2">
          <Image
            src={QUALITY_GUARANTEE}
            alt="QUALITY_GUARANTEE"
            className="w-10"
          />
          <div>
            <h4 className="text-[16px] font-semibold text-blue">
              Quality Guaranteed
            </h4>
            <span className="text-[13px] text-center">
              35-point quality checklist ensures perfection in every drawing.
            </span>
          </div>
        </div>
        <div className="border-[1px] rounded p-4 flex items-center gap-2">
          <Image src={PTO} alt="PTO" className="w-10" />
          <div>
            <h4 className="text-[16px] font-semibold text-blue">
              USPTO/PTO Compliance
            </h4>
            <span className="text-[13px] text-center">
              Every drawing meticulously crafted to meet all USPTO and PCT
              requirements.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Advantage;
