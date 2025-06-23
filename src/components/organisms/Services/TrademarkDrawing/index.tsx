import React from "react";
import DummyImage from "../../../common/DummyImage";
import TrademarkBanner from "../../../assets/img/home/services/trademark s1_final.png";

//IMAGES
import Sample1 from "../../../assets/img/Samples/Trademark Design/TM1.jpg";
import Sample2 from "../../../assets/img/Samples/Trademark Design/TM2.jpg";
import Sample3 from "../../../assets/img/Samples/Trademark Design/TM3.jpg";
import SEO from "../../../common/SEO";
import Image from "next/image";
import Link from "next/link";

interface IndexProps {
  // define props here
}
export interface IDUMMYIMAGE {
  title: string;
  image: any;
}
const dummyImage: IDUMMYIMAGE[] = [
  {
    image: Sample1,
    title: "Chemical Structure",
  },
  {
    image: Sample2,
    title: "Chemical Structure",
  },
  {
    image: Sample3,
    title: "Chemical Structure",
  },
];

const TrademarkDrawing: React.FC<IndexProps> = (props) => {
  return (
    <main>
      <SEO
        description="Secure your brand with precise trademark drawings through our professional trademark drawing services, delivering accurate and timely visual representations."
        keywords="Trademark Drawings, Trademark Drawing Services"
        title="Trademark Drawings | Trademark Drawing Services"
      />
      <div className="flex flex-col gap-1">
        <h1 className="  text-2xl font-semibold text-blue font-poppins ">
          Trademark Drawings
        </h1>
        <span className="border-2 w-14 border-red"></span>
      </div>
      <section className="p-2 flex flex-col sm:flex-row w-full md:space-x-6">
        <div className="md:w-[65%]">
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            Trademarks are frequently regarded as the "face" of your company
            that the public sees. It is imperative that you provide the
            appropriate trademark drawing to the local trademark office when
            registering your trademark. This drawing frequently alludes to how
            your mark is shown.
          </p>
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            When the application process is finished, the registration
            certificate displays the representation of your mark that you
            submitted. Generally speaking, a trademark can consist of a symbol,
            words, short phrases, letters, colors, graphics, or images.
          </p>
          <p className="py-1 text-justify font-[400] font-poppins text-[15px] text-gray-900">
            When submitting trademark drawings for registration, there are
            certain guidelines that must be followed, including those regarding
            file size, format, and other aspects.
          </p>
          <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
            You will save time and money since Effectual employs skilled
            specialists who can easily draft and submit your trademark drawing
            to the trademark offices in different regions.
          </p>
        </div>
        <div className="md:w-[35%]">
          <Image src={TrademarkBanner} alt="UtilityImage" />
        </div>
      </section>
      <div className="px-1">
        <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
          In order to properly develop the trademark drawing, our professionals
          discuss the brand's specifications and the message they wish to
          express through the trademark in addition to your requirements. After
          reviewing your drawing and logo materials, we will share the best
          discounted pricing with you.
        </p>
        <p className="py-1 text-justify font-[400] text-[15px] font-poppins text-gray-900">
          We await your directions to start drawing after we provide the fee
          quotations. The formal drawings are delivered with you in the format
          you want after the drawing and logo are finished.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 my-4">
        <Link
          href="/product/trademark-drawings"
          className="bg-red text-white p-3 rounded  text-[15px] flex items-center gap-1 py-2"
        >
          Order Your Accurate Trademark Drawings Now
        </Link>
      </div>
      <section className="border-[1px] rounded-b-lg mt-2">
        <h2 className="text-white text-2xl bg-blue text-center text-[18px] font-semibold">
          Trademark Drawing Samples
        </h2>
        <div className="p-6">
          <DummyImage data={dummyImage} link={"/product/trademark-drawingss"} />
        </div>
      </section>
    </main>
  );
};

export default TrademarkDrawing;
