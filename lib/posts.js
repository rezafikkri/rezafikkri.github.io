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

export function getLatestPosts() {
  // read JSON file
  const fullPath = path.join(`${process.cwd()}`, 'data/latestPosts.json');
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (err) {
    console.log(err);
  }
}

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'data/writing');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: { title, date } } = matter(fileContents);

    return { title, date };
  });

  // sorted post by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}
