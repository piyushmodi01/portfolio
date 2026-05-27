import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack root to this project to silence the multi-lockfile warning.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
