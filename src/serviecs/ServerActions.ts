'use server';

import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { getArticlesByPage } from './MainService';

export async function loadMoreArticles(sectionTitle: string, pageSize: number, offset_start = 0): Promise<AljazaraApiResponse> {
  return getArticlesByPage(sectionTitle, pageSize, offset_start);
}
