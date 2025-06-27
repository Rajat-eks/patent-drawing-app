import InvoiceGenerator from "@/components/organisms/InvoiceGenerator";
import { buildMeta } from "@/lib/seo";
import React from "react";

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Securely pay invoices with PatDraw's streamlined online system, ensuring quick and efficient transactions for your drawing needs.",
  keywords:
    "Pay Invoice, Make a Payment",
  title: "Pay Invoice |PatDraw",
  canonical: "pay-invoice",
});

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <InvoiceGenerator />
    </main>
  );
};

export default page;
