import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getTopics() {
  // read JSON file
  const fullPath = path.join(`${process.cwd()}`, 'data/topics.json');
  const { topics } = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  return topics;
}

export function getSortedPosts() {
  const fullPath = path.join(process.cwd(), 'data/writing');
}
