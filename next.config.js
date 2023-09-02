/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_API: process.env.BASE_API_KEY,
  },
};

module.exports = nextConfig;
