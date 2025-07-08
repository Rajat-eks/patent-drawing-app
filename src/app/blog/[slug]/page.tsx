// app/blog/[slug]/page.tsx   ← route /blog/my‑post
import ArticleContent from "@/components/organisms/Article/ArticleContent";
import { buildMeta } from "@/lib/seo";
import { Metadata } from "next";

async function getArticleBySlug(slug: string) {
  const base = "https://api.thepatentdrawings.com/api/v1";

  const res = await fetch(`${base}/article/get-by-slug/${slug}`, {
    cache: "no-store",
  });
  if (!res.status) throw new Error("Failed to fetch article");
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return buildMeta({
    title: article.data.metaTitle,
    description: article.data.metaDescription,
    keywords: article.data.metaKeyword,
    canonical: `/blog/${slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return (
    <main>
      <ArticleContent data={article.data} />
    </main>
  );
}
