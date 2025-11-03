import { AljazaraApiResponse } from './AljazaraApiResponse';
import { AljazaraArticle } from './AljazaraArticle';
import { tryFetch } from './SharedService';

export async function getArticleByDocumentId(documentId: string): Promise<AljazaraArticle> {
  // return await tryFetch(`/articles/home/main`); // mock
  return await tryFetch(`/items/articles/${documentId}?populate=*`);
}

export async function getArticlesBySection(sectionTitle: string): Promise<AljazaraApiResponse> {
  // return await tryFetch(`/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
  // return await tryFetch(`/articles`); // mock
  return await tryFetch(`/items/articles`);
}
