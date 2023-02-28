const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const currentTopics = require(`${process.cwd()}/data/topics.json`);
const currentLatestPostList = require(`${process.cwd()}/data/latestPosts.json`);

function generateTopics(fileName) {
  // read markdown file as a string
  const fullPath = path.join(process.cwd(), 'data/writing', fileName);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // use gray-matter to parse the post meta data section
    const { data: { topics } } = matter(fileContents);

    let newTopic = false;
    for (const topic of topics) {
      if (!currentTopics.includes(topic)) {
        currentTopics.push(topic);
        newTopic = true;
      }
    }

    if (newTopic) {
      fs.writeFileSync(`${process.cwd()}/data/topics.json`, JSON.stringify(currentTopics));
    } 
  } catch (err) {
    console.log(err.message);
  }
}

function inArray(haystack, needle) {
  for (const hay of haystack) {
    if (hay.title === needle) return true;
  }
  return false;
}

function generateLastestPostList(fileName) {
   // read markdown file as a string
  const fullPath = path.join(process.cwd(), 'data/writing', fileName);

  try { 
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // use gray-matter to parse the post meta data section
    const { data: { title, date } } = matter(fileContents);

    // if post doesn't exist
    if (!inArray(currentLatestPostList, title)) {
      // add new latest post to list
      currentLatestPostList.unshift({ title, date });
      // if latest post list greater than 7, remove last post from latest post list
      if (currentLatestPostList.length > 7) currentLatestPostList.pop();
      // write updated latestPostList to json file
      fs.writeFileSync(`${process.cwd()}/data/latestPosts.json`, JSON.stringify(currentLatestPostList));
    }
  } catch (err) {
    console.log(err.message);
  }
}

generateTopics(process.env.FILE_NAME);
generateLastestPostList(process.env.FILE_NAME);
