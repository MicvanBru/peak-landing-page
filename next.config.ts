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
      
      // Disable problematic webpack caching in WSL2 development
      // This prevents the .pack.gz corruption issues
      config.cache = {
        type: 'memory', // Use memory cache instead of filesystem
        maxGenerations: 1, // Limit cache generations to prevent memory bloat
      };
      
      // Additional WSL2 filesystem optimizations
      config.snapshot = {
        managedPaths: [], // Don't snapshot managed paths in WSL2
        immutablePaths: [], // Don't snapshot immutable paths
        buildDependencies: {
          hash: true,
          timestamp: true,
        },
        module: {
          timestamp: true,
          hash: true,
        },
        resolve: {
          timestamp: true,
          hash: true,
        },
        resolveBuildDependencies: {
          timestamp: true,
          hash: true,
        },
      };
    }
    return config;
  },
  
  // Development-only settings for WSL2 stability
  ...(process.env.NODE_ENV === "development" && {
    // Configure typed routes
    typedRoutes: false,
  }),
};

export default nextConfig;
