import { tryFetch } from '@/data/shared';

export async function getMixedLatestArticles(max: number) {
  return await tryFetch(`/articles?sort[1]=publishedAt:desc&pagination[0]=start&pagination[limit]=${max}`, 'articles');
}
