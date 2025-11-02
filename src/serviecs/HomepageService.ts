import { AljazaraApiResponse } from './AljazaraApiResponse';
import { AljazaraArticle } from './AljazaraArticle';
import { tryFetch } from './SharedService';

// api calls
export async function loadMainArticle(): Promise<AljazaraArticle> {
  return await tryFetch(`/articles/home/main/`);
}

export async function loadArticlesBySection(section: string): Promise<AljazaraApiResponse> {
  return await tryFetch(`/articles`);
}

export async function loadFeaturedArticles(): Promise<AljazaraApiResponse> {
  return await tryFetch(`/articles`);
}
