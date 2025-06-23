'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IndexProps {
  // define props here
  article: any;
}

const Card: React.FC<IndexProps> = ({ article }) => {
  return (
    <Link
      href={`/blog/${article?.articleSlug}`}
      className="rounded border-[1px] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-100"
    >
      <div className="p-2 flex items-center gap-4">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt="user"
          width={40}
          height={100}
        />
        <div>
          <h3 className="text-blue text-[16px]">By Patdraw</h3>
          <h6 className="text-red text-[13px]">{article?.articleDate}</h6>
        </div>
      </div>
      <section>
        <div>
          <Image
            src={article?.filePath}
            alt={article?.heading}
            className="w-full"
             width={100}
            height={100}
          />
        </div>
        <div className="py-8 px-2">
          <h2 className="text-xl text-blue font-semibold">
            {article?.articleHeading}
          </h2>
          <p
            className="text-[13px] text-justify pt-2 w-full"
            dangerouslySetInnerHTML={{
              __html:
                article?.html?.slice(0, 260).replace(/\n/g, "<br>") + "...",
            }}
          ></p>
        </div>
      </section>
    </Link>
  );
};

export default Card;
