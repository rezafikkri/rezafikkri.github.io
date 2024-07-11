import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkStringify from 'remark-stringify';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeAttrs from 'rehype-attr';
import strip from 'strip-markdown';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';

const dataDirectory = path.join(process.cwd(), 'data');

export function getTopics(topicIds = null) {
  const topics = readFileSync(path.join(dataDirectory, 'topics.json'), 'utf8');
  if (topicIds) {
    return JSON.parse(topics).filter(topic => topicIds.includes(topic.id));
  }
  return JSON.parse(topics);
}

export function getSerials() {
  const serials = readFileSync(path.join(dataDirectory, 'serials.json'), 'utf8');
  return JSON.parse(serials);
}

export function getTopicId(topicName) {
  const topics = readFileSync(path.join(dataDirectory, 'topics.json'), 'utf8');
  for (const topic of JSON.parse(topics)) {
    if (topic.name == topicName) return topic.id;
  }
  return null;
}

// options for generate excerpt
function generateExcerpt(file) {
  const splittedContent = file.content.split('<!-- excerpt -->');
  const excerpt = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(strip);
  file.excerpt = String(excerpt.processSync(splittedContent[1]));
  // clean content
  file.content = splittedContent.join('');
}

export function getPosts(topicId = null) {
  const fileNames = readdirSync(path.join(dataDirectory, 'posts'));

  let posts = [];

  for (const fileName of fileNames) {
    // Read markdown file as string
    const fullPath = path.join(dataDirectory, 'posts', fileName);
    let fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const {
      data: {
        title,
        date, 
        topics,
        slug,
        id
      },
      excerpt
    } = matter(fileContents, {excerpt: generateExcerpt});

    // if topic is no null
    if ((topicId !== null && topics.includes(topicId)) || topicId === null) {
      posts.push({ title, date, slug, id, excerpt });
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
  // get 5 latest posts
  const posts = getPosts();
  return posts.slice(0, 5);
}

export function getPostsByTopic(topic) {
  return getPosts(topic);
}

export function getPost(slug) {
  const fullPath = path.join(dataDirectory, `posts/${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {excerpt: generateExcerpt});

  // Use unifiedjs to convert markdown into HTML
  const contentHTML = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDefinitionList)
    .use(remarkRehype, {
      allowDangerousHtml: true,
      handlers: {
        // any other handlers
        ...defListHastHandlers,
      }
    })
    .use(rehypeRaw)
    .use(rehypeAttrs, { properties: 'attr' })
    .use(rehypeStringify)
    .processSync(matterResult.content)

  return {
    contentHTML: String(contentHTML),
    ...matterResult.data,
    excerpt: matterResult.excerpt,
  };
}

export function getSlugs() {
  const fileNames = readdirSync(path.join(dataDirectory, 'posts'));

  return fileNames.map(fileName => ({slug: fileName.replace(/\.md$/, '')}));
}

export function getPostsBySerialId(serialId) {
  const fileNames = readdirSync(path.join(dataDirectory, 'posts'));

  let posts = [];

  for (const fileName of fileNames) {
    // Read markdown file as string
    const fullPath = path.join(dataDirectory, 'posts', fileName);
    let fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: { title, slug, serial, id } } = matter(fileContents);

    // if topic is no null
    if (serial != undefined && serial.id == serialId) {
      posts.push({ title, slug, order: serial.order, id });
    }
  }

  // sorted post by date
  return posts.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    return 1;
  });
}
