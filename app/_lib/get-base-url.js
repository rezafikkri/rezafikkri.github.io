export default function getBaseUrl() {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  let baseUrl = 'http://localhost:3000';
  if (isGithubActions) {
    baseUrl = 'https://rezafikkri.github.io';
  }
  return baseUrl;
}
