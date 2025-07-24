import React, { useEffect, useState } from "react";
import Inquiry from "../ArticleContent/Inquiry";
import Interested from "../ArticleContent/Interested";
import ArticleBanner from "../../../assets/img/article/article-banner.png";
import { GetArticleBySlug } from "../../../../services/article/get-article-by-slug.service";
import SEO from "../../../common/SEO";
import { articleList } from "../../../../data/article";
import Image from "next/image";

const Blog1 = () => {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await GetArticleBySlug(slug);
  //       setArticle(response?.data);
  //     } catch (error) {
  //       throw new Error("Error when fetching article");
  //     }
  //   })();
  // }, [slug]);
  // console.log("article", article);

  return (
    <main className="min-h-[100vh]">
      <SEO
        description={articleList[0].metaDescription}
        keywords={articleList[0].metaKeyword}
        title={articleList[0].metaTitle}
      />
      <section className="h-[40vh] w-full">
        <div className="relative h-full w-full">
          <Image
            src={ArticleBanner}
            alt={articleList[0].metaTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute z-10 top-[180px] left-10 text-white text-3xl">
          <h2 className="font-bold py-1 text-4xl ">Articles</h2>
          <h6 className="text-3xl">{articleList[0]?.metaTitle}</h6>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start ">
        <section className="md:w-[70%] w-[100%] p-10">
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">
              {articleList[0]?.articleHeading}
            </h1>
            <span className="text-red text-[13px]">
              {articleList[0]?.articleDate}
            </span>
          </div>
          <div className="py-3">
            <Image
              src={articleList[0]?.filePath}
              alt={articleList[0]?.articleHeading}
              className="rounded-xl"
            />
          </div>
          <section>
            <div
              className="text-[13px] text-justify pt-2 w-full"
              dangerouslySetInnerHTML={{
                __html: articleList[0]?.html,
              }}
            ></div>
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

export default Blog1;
