// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};
