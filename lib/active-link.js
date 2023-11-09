export default function activeLink(href, pathName) {
  const regex = new RegExp(`${href}*`);

  if (regex.test(pathName)) return 'text-ajwa-blue';
}
