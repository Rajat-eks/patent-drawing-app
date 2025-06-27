import Contact from "@/components/organisms/Contact";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}
export const metadata = buildMeta({
  description:
    "To schedule time to speak with one of our sales representives, complete the form, then click next to choose a date and time that works for you.",
  keywords:
    "Submit a Request, Contact Us, Free Consultation, Schedule A Meeting",
  title: "Submit a Request | PatDraw",
  canonical: "contact-us",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default page;
