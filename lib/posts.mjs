import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeAttrs from 'rehype-attr';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getTopics() {
  const fileNames = readdirSync(postsDirectory);
  let allTopics = new Set(); // object that store unique value

  fileNames.map(fileName => {
    const fileContents = readFileSync(path.join(postsDirectory, fileName));
    const { data: { topics } } = matter(fileContents);
    // add topic to allTopics
    topics.forEach(topic => allTopics.add(topic));
  });

  return Array.from(allTopics);
}

export function getPosts(topic = null) {
  const fileNames = readdirSync(postsDirectory);

  let posts = [];

  for (const fileName of fileNames) {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: { title, date, topics, slug } } = matter(fileContents);

    // if topic is no null
    if ((topic !== null && topics.includes(topic)) || topic === null) {
      posts.push({ title, date, slug });
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

function excerpt(file, options) {
  const splittedContent = file.content.split('<!-- excerpt -->');
  file.excerpt = splittedContent[1];
  // clean content
  file.content = splittedContent.join('');
}

export function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {excerpt});

  // Use unifiedjs to convert markdown into HTML
  const contentHTML = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeAttrs, { properties: 'attr' })
    .use(rehypeStringify)
    .processSync(matterResult.content)
    .toString();

  return {
    contentHTML,
    ...matterResult.data,
    excerpt: matterResult.excerpt,
  };
}

export function getSlugs() {
  const fileNames = readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
