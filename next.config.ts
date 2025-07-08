import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "static.vecteezy.com",
      "https://tpd-server-xe10.onrender.com",
      "ftp-bucket-s3-upload.s3-accelerate.amazonaws.com",
      "tpd-server-xe10.onrender.com",
    ], // ✅ add the domain here
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This is what you want
  },
};

export default nextConfig;
