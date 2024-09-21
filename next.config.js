/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3010",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**/*",
      },
    ],
  },
  output: "standalone",
};

export default config;
