const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    //config.resolve.alias['@uniswap/conedison/provider/signing'] = path.join(__dirname, 'node_modules/@uniswap/conedison/dist/provider/signing');
    //config.resolve.alias['@uniswap/conedison/format'] = '@uniswap/conedison/dist/format';
    //console.log(config.resolve.alias);
    return config;
  }
};

module.exports = nextConfig;
