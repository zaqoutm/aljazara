import { tryFetch } from '@/data/shared';
import { AljazaraApiResponse } from './AljazaraApiResponse';
import { AljazaraArticle } from './AljazaraArticle';

// api calls
export async function loadMainArticle(): Promise<AljazaraArticle> {
  return await tryFetch(`/articles/home/main/`);
}

export async function loadArticlesBySection(section: string): Promise<AljazaraApiResponse> {
  return await tryFetch(`/articles`);
}
