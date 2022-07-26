/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  pwa: {
    disable: true,
    dest: 'public',
  },
  typescript: {},
  distDir: '.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./lib/variables.scss";`,
  },
  trailingSlash: true,
};
