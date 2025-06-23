import Process1 from "../../assets/img/workProcess/Bridging expectations.png";
import Process2 from "../../assets/img/workProcess/Key request fields of information and upload your files.png";
import Process3 from "../../assets/img/workProcess/Output timeine.png";
import Process4 from "../../assets/img/workProcess/The Work Commences.png";
import Process5 from "../../assets/img/workProcess/Unlimited Iterations.png";
import Arrow from "../../assets/img/workProcess/arrow.png";
import Heading from "../../molecules/Heading";
import Testimonial from "../Home/Testimonial";
import OurServices from "../Home/OurServices";
import GetInTouch from "../GetInTouch";
import SEO from "../../common/SEO";
import Image from 'next/image';

interface IndexProps {
  // define props here
}

const WorkProcess: React.FC<IndexProps> = (props) => {
  const process: any = [
    {
      Image: Process2,
      heading: "KEY IN REQUESTED FIELDS OF INFORMATION & UPLOAD YOUR FILES",
      content:
        "Once you provide us with the data requested & upload your input files (sketches, photographs, prototypes, videos, etc.,.) & confirm your request",
    },
    {
      Image: Process1,
      heading: "BRIDGING EXPECTATIONS",
      content:
        "Our subject matter & patent drawing experts shall reach out to you to explain our understanding 7 ensure that we are on the same page.",
    },
    {
      Image: Process5,
      heading: "UNLIMITED ITERATIONS",
      content:
        "We shall always ensure to deliver in line with your expectations but in case of any required changes, we shall ensure to deliver till your completely satisfied.",
    },
    {
      Image: Process4,
      heading: "THE WORK COMMENCES",
      content:
        "Once your order is confirmed our subject matter experts start working on the patent drawing in accordance with respective patent office guidelines. We are available at all times to ensure the results are in line with expectations.",
    },
    {
      Image: Process3,
      heading: "OUTPUT TIMELINES – 2-3 WORKING DAYS",
      content:
        "We provide delivery of required drawings in line with your specific expectations & within the designated timeline. Expedited cases are delivered in 2-3 working days & our usual delivery is within 4-5 working days.Specific account managers shall be assigned for all projects, who shall keep you posted on developments till delivery over email.",
    },
  ];
  return (
    <>
      <SEO
        description="Our services are specially curated & designed to support patent agents & patent attorneys"
        keywords="Our Work Process, How it Works"
        title="Our Work Process | PatDraw"
      />
      <main className="flex flex-col items-center ">
        <div className="flex flex-col items-center gap-0">
          <Heading name="OUR WORK PROCESS" />
          <h1 className="text-[17px] font-poppins top-0 text-center ">
            Our services are specially curated & designed to support patent
            agents & patent attorneys
          </h1>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 p-14 items-center justify-center">
          {process?.map(({ Image:image, heading, content }: any, index: number) => {
            return (
              <div key={index} className="flex items-center gap-10">
                <div className="flex flex-col gap-1 w-52">
                  <div className="group relative">
                    <Image src={image} alt={heading} className="w-full " />
                    <p className="hidden group-hover:block absolute top-0  bg-transparent text-[13px] text-center min-h-full p-2 shadow-md shadow-black bg-white text-black rounded-md">
                      {content}
                    </p>
                  </div>
                  <h6 className="text-center text-sm font-poppins font-semibold">
                    {heading}
                  </h6>
                </div>
                <div>
                  {index !== process.length - 1 && (
                    <Image src={Arrow} alt={'Arrow'} className="w-8" />
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-full">
          <Testimonial />
          <OurServices />
        </section>
        <GetInTouch />
      </main>
    </>
  );
};

export default WorkProcess;
