"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import ArticleBanner from "../../assets/img/article/article-banner.png";
import { GetAllArticle } from "../../../services/article/get-article.service";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const Article: React.FC<IndexProps> = () => {
  const [articles, setAticles] = useState([]);

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
    <section>
    
      <section>
        <div className="h-[40vh] w-full relative">
          <Image
            src={ArticleBanner}
            alt="ArticleBanner"
            className="w-full"
           fill
           priority
          />
        </div>
        <div className="absolute top-60 left-20 text-3xl font-bold text-white flex items-center justify-between">
          <h1>Articles/ Blogs</h1>
        </div>
      </section>
      {!articles.length && (
        <div className=" p-10 text-blue text-2xl">Loading...</div>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
        {articles?.map((article: any,index:number) => (
          <Card key={index} article={article} />
        ))}
      </section>
    </section>
  );
};

export default Article;
