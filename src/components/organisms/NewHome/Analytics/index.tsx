import React from "react";

interface IndexProps {
  // define props here
}

const Analytics: React.FC<IndexProps> = (props) => {
  return (
    <main className="bg-white p-4 sm:p-10 md:p-20 flex  items-center justify-center gap-2 sm:gap-5 md:gap-10 font-poppins w-full">
      <div className="border-r-2 border-blue px-3 md:px-10 flex flex-col items-center justify-center gap-1">
        <h2 className="text-blue font-[800] text-xl sm:text-2xl md:text-3xl">98% </h2>
        <span className="text-[12px] md:text-[13px] text-center">First-Time Approval Rate</span>
      </div>
      <div className="border-r-2 border-blue px-3 md:px-10 flex flex-col items-center justify-center gap-1">
        <h2 className="text-blue font-[800] text-xl sm:text-2xl md:text-3xl">2 Days </h2>
        <span className="text-[12px] md:text-[13px] text-center">Average Delivery Time</span>
      </div>
      <div className=" flex flex-col px-3 md:px-10 items-center justify-center gap-1">
        <h2 className="text-blue font-[800] text-xl sm:text-2xl md:text-3xl">14K+ </h2>
        <span className="text-[12px] md:text-[13px] text-center">Patent Drawings Illustrated</span>
      </div>
    </main>
  );
};

export default Analytics;
