import React from "react";
import USER_ICON from "../../../assets/img/icons/user icon.png";
import MultiCarousal from "../../../hoc/MultiCarousal";
import Image from "next/image";

interface IndexProps {
  // define props here
}
const reviews = [
  {
    name: "John Harper",
    review:
      "I have worked with Effectual Services on several IP projects. I have been impressed by their quality of work, as well as by their responsiveness. Their client orientation, dedication towards work, subject matter knowledge, and prompt communication is something that keeps me assured that I am working with an A-Team. They have always exceeded my expectations and I highly recommend the firm",
    company: "CEO- USA Firm",
  },
  {
    name: "Patent Attorney",
    review:
      "I want to mention that the last three (or more) line art projects that Effectual Services has worked on have been HOME RUNS in terms of the quality of the line art drawings and the ability for me to make my edits in MS Visio. Thank you!”",
    company: "Law Firm, Australia",
  },
  {
    name: "A leading patent Licensing Firm",
    review:
      "Thank you for correcting my error. The drawings provided are excellent. I very much appreciate the great work and short turnaround.",
    company: "Vice President",
  },
  {
    name: "ShareHolder",
    review:
      "I have been working with Effectual Services on patent drawing and prior art projects during the last several months. In the drawing projects, ES delivers high quality work product that corresponds to what I wanted and requires none or only minimal revisions.In the prior art search projects, ES delivers the results in an easy-to-follow format that helps me draft claims that overcome the prior references. ES’s work product is always produced in a timely manner and, oftentimes, a few days before the deadline”.",
    company: "Workman , Nydegger, Utah, USA - Financial",
  },
  {
    name: "ShareHolder",
    review: `
       Thanks for this report. Your service was excellent and the final product was very helpful. Your search coverage was greater than others from whom I requested information. For example, your search (as you originally proposed) covered utility patents while others only proposed searching design patents. You will notice from your results that there were many very relevant utility patents uncovered in your search. I will recommend your service to the 100+ patent litigators in our firm.
    `,
    company: "Workman , Nydegger, Utah, USA - Financial",
  },
  {
    name: "PATENT ATTORNEY",
    review: `
        The drawings look great! One super small change to request (and it looks like this was my fault and I had a typo in FIG. 3)
    `,
    company: "Schwegman Lundberg & Woessner P.A",
  },
  {
    name: "Associate Director – Emerging Technologies",
    review: `
        Like other projects, the quality of the drawings is most impressive. The selection of the line segments is very well done!
                    
    `,
    company: "US Based Beverage Company",
  },
  {
    name: "Principle Fellow- TAVR Guidewire",
    review: `
    Thank you! The figures look great and exceed my expectations. Thank you in advance for the quick and thorough work!                              
    `,
    company: "US Based Beverage Company",
  },
  {
    name: "Sr Vice President R&D- Resin & Adhesives",
    review: `
     I have been working with Effectual for the the last 3 years and they have executed multiple projects for my team. They also created a special 12-member team who only works on our project and their engagement with our Directors and scientists is also very streamlined. I also like the fact that they are very straightforward, if there’s a project that they believe has a very low chance of success, they will always inform us upfront of the risk involved.
                         
    `,
    company: "Large global chemical manufacturers.",
  },

  {
    name: "Vice President R&D- Gums & Confectionary",
    review: `
   The good thing about working with effectual is their wide pool of services that they offer. With one project they were able to solve multiple challenges. For our ideation study they were able to give us not just novel recommendation, but they aslo did White space analysis to help us understand the future trend
                                                                                 
    `,
    company: "Global Food & Beverage Company",
  },
  {
    name: "Sr Director R&D- Battery Tehnology",
    review: `
  I want to mention that the last three (or more) line art projects that Effectual Services has worked on have been HOME RUNS in terms of the quality of the line art drawings and the ability for me to make my edits in MS Visio. Thank you!”
                                                                                                    
    `,
    company: "Largest automobile part supplier",
  },
];

const Reviews: React.FC<IndexProps> = (props) => {
  return (
    <main className="text-black font-poppins flex flex-col items-center justify-center  p-4 md:p-10 w-full ">
      <h2 className="text-2xl font-bold">What Clients Say</h2>
      <section className="w-full p-2 py-3 md:my-6">
        <MultiCarousal items={1} dots={true} arrows={false}>
          {reviews?.map((item: any,index:number) => {
            return (
              <div key={index} className="shadow-md  flex flex-col py-7 px-8 text-[14px] gap-3 items-center m-4 mb-6  rounded-lg bg-customGreen">
                <Image
                  src={USER_ICON}
                  alt="USER_ICON"
                  className="w-16   shadow-lg rounded-full"
                />
                <p className="text-center text-gray-800 text-[13px]">
                  {item?.review}
                </p>
                <h6 className="text-center text-[13px]">
                  <b>{item?.name}, </b> <br />
                  {item?.company}
                </h6>
              </div>
            );
          })}
        </MultiCarousal>
      </section>
    </main>
  );
};

export default Reviews;
