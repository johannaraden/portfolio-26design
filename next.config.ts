import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to /out,
  // which Netlify (or any static host) can serve as-is.
  output: "export",
  trailingSlash: true,
  images: {
    // Images are pre-optimised to WebP in /public/img, so no runtime optimiser is needed.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
