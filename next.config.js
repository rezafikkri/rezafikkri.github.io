/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
};

const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  const assetPrefix = `/${repo}/`;
  const basePath = `/${repo}`;

  nextConfig = { ...nextConfig, assetPrefix, basePath };
}

module.exports = nextConfig; 
