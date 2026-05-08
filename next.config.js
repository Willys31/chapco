const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack config
  webpack: (config) => {
    // Ensure single React instance to avoid "Class extends undefined" error
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve('./node_modules/react-dom');
    config.resolve.alias['react/jsx-runtime'] = path.resolve('./node_modules/react/jsx-runtime');
    config.resolve.alias['react/jsx-dev-runtime'] = path.resolve('./node_modules/react/jsx-dev-runtime');

    return config;
  },

  // Disable image optimization for dev (re-enable with proper remotePatterns in prod)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
