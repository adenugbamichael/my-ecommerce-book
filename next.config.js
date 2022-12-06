/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ["localhost"],
  },
}

module.exports = nextConfig
