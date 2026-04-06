import getBaseUrl from '@/lib/get-base-url';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDirectory = path.join(process.cwd(), 'data');

export const dynamic = 'force-static';

export default function sitemap() {
  const fileNames = readdirSync(path.join(dataDirectory, 'posts'));
  const posts = [];

  for (const fileName of fileNames) {
    // Read markdown file as string
    const fullPath = path.join(dataDirectory, 'posts', fileName);
    let fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: { lastmod, slug } } = matter(fileContents);

    posts.push({ lastmod, slug });
  }

  return posts.map(post => ({
    url: `${getBaseUrl()}/blogs/${post.slug}`,
    lastModified: new Date(post.lastmod * 1000),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));
}
