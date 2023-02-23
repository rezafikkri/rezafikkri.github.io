const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const currentTopics = require(`${process.cwd()}/data/topics.json`);

const postsDirectory = path.join(process.cwd(), 'data/writing');

function generateTopics(fileName) {
  // read markdown file as a string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use gray-matter to parse the post meta data section
  const { data: { topics } } = matter(fileContents);

  let newTopic = false;
  for (const topic of topics) {
    if (!currentTopics.topics.includes(topic)) {
      currentTopics.topics.push(topic);
      newTopic = true;
    }
  }

  if (newTopic) {
    fs.writeFileSync(`${process.cwd()}/data/topics.json`, JSON.stringify(currentTopics));
  }
}

generateTopics(process.env.FILE_NAME);
