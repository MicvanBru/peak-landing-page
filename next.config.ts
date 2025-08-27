import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/peak-landing-page",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
