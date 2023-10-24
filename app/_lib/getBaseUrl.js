export default function getBaseUrl() {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  let baseUrl = '';
  if (isGithubActions) {
    baseUrl = 'https://rezafikkri.github.io';
  }
  return baseUrl;
}
