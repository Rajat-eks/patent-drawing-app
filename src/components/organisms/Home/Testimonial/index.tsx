import React from "react";
import { FaStar } from "../../../assets/icons";
import SAMPLE from "../../../assets/img/sample1.webp";
import MultiCarousal from "../../../hoc/MultiCarousal";
import User from "../../../assets/img/home/user.png";
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesR } from "react-icons/ri";
import Heading from "../../../molecules/Heading";

interface TestimonialProps {
  // define props here
}

interface TESTIMONIAL {
  name?: string;
  designation?: string;
  star?: number;
  message?: string;
  avatar?: any;
}

const testimonial: TESTIMONIAL[] = [
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `I want to mention that the last three (or more) line art projects that Effectual Services has worked on have been HOME RUNS in terms of the quality of the line art drawings and the ability for me to make my edits in MS Visio. Thank you!”`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 2,
    avatar: SAMPLE,
    message: `First, I want to confirm our great satisfaction of the drawings you previously sent for the lighter line art project`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `The drawings look great! One super small change to request (and it looks like this was my fault and I had a typo in FIG. 3)`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Thanks, these look pretty good!  The stippling looks great.`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Thank you so much – the drawings are beautiful as always`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Thank you for correcting my error.  The drawings provided are excellent. I very much appreciate the great work and short turnaround.`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Thank you for what I will call “too good of a job”.`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Thank you! The figures look great and exceed my expectations. Thank you in advance for the quick and thorough work!`,
  },
  {
    name: "Liam Young",
    designation: "Developer",
    star: 4,
    avatar: SAMPLE,
    message: `Like other projects, the quality of the drawings is most impressive. The selection of the line segments is very well done!`,
  },
];

const Testimonial: React.FC<TestimonialProps> = (props) => {
  return (
    <main className="flex w-full flex-col items-center justify-center  bg-gradient-to-r from-[#F3F5F9] via-[#DEE9FC] to-[#F7F3ED]">
      <Heading name="TESTIMONIALS" />
      <h4 className=" text-[17px]  font-poppins px-4 sm:px-10 md:px-20 text-center   text-gray-800">
        Our testimonials highlight the exceptional service and remarkable
        results we&#39;ve consistently delivered. Read their stories and see how
        we&#39;ve made a difference.
      </h4>
      <div className="w-full p-2">
        <MultiCarousal items={4} dots={true} arrows={false}>
          {testimonial?.map(
            (
              { designation, message, name, star, avatar }: TESTIMONIAL,
              index: number
            ) => {
              return (
                <div
                  // style={{ boxShadow: "-6px -6px 10px -3px" }}
                  key={index }
                  className={`bg-white shadow-sm rounded-xl border-[1px] group hover:border-blue  flex flex-col items-center justify-center  h-[14rem] mx-4 my-12 ${index % 2 == 0 ? "shadow-red" : "shadow-blue"}`}
                >
                  <div className="h-[4rem] w-[4rem] bg-white rounded-full object-fill fixed top-4 shadow-md  shadow-blue flex justify-center items-center text-red group-hover:border-blue ">
                    <ImQuotesLeft size={30} />
                  </div>
                  <div className="relative  flex flex-col items-center justify-center ">
                    <p className="text-sm text-gray-700 px-4 py-2 text-center text-[18px] font-poppins">
                      {message}
                      <span className="flex flex-row-reverse"></span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </MultiCarousal>
      </div>
    </main>
  );
};

export default Testimonial;
