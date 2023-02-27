import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getTopics() {
  // read JSON file
  const fullPath = path.join(`${process.cwd()}`, 'data/topics.json');
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

export function getPosts() {
  const fullPath = path.join(process.cwd(), 'data/writing');
}
