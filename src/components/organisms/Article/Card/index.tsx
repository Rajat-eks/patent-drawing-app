"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

interface IndexProps {
  // define props here
  article: {
    articleSlug: string;
    articleHeading: string;
    heading: string;
    articleId: number;
    articleDate: string;
    filePath: string;
    html:  string;
  };
}

const Card: React.FC<IndexProps> = ({ article }) => {
  return (
    <Link
      href={`/blog/${article?.articleSlug}`}
      className="rounded border-[1px] border-[#083B95]  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-100"
    >
      <div className="p-2 flex items-center gap-4">
        <span className="w-10 h-10 rounded-full border-[1px] border-[#083B95] flex items-center justify-center">
          {" "}
          <FiUser size={25} color="#083B95" />
        </span>
        <div>
          <h3 className="text-blue text-[16px]">By Patdraw</h3>
          <h6 className="text-red text-[13px]">{article?.articleDate}</h6>
        </div>
      </div>
      <section>
        <div className="relative w-full aspect-video">
          {" "}
          {/* Or any aspect ratio */}
          <Image
            src={article?.filePath}
            alt={article?.heading}
            fill
            className="object-fill"
          />
        </div>
        <div className="py-8 px-2">
          <h2 className="text-xl text-blue font-semibold">
            {article?.articleHeading}
          </h2>
          <p
            className="text-[14px] text-justify pt-2 w-full"
            dangerouslySetInnerHTML={{
              __html:
                article.html ? article.html?.slice(0, 200).trimStart() +
                // 🔥 removes leading spaces
                "..." : "",
            }}
          ></p>
        </div>
      </section>
    </Link>
  );
};

export default Card;
