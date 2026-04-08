import type { NextConfig } from "next";

/** Set in CI for GitHub Pages project sites (repo name segment), e.g. `/portfolio`. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: { unoptimized: true },
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
