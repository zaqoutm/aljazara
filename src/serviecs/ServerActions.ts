'use server';

import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { getArticlesPageBySection } from './SectionPageService';

export async function loadMoreArticles(sectionTitle: string, pageSize: number): Promise<AljazaraApiResponse> {
  return await getArticlesPageBySection(sectionTitle, 0, pageSize);
}
