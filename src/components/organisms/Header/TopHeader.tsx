import React from "react";
import { MdOutlineEmail, MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

interface TopHeaderProps {
  // define props here
}

const TopHeader: React.FC<TopHeaderProps> = (props) => {
  const { item } = useSelector((state: any) => state.cart);
  return (
    <header className="bg-gradient-to-r from-[#E69D9E] via-white to-[#7D8FB9] px-4 py-2 flex items-center justify-between  ">
      <div className=" items-center gap-4 flex">
        <div className="text-[13px]  flex items-center  gap-4 font-header text-black">
          <a
            href="https://www.linkedin.com/company/patdraw"
            target="_blank"
            className="h-7 w-7 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
          >
            <CiLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/EffectualServices"
            target="_blank"
            className="h-7 w-7 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://twitter.com/effectualip?lang=en"
            target="_blank"
            className="h-7 w-7 rounded-full bg-white text-black flex items-center justify-center border-[1px] hover:bg-blue hover:text-white"
          >
            <FaXTwitter size={16} />
          </a>
        </div>
        <ul className="sm:flex items-center gap-4 text-[13px] font-poppins text-black hidden">
          <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-start gap-2 ">
            <FiPhone size={16} />
            US{" "}
            <a href="tel:+1-972-256-8133" aria-label="Call +1-972-256-8133">
              +1-972-256-8133
            </a>
            ,{" "}
            <a href="tel:+14696661181" aria-label="Call (469) 666-1181">
              (469) 666-1181
            </a>
          </li>
          <li className="cursor-pointer hover:border-l-2 h-5 pl-1 border-red flex items-center gap-2 ">
            <MdOutlineEmail size={16} />
            <a href="mailto:info@thepatentdrawings.com">
              {" "}
              info@thepatentdrawings.com
            </a>
          </li>
        </ul>
      </div>

      <div className="justify-between items-center gap-4 flex flex-y-reverse">
        <div className="flex items-center gap-6  ">
          <div className="justify-between items-center gap-2  flex relative">
            <Link
              href={"/pay-invoice"}
    
              className="flex gap-2t text-white bg-red border-[1px] rounded py-1 px-2 font-poppins z-50"
            >
              Pay Invoice
            </Link>
            {item.length > 0 && (
              <span className="fixed  h-5 w-5 rounded-full bg-red text-white top-2 right-3 flex items-center justify-center text-sm">
                {item.length}
              </span>
            )}
          </div>
          <div className="justify-between items-center gap-2 flex relative">
            <Link href={"/cart"}  className="flex gap-2t text-red px-2 z-50">
              <MdOutlineShoppingCart size={30} />
            </Link>
            {item.length > 0 && (
              <span className="fixed  h-5 w-5 rounded-full bg-red text-white top-2 right-3 flex items-center justify-center text-sm">
                {item.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
