const nextConfig = {
  reactStrictMode: true,
  env: {
    graphql: "http://localhost:12000/graphql",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
