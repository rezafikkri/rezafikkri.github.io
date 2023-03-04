import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getTopics() {
  const fileNames = fs.readdirSync(postsDirectory);
  let allTopics = new Set(); // object that store unique value

  fileNames.map(fileName => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName));
    const { data: { topics } } = matter(fileContents);
    // add topic to allTopics
    topics.forEach(topic => allTopics.add(topic));
  });

  return Array.from(allTopics);
}

export function getPosts(topic = null) {
  const fileNames = fs.readdirSync(postsDirectory);

  let posts = [];

  for (const fileName of fileNames) {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: { title, date, topics } } = matter(fileContents);

    // if topic is no null
    if ((topic !== null && topics.includes(topic)) || topic === null) {
      posts.push({ title, date });
    }
  }

  // sorted post by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  }); 
}

export function getLatestPosts() {
  // get 7 latest posts
  const posts = getPosts();
  return posts.slice(0, 7);
}

export function getPostsByTopic(topic) {
  return getPosts(topic);
}
