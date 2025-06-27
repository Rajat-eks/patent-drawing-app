import React from "react";
import model1 from "../../../assets/img/model/Full-Time.png";
import model2 from "../../../assets/img/model/ON DEMAND.png";
import model3 from "../../../assets/img/model/dedicated hour.png";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const index: React.FC<IndexProps> = (props) => {
  return (
    <main className=" flex flex-col   gap-6">
   
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Our Engagement Models
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="border-[1px] py-4 px-2 rounded mx-10">
        <h4 className="font-semibold  text-red uppercase text-center">
          Full-Time Equivalent Model
        </h4>
        <div className="flex flex-col md:flex-row justify-between items-center  w-full gap-1 pt-4">
          <ul className="text-[15px] font-poppins p-12 w-full md:w-[50%] h-full text-justify list-disc  space-y-6">
            <li>
              We hire and train specialists tailored to client specifications.
            </li>
            <li>We manage the team and provide necessary infrastructure.</li>
            <li>Teams are prepared for real projects before transitioning.</li>
            <li>
              Control is gradually handed over to the client once steady
              operations are achieved.
            </li>
            <li>
              Our expertise with IP specialists supports successful transitions
              for larger businesses.
            </li>
          </ul>
          <Image
            src={model1}
            alt="model1"
            loading="lazy"
            className="md:w-[40%] w-full -full"
          />
        </div>
      </section>
      <section className="border-[1px] py-4 px-2 rounded mx-10">
        <h4 className="font-semibold  text-red uppercase text-center">
          Dedicated Hours Model
        </h4>
        <div className="flex flex-col md:flex-row justify-between  w-full gap-1 pt-4">
          <ul className="text-[15px] font-poppins p-12 w-full md:w-[50%] h-full text-justify list-disc  space-y-6">
            <li className="tracking-widest">
              Fixed monthly hours for client engagement.
            </li>
            <li>Discounted hourly rates for patent services.</li>
            <li>Access to specialists with diverse expertise.</li>
            <li>Ideal for clients unsure of project technology domains.</li>
          </ul>
          <Image
            src={model3}
            alt="model3"
            loading="lazy"
            className="md:w-[40%] w-full -full"
          />
        </div>
      </section>
      <section className="border-[1px] py-4 px-2 rounded mx-10">
        <h4 className="font-semibold  text-red uppercase text-center">
          On-Demand Model
        </h4>
        <div className="flex flex-col md:flex-row justify-between w-full gap-1 pt-4">
          <ul className="text-[15px] font-poppins p-12 w-full md:w-[50%] h-full text-justify list-disc  space-y-6 ">
            <li>On-demand model suits short, irregular projects.</li>
            <li>Tailored proposals outline approach, budget, and schedule.</li>
            <li>No firm commitments required.</li>
            <li>
              Specialists work exclusively for the client, ensuring clear
              communication and efficiency.
            </li>
          </ul>
          <Image
            src={model2}
            alt="model2"
            loading="lazy"
            className="md:w-[40%] w-full -full"
          />
        </div>
      </section>
    </main>
  );
};

export default index;
