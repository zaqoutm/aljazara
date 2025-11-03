'use server';

import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { tryFetch } from './SharedService';

export async function loadMoreArticles(sectionTitle: string, pageSize: number, offset_start = 0): Promise<AljazaraApiResponse> {
  return await tryFetch(
    `/articles?fields=*,photo.*&filter[section_id][title][_eq]=${sectionTitle}&sort=-date_created&limit=${pageSize}&offset=${offset_start}`
  );
}
