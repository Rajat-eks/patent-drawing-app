import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.thepatentdrawings.com",
      "static.vecteezy.com",
      "https://tpd-server-xe10.onrender.com",
      "ftp-bucket-s3-upload.s3-accelerate.amazonaws.com",
      "tpd-server-xe10.onrender.com",
    ], // ✅ add the domain here
  },
  

  async redirects() {
    return [
      {
        source: "/our_company",
        destination: "/our-company",
        permanent: true,
      },
      {
        source: "/contact_us",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
