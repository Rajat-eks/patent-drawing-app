import RefundPolicy from "@/components/organisms/RefundPolicy";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Read PatDraw's (Effectual Services) Privacy Policy to understand how we collect, use, and protect your data, ensuring your information's confidentiality and security.",
  keywords: "Refund Policy",
  title: "Refund Policy| PatDraw",
  canonical: "refund-policy",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default page;
