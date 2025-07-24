'use client'
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "../../assets/icons";
import GetInTouch from "../../organisms/GetInTouch";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import ConnectLogo from "../../assets/icons/CONNECT WITH OUR EXPERT.png";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from "next/link";

interface LINKS {
  name: string;
  path: string;
}

const PageTemplate: React.FC<any> = ({ links, pageName, children, height }) => {
  const [isExpand, setIsExpand] = useState<boolean>(true);
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth >= 768 ? true : false
  );
  const location = usePathname();

  // Throttle function
  function throttle(func: (...args: any[]) => void, limit: number) {
    let inThrottle: boolean;
    return function (...args: any[]) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }

  // Throttled resize handler
  const handleResize = throttle(() => {
    setIsMobileView(window.innerWidth >= 768 ? true : false);
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <main className="flex max-w-screen  ">
      <span
        className="block md:hidden fixed bg-white shadow-md rounded p-1 shadow-blue z-[100]"
        onClick={() => setIsMobileView(!isMobileView)}
      >
        {isMobileView ? <FcNext size={22} /> : <FcPrevious size={22} />}
      </span>
      {isMobileView && (
        <section className="md:w-[25vw] px-5  py-10   bg-white   w-[full] md:block  ">
          <div className={`  max-h-${height}`}>
            <h2
              onClick={() => setIsExpand(!isExpand)}
              className="bg-blue text-white text-[17px]  font-semibold py-3  flex justify-center px-3 items-center rounded-lg my-2  text-center uppercase"
            >
              {pageName} <IoIosArrowDown size={24} />
            </h2>
            {isExpand && (
              <ul className="flex flex-col text-[16px]  space-y-2 ">
                {links?.map((item: LINKS, index: number) => (
                  <Link
                  key={index}
                    onClick={() =>
                      setIsMobileView(
                        window.innerWidth >= 768 ? isMobileView : !isMobileView
                      )
                    }
                    href={item?.path}
                    // className={({ isActive }) =>
                    //   isActive
                    //     ? "text-red font-bold w-full bg-gray-200 rounded-lg border-[1px] border-blue  text-center uppercase"
                    //     : " w-full rounded-lg border-[1px] border-blue text-center uppercase"
                    // }
                  >
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-200 hover:rounded-lg w-full  "
                    >
                      {item?.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <Link
            href={"/contact-us"}
            className="mt-10 border-blue border-2 rounded-lg  p-2 md:p-4 flex flex-col items-center h-auto "
          >
            <h2 className="text-center font-semibold text-xl">
              Connect with our Experts
            </h2>
            <p className="text-sm p-2 text-center">
              These days are all share them with much more than a hunch.
            </p>
            {/* <Link
              to={`/product/${findIndexOfService(location.pathname)}`}
              className="border-[1px] rounded px-4 py-2 border-red hover:bg-red hover:text-white "
            >
              ORDER NOW
            </Link> */}
            <Image src={ConnectLogo} alt="ConnectLogo" className="w-16" />
          </Link>
        </section>
      )}
      <section className="md:w-[75vw] w-full   py-10 px-6  ">
        {children}
      </section>
      {/* <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
      <GetInTouch />
      {/* <OrderNowButton /> */}
    </main>
  );
};

export default PageTemplate;
