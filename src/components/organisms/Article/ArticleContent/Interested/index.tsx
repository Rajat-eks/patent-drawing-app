'use client'
import React, { useEffect, useState } from "react";
import { GetAllArticle } from "../../../../../services/article/get-article.service";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Interested: React.FC<IndexProps> = (props) => {
  const [articles, setAticles] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllArticle();
        setAticles(response?.data);
      } catch (error) {
        throw new Error("Error when fetch Articles");
      }
    })();
  }, []);
  return (
    <main>
      <div className="flex flex-col items-start bg-[#F5F7FC] p-2 border-[1px]">
        <h3 className="text-xl text-center p-2 border-b-[1px] w-full">
          You might be interested in
        </h3>

        <hr />

        <ul className="p-2 flex flex-col space-y-2">
          {articles?.map((article: any,index:number) => (
            <Link key={index} href={`/blog/${article.articleSlug}`}>
              <li className="flex flex-col  bg-white p-3 space-y-1">
                <p className="text-[15px]">{article?.articleHeading}</p>
                <span className="text-gray-500 text-[13px]">
                  {article?.articleDate}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Interested;
