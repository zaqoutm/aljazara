import { AljazaraArticleMd } from '@/serviecs/AljazaraArticleMd';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';

let allArticlesCache: AljazaraArticleMd[];
const postsDirectory = path.join(process.cwd(), 'data/posts');

export async function getAllArticles() {
  if (process.env.NODE_ENV === 'development') {
    return await readAllArticlesFromDisk();
  }

  // to decrease readings at build time
  if (!allArticlesCache) {
    console.log('Init articles list....');
    allArticlesCache = await readAllArticlesFromDisk();
  }
  return allArticlesCache;
}

// get main article

export async function getMainArticleHomePage() {
  console.log('getMainArticleHomePage() ***************');
  // filter articles
  const a = await getAllArticles();
  console.log(a[0]);
  return a[0];
  // console.log(allArticlesCache.filter((value) => value.is_main_home));
}

async function readAllArticlesFromDisk() {
  console.log('Reading all articles from disk....');

  let articles: AljazaraArticleMd[] = [];

  const years: string[] = fs.readdirSync(postsDirectory); // get years folders
  years.forEach((year) => {
    const yearPath = path.join(postsDirectory, year); // posts/2025/

    const months: string[] = fs.readdirSync(yearPath); // extract months folders for each year
    months.forEach((month) => {
      const monthPath = path.join(yearPath, month);

      const folders: string[] = fs.readdirSync(monthPath); // get articles folders for each month
      folders.forEach(async (folder) => {
        const fullPath = path.join(monthPath, folder, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const htmlContent = await remark().use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeStringify).process(content);
        // extract iframe src add it to image
        // todo: extract image

        articles.push({ slug: folder, content: htmlContent.value, ...data });
      });
    });
  });

  return articles;
}

export async function latestArticles(limit = 10) {
  const x = await getArticles();
  return x.sort((a: any, b: any) => new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds()).slice(0, limit);
}

// from disk or cache
async function getArticles() {
  if (!allArticlesCache) {
    return await readAllArticlesFromDisk();
  }
  return allArticlesCache;
}

//////////////////////////////////////////////////
export async function getNewsByCategory(category: string, limit = 10) {
  return readAllPosts();
}

async function readAllPosts() {
  let allPosts: any = [];

  // read years
  const years = fs.readdirSync(postsDirectory);

  years.forEach((year) => {
    const yearPath = path.join(postsDirectory, year);

    //
    const months = fs.readdirSync(yearPath);
    months.forEach((month) => {
      const monthPath = path.join(yearPath, month);

      //
      const folders = fs.readdirSync(monthPath);

      folders.forEach(async (folder) => {
        const fullPath = path.join(monthPath, folder, 'index.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents); // brings the metadata
        const htmlContent = await remark()
          // .use(html, { allowDangerousHtml: true })
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeRaw)
          .use(rehypeStringify)
          .process(content); // md content to html

        // filter by category
        // if (data.category === category) {
        allPosts.push({
          slug: folder,
          ...data,
          content: htmlContent.value.toString(),
        });
        // }
      });
    });
  });

  // sort
  // return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
  return allPosts;
}
