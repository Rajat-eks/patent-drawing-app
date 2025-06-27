const siteUrl = "https://thepatentdrawings.com";

interface MetaArgs {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
}
export function buildMeta({
  title,
  description,
  keywords,
  canonical,
}: MetaArgs) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonical ? `${siteUrl}/${canonical}` : undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical ? `${siteUrl}/${canonical}` : siteUrl,
      siteName: "PatDraw",
      type: "website",
    },
  };
}
