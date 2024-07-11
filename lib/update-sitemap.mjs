import path from 'path';
import input from '@inquirer/input';
import { writeFileSync, readFileSync } from 'fs';
import { Builder, parseStringPromise } from "xml2js";
import slug from 'slug';
import dayjs from 'dayjs';

async function updateSitemap() {
  const title = await input({
    type: 'input',
    name: 'title',
    message: 'Judul:',
  });
  const newTitle = await input({
    type: 'input',
    name: 'newTitle',
    default: title,
    message: 'Judul Baru:',
  });

  const fullPath = path.join(process.cwd(), 'app/blogs/sitemap.xml');
  const sitemap = readFileSync(fullPath, 'utf8');
  const sitemapParsed = await parseStringPromise(sitemap);
  const baseLoc = 'https://rezafikkri.github.io/blogs/';

  const newSitemap = sitemapParsed;
  sitemapParsed.urlset.url.forEach((sitemap, index) => {
    const { loc, lastmod } = sitemap;
    // if generated slug from inputed title = slug param in sitemap loc
    if (baseLoc + slug(title) == loc) {
      const newLastmod = dayjs().format('YYYY-MM-DD');
      // if title != newTitle
      if (title != newTitle) {
        const newLoc = baseLoc + newTitle;
        newSitemap.urlset.url[index] = { loc: newLoc, lastmod: newLastmod };
      } else {
        newSitemap.urlset.url[index] = { loc, lastmod: newLastmod };
      }
    }
  });

  // parse back new sitemap to xml and write to file
  const builder = new Builder({ xmldec: { 'version': '1.0', 'encoding': 'UTF-8'} });
  writeFileSync(fullPath, builder.buildObject(newSitemap));
}

updateSitemap();
