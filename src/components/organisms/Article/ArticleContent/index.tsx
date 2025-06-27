"use client";
import React, { useEffect, useState } from "react";
import Inquiry from "./Inquiry";
import Interested from "./Interested";
import ArticleBanner from "../../../assets/img/article/article-banner.png";
import { GetArticleBySlug } from "../../../../services/article/get-article-by-slug.service";
import Image from "next/image";
import { useParams } from "next/navigation";

const ArticleContent = () => {
  const { slug }: any = useParams();
  const [article, setArticle] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await GetArticleBySlug(slug);
        setArticle(response?.data);
      } catch (error) {
        throw new Error("Error when fetching article");
      }
    })();
  }, [slug]);

  return (
    <main className="min-h-[100vh]">
    
      <section className="h-[40vh] w-full">
        <div className="relative h-full w-full">
          <Image
            src={ArticleBanner}
            alt="back-out"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute z-10 top-[180px] left-10 text-white text-3xl">
          <h2 className="font-bold py-1 text-4xl ">Articles</h2>
          <h6 className="text-3xl">{article?.metaTitle}</h6>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-start ">
        <section className="md:w-[70%] w-[100%] p-10">
          {!article && <div className="text-blue text-2xl">Loading...</div>}

          <div className="space-y-5">
            <h1 className="text-xl font-semibold">{article?.articleHeading}</h1>
            <span className="text-red text-[13px]">{article?.articleDate}</span>
          </div>
          {article && (
            <div className="py-3">
              <Image
                src={article.filePath}
                alt={article.articleHeading}
                className="rounded-xl"
                width={1000}
                height={100}
              />
            </div>
          )}
          <section>
            <p
              className="text-[13px] text-justify pt-2 w-full"
              dangerouslySetInnerHTML={{
                __html: article?.html,
              }}
            ></p>
          </section>
        </section>

        {/* Right Sidebar */}
        <section className="md:w-[30%] w-full py-6 px-2 md:h-[40vh] ">
          <div className="mb-8 ">
            {/* Interested component stays fixed in place */}
            <Interested />
          </div>

          {/* Sticky Inquiry Component */}
          <div
            id="freeze"
            className="py-8 sticky top-0"
            style={{
              zIndex: 10,
              backgroundColor: "white", // Ensures visibility of the sticky element
            }}
          >
            <Inquiry />
          </div>
        </section>
      </section>
    </main>
  );
};

export default ArticleContent;
