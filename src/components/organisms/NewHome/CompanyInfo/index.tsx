import React from "react";
import GLOBALIP from "../../../assets/img/icons/Global IP Leadership.png";
import DECADE from "../../../assets/img/icons/Decade of excellence.png";
import INNOVATION from "../../../assets/img/icons/Innovation DNA.png";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const CompanyInfo: React.FC<IndexProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-center font-poppins text-black p-4 md:p-10 bg-gradient-to-tr to-customGreen via-customGreen from-customRed">
      <h2 className="text-2xl font-semibold text-center">
        Backed by Global IP Excellance
      </h2>
      <p className="text-[13px]  py-1 text-center">
        <b>PatDraw</b> is a specialized brand initiative of{" "}
        <b>Effectual Services</b>, bringing you the power of global IP expertise
        with focused patent <br /> illustration excellance.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-10">
        <div className="bg-white bg-opacity-20 p-6 flex flex-col items-center justify-center gap-2 rounded">
          <Image src={GLOBALIP} alt="Global Ip" className="w-32" />
          <h4 className="text-blue font-semibold text-xl">
            Global IP Leadership
          </h4>
          <p className="text-[13px] text-center">
            Part of an award-winning IP management advisory firm serving Fortune
            500 companies and leading law firms worldwide.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 flex flex-col items-center justify-center gap-2 rounded">
          <Image src={DECADE} alt="Decade of Excellance" className="w-32" />
          <h4 className="text-blue font-semibold text-xl">
            Decade of Excellence
          </h4>
          <p className="text-[13px] text-center">
            Building on Effectual's 10+ years of IP expertise and established
            quality benchmarks across industries.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 flex flex-col items-center justify-center gap-2 rounded">
          <Image src={INNOVATION} alt="Innovation DNA" className="w-32" />
          <h4 className="text-blue font-semibold text-xl">Innovation DNA</h4>
          <p className="text-[13px] text-center">
            Combining human experties with advanced technology to deliver
            superior patent illustrations across multiple time zones.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CompanyInfo;
