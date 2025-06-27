import ServiceLayout from "@/components/layout/serviceLayout";
import DesignPatent from "@/components/organisms/Services/DesignPatent";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}
export const metadata = buildMeta({
  description:
    "Get expert design patent drawings with our reliable design patent drawings services, ensuring precision and timely delivery for your innovation.",
  keywords: "Design Patent Drawings, Design Patent Drawing Services",
  title: "Design Patent Drawings | Design Patent Drawing Services",
  canonical: "services/design-patent-drawings",
});
const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>
        <DesignPatent />
      </ServiceLayout>
    </main>
  );
};

export default page;
