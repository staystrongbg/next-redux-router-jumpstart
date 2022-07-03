/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: 'http://localhost:3000/api',
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
