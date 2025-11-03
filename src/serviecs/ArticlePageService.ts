import { AljazaraArticle } from './AljazaraArticle';
import { tryFetch } from './SharedService';

export async function getArticleByDocumentId(documentId: string): Promise<AljazaraArticle> {
  // return await tryFetch(`/articles/home/main`); // mock
  return await tryFetch(`/articles/${documentId}?populate=*`);
}
