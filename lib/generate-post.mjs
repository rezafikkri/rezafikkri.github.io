import path from 'path';
import { writeFileSync, readFileSync } from 'fs';
import slug from 'slug';
import dayjs from 'dayjs';
import { getTopics, getSerialNames, getPostsBySerialName } from './posts.mjs';
import { Builder, parseStringPromise } from 'xml2js';
import input from '@inquirer/input';
import checkbox from '@inquirer/checkbox';
import confirm from '@inquirer/confirm';
import select from '@inquirer/select';

async function generateSiteMap(slug, lastmod) {
  const fullPath = path.join(process.cwd(), 'public/sitemap.xml');
  const sitemap = readFileSync(fullPath, 'utf8');
  const sitemapParsed = await parseStringPromise(sitemap);

  sitemapParsed.urlset.url.push({
    loc: `https://rezafikkri.github.io/blogs/${slug}`,
    lastmod
  });
  
  // parse back sitemapParsed to xml and write file to sitemap.xml
  const builder = new Builder();
  writeFileSync(fullPath, builder.buildObject(sitemapParsed));
}

async function generatePost() {
  const topics = getTopics().map(topic => ({ name: topic, value: topic }));

  // get value from command line
  const title = await input({ message: 'Judul:' });
  const selectedTopics = await checkbox({
    message: 'Pilih Topik:',
    choices: topics,
  });
  const newTopics = await input({ message: 'Topik Baru (jika ada, pisah dengan koma):' });
  const ogImage = await input({ message: 'URL gambar (untuk open graph):' }); 

  // serial
  const isSerial = await confirm({ message: 'Serial?' });
  let serial = null;
  if (isSerial) {
    // generate serial name
    const serialNames = getSerialNames();
    let serialName = null;
    if (serialNames.length > 0) {
      serialNames.push('none');
      serialName = await select({
        message: 'Pilih nama serial (pilih none jika tidak ada):',
        choices: serialNames.map(name => ({ name: name, value: name })),
      });
    }
    if(serialNames.length == 0 || serialName == 'none') {
      serialName = await input({ message: 'Serial Name (new):' });
    }
    
    serial = {
      name: serialName,
      order: getPostsBySerialName(serialName).length + 1
    };
  }

  const date = new Date().toISOString();
  const generatedSlug = slug(title);
  const arrNewTopics = newTopics.trim() == '' ? [] : newTopics.split(',');
  arrNewTopics.unshift(...selectedTopics);

  let content = `---\ntitle: "${title}"\ndate: "${date}"\ntopics: ["${arrNewTopics.join('","')}"]\nslug: "${generatedSlug}"\nogImage: "${ogImage}"\n`;
  if (isSerial) {
    content += `serial: ${JSON.stringify(serial)}\n---\n`;
  } else {
    content += '---\n';
  }
  content += '\n\nOke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow twitter @RezaFikkri untuk mendapatkan tulisan terbaru.';
  // wirte content to file
  writeFileSync(path.join(process.cwd(), 'posts', `${generatedSlug}.md`), content);

  // generate sitemap.xml
  generateSiteMap(generatedSlug, dayjs().format('YYYY-MM-DD'));
}

generatePost();
