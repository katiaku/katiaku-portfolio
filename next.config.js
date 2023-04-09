/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  // Export the site as a static site
  target: "experimental-serverless-trace",
  // Specify the output directory for the exported files
  output: {
    path: `${__dirname}/out`,
    publicPath: "katiaku.github.io",
  },
};
