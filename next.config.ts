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
  
  // WSL2+Windows compatibility fixes
  webpack: (config, { dev }) => {
    if (dev) {
      // Improve file watching on WSL2
      config.watchOptions = {
        poll: 1000, // Check for changes every 1000ms
        aggregateTimeout: 300, // Delay before rebuilding after file change
        ignored: /node_modules/, // Don't watch node_modules
      };
    }
    return config;
  },
  
  // Development-only settings for WSL2 stability
  ...(process.env.NODE_ENV === "development" && {
    // Reduce memory usage and improve stability
    experimental: {
      appDir: true,
      typedRoutes: false,
    },
    // Disable SWC minification in dev to reduce crashes
    swcMinify: false,
  }),
};

export default nextConfig;
