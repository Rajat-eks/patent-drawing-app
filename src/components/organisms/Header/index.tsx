"use client";
import React, { useState } from "react";
import Logo from "../../assets/logo/logo.jpg";
import { RiArrowDropDownLine } from "../../assets/icons/index";
// import SignIn from "../Auth/SignIn";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import TopHeader from "./TopHeader";
import Image from "next/image";
import Link from "next/link";
import SignIn from "../Auth/SignIn";

interface IndexProps {
  // define props here
}

interface HEADER {
  name?: string;
  child: { name?: string; link?: string }[];
  link?: string;
}

const headers: HEADER[] = [
  {
    name: "Home",
    child: [],
    link: "/",
  },
  {
    name: "About Us",
    child: [],
    link: "/our-company",
  },

  {
    name: "Illustration",
    link: "/services/utility-patent-drawings",
    child: [
      {
        name: "Utility Patent Drawings",
        link: "/services/utility-patent-drawings",
      },
      {
        name: "Design Patent Drawings",
        link: "/services/design-patent-drawings",
      },
      {
        name: "Objected Patent Drawings",
        link: "/services/objected-patent-drawings",
      },
      {
        name: "Trademark Drawings",
        link: "/services/trademark-drawings",
      },
      {
        name: "Chemical Structure",
        link: "/services/chemical-structure-drawings",
      },
      {
        name: "3D modeling",
        link: "/services/3d-modeling-drawings",
      },
      {
        name: "Trial Graphic Services",
        link: "/services/trial-graphic-services",
      },
    ],
  },
  {
    name: "Samples",
    child: [],
    link: "/patent-drawing-samples",
  },
  {
    name: "Our Work Process",
    child: [],
    link: "/work-process",
  },

  {
    name: "Pricing/Order Now",
    link: "/product",
    child: [
      {
        name: "Utility Patent Drawings",
        link: "/product/utility-patent-drawings",
      },
      {
        name: "Design Patent Drawings",
        link: "/product/design-patent-drawings",
      },
      {
        name: "Objected Patent Drawings",
        link: "/product/objected-patent-drawings",
      },
      {
        name: "Trademark Drawings",
        link: "/product/trademark-drawings",
      },
      {
        name: "Chemical Structure",
        link: "/product/chemical-structure-drawings",
      },
      {
        name: "3D modeling",
        link: "/product/3d-modeling-drawings",
      },
      {
        name: "Trial Graphic Services",
        link: "/product/trial-graphic-services",
      },
    ],
  },
  {
    name: "Resources",
    link: "/blog",
    child: [
      {
        name: "Articles",
        link: "/blog",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    child: [],
  },
];

const Header: React.FC<IndexProps> = () => {
  const [isSignInVisible, setIsSignInVisible] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const { item } = useSelector(
    (state: { cart: { item: string } }) => state.cart
  );

  return (
    <nav className="fixed w-full z-50 ">
      <TopHeader />
      <header className="flex items-center justify-between px-4 py-2  shadow-sm bg-white text-black   ">
        <Link href="/">
          <Image src={Logo} alt="logo" className="md:w-32 sm:w-28  w-24 " />
        </Link>
        <button
          onClick={() => setIsMobileView(!isMobileView)}
          className="block sm:hidden"
        >
          {!isMobileView ? (
            <GiHamburgerMenu size={21} />
          ) : (
            <RxCross2 size={22} />
          )}
        </button>
        <ul className=" flex-col md:flex-row md:items-center gap-8  font-header  text-[15px] hidden md:flex">
          {headers?.map(({ name, child, link }: HEADER, index: number) => {
            return (
              <>
                <li
                  key={index}
                  className="cursor-pointer  hover:border-b-2 border-red  text-black font-semibold group"
                >
                  <Link
                    href={link || "/"}
                    className="flex items-center justify-center text-[14px]"
                  >
                    {name}{" "}
                    {child?.length > 0 && <RiArrowDropDownLine size={25} />}
                  </Link>
                  {child?.length > 0 && (
                    <ul className="absolute z-10 rounded-b space-y-2 p-4 bg-white hidden group-hover:block text-black   shadow rounded">
                      {child?.map(({ name, link }: any, index: number) => {
                        return (
                          <li
                            className="hover:border-b-2 border-red text-[14px]"
                            key={index}
                          >
                            <Link href={link}>{name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              </>
            );
          })}
        </ul>
        {isMobileView && (
          <ul
            className={`flex flex-col items-start justify-start p-4 gap-4 fixed min-h-[40%] z-[200] w-full top-[102px] left-0 bg-white `}
          >
            {headers?.map(({ name, child, link }: HEADER, index: number) => {
              return (
                <>
                  <li
                    key={index}
                    className="cursor-pointer  hover:border-b-2 border-red text-[14px]  text-black font-semibold group"
                  >
                    <Link
                      href={link || "/"}
                      onClick={() => setIsMobileView(!isMobileView)}
                      className="flex items-center justify-center"
                    >
                      {name}{" "}
                      {child?.length > 0 && <RiArrowDropDownLine size={25} />}
                    </Link>
                    {child?.length > 0 && (
                      <ul className="absolute z-10 rounded-b space-y-2 p-4 bg-white hidden group-hover:block text-black   shadow rounded">
                        {child?.map(({ name, link }: any, index: number) => {
                          return (
                            <li
                              className="hover:border-b-2 border-red"
                              key={index}
                            >
                              <Link
                                href={link}
                                onClick={() => setIsMobileView(!isMobileView)}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        )}

        {isSignInVisible && <SignIn isClose={setIsSignInVisible} />}
      </header>
    </nav>
  );
};

export default Header;
