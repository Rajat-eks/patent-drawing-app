import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string; // fixed spelling
}

const siteUrl = "https://thepatentdrawings.com";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
}) => (
  <Head>
    <title>{title}</title>

    {/* Basic */}
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}

    {/* Canonical */}
    {canonical && <link rel="canonical" href={`${siteUrl}/${canonical}`} />}

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    {canonical && (
      <meta property="og:url" content={`${siteUrl}/${canonical}`} />
    )}
    <meta property="og:site_name" content="PatDraw" />
  </Head>
);

export default SEO;
