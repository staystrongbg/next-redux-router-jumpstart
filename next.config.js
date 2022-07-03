/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: 'http://localhost:3000/ap',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  /*
  ***to use next/Image in SSG 
  images: {
    disableStaticImages: false,
    loader: 'custom',
  *** refresh dynamic pages
  trailingSlash: true,
  },*/
};

module.exports = nextConfig;
