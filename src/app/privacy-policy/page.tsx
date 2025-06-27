import PrivacyPolicy from "@/components/organisms/PrivacyPolicy";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Read PatDraw's (Effectual Services) Privacy Policy to understand how we collect, use, and protect your data, ensuring your information's confidentiality and security.",
  keywords: "Privacy Policy",
  title: "Privacy Policy",
  canonical: "privacy-policy",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default page;
