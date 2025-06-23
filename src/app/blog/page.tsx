"use client";
import Article from "@/components/organisms/Article";
import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Article />
    </main>
  );
};

export default page;
