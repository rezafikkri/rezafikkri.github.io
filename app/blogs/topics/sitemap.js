import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import getBaseUrl from '@/lib/get-base-url';

const dataDirectory = path.join(process.cwd(), 'data');

export const dynamic = 'force-static';

export default function sitemap() {
  const topics = JSON.parse(readFileSync(path.join(dataDirectory, 'topics.json'), 'utf8'));

  return topics.map(topic => ({
    url: `${getBaseUrl()}/blogs/topics/${topic.slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
}
