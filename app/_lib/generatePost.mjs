import path from 'path';
import inquirer from 'inquirer';
import { writeFileSync, readFileSync } from 'fs';
import slug from 'slug';
import dayjs from 'dayjs';
import { getTopics } from './posts.mjs';
import { Builder, parseStringPromise } from 'xml2js';

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
  const topics = getTopics();
  const { title, selectedTopics, newTopics, ogImage } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Judul:',
    },
    {
      type: 'checkbox',
      name: 'selectedTopics',
      message: 'Pilih Topik:',
      choices: topics,
    },
    {
      type: 'input',
      name: 'newTopics',
      message: 'Topik Baru (jika ada, pisah dengan koma):',
    },
    {
      type: 'input',
      name: 'ogImage',
      message: 'URL Gambar (untuk open graph):',
    },
  ]);
  const date = new Date().toISOString();
  const generatedSlug = slug(title);
  const arrNewTopics = newTopics.split(',');
  arrNewTopics.unshift(...selectedTopics);

  const content = `---\ntitle: "${title}"\ndate: "${date}"\ntopics: ["${arrNewTopics.join('","')}"]\nslug: "${generatedSlug}"\nogImage: "${ogImage}"\n---\n\n\nOke, terima kasih buat kamu yang sudah membaca, semoga bermanfaat. Jika ada yang ingin ditanyakan atau ada saran silahkan kirim email ke fikkri.reza@gmail.com. Jangan lupa follow twitter @RezaFikkri untuk mendapatkan tulisan terbaru.`;
  // wirte content to file
  writeFileSync(path.join(process.cwd(), 'posts', `${generatedSlug}.md`), content);

  // generate sitemap.xml
  generateSiteMap(generatedSlug, dayjs().format('YYYY-MM-DD'));
}

generatePost();
