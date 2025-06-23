import Head from "next/head";
import React from "react";

interface IndexProps {
  title: string;
  description: string;
  keywords: string;
  conanical?: string;
}

const SEO: React.FC<IndexProps> = ({
  description,
  keywords,
  title,
  conanical,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link
        rel="canonical"
        href={`https://thepatentdrawings.com/${conanical}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://thepatentdrawings.com/${conanical}`}
      />
      <meta property="og:site_name" content="PatDraw" />
      
    </Head>
  );
};

export default SEO;
