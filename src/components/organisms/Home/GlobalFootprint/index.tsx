import React from "react";
import Footprint from "../../../assets/img/awards/globaFootprint.png";
import Heading from "../../../molecules/Heading";
import Image from "next/image";

interface GlobalFootprintProps {
  // define props here
}

const GlobalFootprint: React.FC<GlobalFootprintProps> = (props) => {
  return (
    <div className="relative   from-[#FBFBE4] to-[#EBECF8] via-[#ffffff] bg-green bg-opacity-70 w-full">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Puts the video behind content
        }}
      >
        <source
          src={"/video/GLOBAL FOOTPRINT BACKDROP VIDEO.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <main className=" flex flex-col items-center justify-center bg-white bg-opacity-30 ">
        <Heading name=" GLOBAL FOOTPRINT" />
        <h4 className="text-[17px] py-1 font-poppins px-4 sm:px-10 md:px-20 text-center">
          Having a global footprint in over 5 continents helps us to bridge
          boundaries and work seamlessly across multiple time zones, thus living
          to the core of our philosophy -{" "}
          <b>Innovation is global, so are we !!!</b>
        </h4>
        <Image
          src={Footprint}
          alt="Footprint"
          className="w-full py-4 md:p-8  bg-no-repeat"
        />
      </main>
    </div>
  );
};

export default GlobalFootprint;
