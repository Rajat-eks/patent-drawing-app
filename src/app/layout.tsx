import type { Metadata } from "next";
import "./globals.css";
import DashboardLayout from "@/components/layout/dashboardLayout";

export const metadata: Metadata = {
  title: "PatDraw | Patent Drawing Services Company",
  description:
    "PatDraw, a leading patent drawing services company, delivers expert and mediatory support, ensuring precise and compliant patent illustrations for your inventions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>PatDraw | Patent Drawing Services Company</title>
        <link rel="canonical" href="https://thepatentdrawings.com/" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
          name="google-site-verification"
          content="GvjIPc4vu5zno_-xP8RuEDDBKffgrSLCO4-6vis1u04"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKEXFW0Z4F"
        ></script>

        <script
          src="//code.tidio.co/uplzcklxy5qk02tcd9t4wbq1weyxfodo.js"
          async
        ></script>
      </head>
      <body>
        <DashboardLayout>{children}</DashboardLayout>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}
