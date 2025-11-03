import { tryFetch } from '@/serviecs/SharedService';
import { AljazaraApiResponse } from './AljazaraApiResponse';

export async function getMainArticlesBySection(sectionTitle: string): Promise<AljazaraApiResponse> {
  // return await tryFetch(`/articles`);
  return await tryFetch(
    `/items/articles?fields=*,photo.*&filter[is_main_section][_eq]=true&filter[section_id][title][_eq]=${sectionTitle}&limit=2&sort=date_created`
  );
}

// pages
export async function getArticlesPageBySection(sectionTitle: string, page: number, pageSize: number): Promise<AljazaraApiResponse> {
  // return await tryFetch(
  //   `/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  // );
  return await tryFetch(`/items/articles?limit=2`);
}
