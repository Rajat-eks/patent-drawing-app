import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import DashboardLayout from "@/components/layout/dashboardLayout";

export const metadata: Metadata = {
  title: "PatDraw | Patent Drawing Services Company",
  description:
    "PatDraw, a leading patent drawing services company, delivers expert and mediatory support, ensuring precise and compliant patent illustrations for your inventions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thepatentdrawings.com/" />
        <meta
          name="google-site-verification"
          content="GvjIPc4vu5zno_-xP8RuEDDBKffgrSLCO4-6vis1u04"
        />
      </head>
      <body>
        <DashboardLayout>{children}</DashboardLayout>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r4il5v2zd6");
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKEXFW0Z4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZKEXFW0Z4F');
          `}
        </Script>

        {/* Tidio */}
        <Script
          src="https://code.tidio.co/uplzcklxy5qk02tcd9t4wbq1weyxfodo.js"
          strategy="afterInteractive"
        />

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}