/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org", "cdn.pixabay.com", "www.iconspng.com"],
  },
};

module.exports = nextConfig;
