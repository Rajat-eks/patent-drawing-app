import ServiceLayout from "@/components/layout/serviceLayout";
import TrademarkDrawing from "@/components/organisms/Services/TrademarkDrawing";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Secure your brand with precise trademark drawings through our professional trademark drawing services, delivering accurate and timely visual representations.",
  keywords:
    "Trademark Drawings, Trademark Drawing Services",
  title: "Trademark Drawings | Trademark Drawing Services",
  canonical: "services/trademark-drawings",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <TrademarkDrawing />
      </ServiceLayout>
    </main>
  );
};

export default page;
