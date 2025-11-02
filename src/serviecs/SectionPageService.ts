import { tryFetch } from '@/serviecs/SharedService';
import { AljazaraApiResponse } from './AljazaraApiResponse';

export async function getArticlesPageBySection(sectionTitle: string, page: number, pageSize: number): Promise<AljazaraApiResponse> {
  return await tryFetch(
    `/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
}
