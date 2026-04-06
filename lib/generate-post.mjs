import path from 'path';
import { writeFileSync, readFileSync } from 'fs';
import slug from 'slug';
import dayjs from 'dayjs';
import { getTopics, getPostsBySerialId, getSerials } from './posts.mjs';
import { Builder, parseStringPromise } from 'xml2js';
import input from '@inquirer/input';
import checkbox from '@inquirer/checkbox';
import confirm from '@inquirer/confirm';
import select from '@inquirer/select';
import number from '@inquirer/number';
import { randomUUID } from 'crypto';
import { getUnixTimestamp } from './utils.mjs';

const dataDirectory = path.join(process.cwd(), 'data');

async function generateTopics() {  
  const oldTopics = getTopics();
  let selectedTopics = [];
  if (oldTopics.length > 0) {
    selectedTopics = await checkbox({
      message: 'Pilih Topik:',
      choices: oldTopics.map(topic => ({ name: topic.name, value: topic.id })),
      loop: false,
    });
  }
  let newTopics = await input({ message: 'Topik Baru (jika ada, pisah dengan koma):' });
  newTopics = newTopics.trim() == '' ? [] : newTopics.split(',');
  if (newTopics.length > 0) {
    newTopics = newTopics.map(topic => {
      const topicId = randomUUID();
      return {
        id: topicId,
        name: topic,
        slug: slug(topic),
      };
    });
  }

  // wirte topics to file
  writeFileSync(
    path.join(dataDirectory, 'topics.json'),
    JSON.stringify([...oldTopics, ...newTopics])
  );
  
  const newTopicIds = newTopics.map(topic => topic.id);
  return [...selectedTopics, ...newTopicIds];
}

async function generateSerial() {
  const isSerial = await confirm({ message: 'Serial?' });
  if (isSerial) {
    // generate serial name
    const oldSerials = getSerials();
    let serialId = null;
    if (oldSerials.length > 0) {
      const choices = oldSerials.map(serial => ({ name: serial.name, value: serial.id }));
      choices.push({ name: 'none', value: 'none' });
        
      serialId = await select({
        message: 'Pilih nama serial (pilih none jika tidak ada):',
        choices,
      });
    }
    if(oldSerials.length == 0 || serialId == 'none') {
      const serialName = await input({ message: 'Serial Name (new):' });
      
      if (serialName.trim() != '') {
        serialId = randomUUID();
        // wirte serial to file
        writeFileSync(
          path.join(dataDirectory, 'serials.json'),
          JSON.stringify([...oldSerials, { id: serialId, name: serialName }])
        );
      }
    }
    
    return {
      id: serialId,
      order: getPostsBySerialId(serialId).length + 1
    };
  }
  return null;
}

async function generatePost() {
  const title = await input({ message: 'Judul:' });
  // generate topics
  const topicIds = await generateTopics();

  // genarete ogImage
  const ogImage = await input({ message: 'URL gambar (untuk open graph):' });
  let ogImageWidth;
  let ogImageHeight;
  if (ogImage.trim() !== '') {
    ogImageWidth = await number({ message: 'Open graph image width:' });
    ogImageHeight = await number({ message: 'Open graph image height:' });
  }

  // generate serial
  const serial = await generateSerial();

  // other data
  const lastmod = getUnixTimestamp(); // in second format
  const newSlug = slug(title);
  const postId = randomUUID();

  let content = `---\nid: "${postId}"\ntitle: "${title}"\nlastmod: ${lastmod}\ntopics: ["${topicIds.join('","')}"]\nslug: "${newSlug}"\nogImage: "${ogImage}"\nogImageWidth: ${ogImageWidth ?? ''}\nogImageHeight: ${ogImageHeight ?? ''}\n`;
  if (serial) {
    content += `serial: ${JSON.stringify(serial)}\n---\n`;
  } else {
    content += '---\n';
  }
  content += '\n\nOke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow Linkedin saya di [in/reza-sariful-fikri](https://www.linkedin.com/in/reza-sariful-fikri) untuk mendapatkan tulisan terbaru. Serta jangan lupa baca artikel dan tutorial saya lainnya pada halaman Blog dengan mengklik menu Blog pada navbar atau footer.\n';
  content += '\nKamu bisa juga berdonasi melalui [Saweria](https://saweria.co/rezafikkri) untuk mendukung saya.';
  // wirte content to file
  writeFileSync(path.join(process.cwd(), 'data/posts', `${newSlug}.md`), content);
}

generatePost();
