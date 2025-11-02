import { AljazaraApiResponse, AljazaraApiSingleResponse } from './AljazaraApiResponse';
import { tryFetch } from './SharedService';

export async function getArticleByDocumentId(documentId: string): Promise<AljazaraApiSingleResponse> {
  return await tryFetch(`/articles/${documentId}?populate=*`);
}

export async function getArticlesBySection(sectionTitle: string): Promise<AljazaraApiResponse> {
  return await tryFetch(`/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
}
