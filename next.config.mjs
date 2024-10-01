/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@shared"] = path.resolve(
      __dirname,
      "../packages/shared"
    );
    return config;
  },
};

export default nextConfig;
