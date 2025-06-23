import React from "react";
import CountUp from "react-countup";
// import ContactBackground from '../../../assets/img/contactUs_bg.jpg'

interface IndexProps {
  // define props here
}

interface STATISTICS {
  count?: number;
  name?: string;
}

const statistics: STATISTICS[] = [
  {
    count: 6250,
    name: "CLIENTS",
  },
  {
    count: 51700,
    name: "PROJECTS COMPLETED",
  },
  {
    count: 66,
    name: "CUSTOMER COUNTIES",
  },
  {
    count: 255,
    name: "TECHNO-LEGAL PROFESSIONALS",
  },
];

const Statistics: React.FC<IndexProps> = (props) => {
  return (
    <main
      className="sticky shadow-lg"
      style={{
        backgroundImage: `url('/image/engagement.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "230px",
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 sm:gap-0 gap-10 w-full h-full py-6 md:py-16 bg-white bg-opacity-30">
        {statistics?.map(({ count, name }: STATISTICS, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center md:justify-between text-white gap-2"
          >
            <span className="md:text-5xl sm:text-3xl text-xl font-bold text-black ">
              <CountUp end={count || 0} start={0} />+
            </span>
            <h3 className="  font-[300] text-center  text-black font-poppins text-[13px] sm:text-[15px] md:text-[17px] ">
              {name}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Statistics;
