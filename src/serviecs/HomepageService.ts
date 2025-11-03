import { AljazaraApiResponse } from './AljazaraApiResponse';
import { tryFetch } from './SharedService';

// api calls
export async function loadMainArticle(): Promise<AljazaraApiResponse> {
  // return await tryFetch(`/articles/home/main/`); // mock /api
  return await tryFetch(`/items/articles?fields=*,photo.*&filter[is_main_home][_eq]=true&limit=1&sort=-date_created`);
}

export async function loadArticlesBySectionTitle(sectionTitle: string, limit = 5): Promise<AljazaraApiResponse> {
  // return await tryFetch(`/articles`);
  return await tryFetch(
    `/items/articles?fields=*,photo.*,section_id.*&filter[section_id][title][_eq]=${sectionTitle}&limit=${limit}&sort=date_created`
  );
}

export async function loadFeaturedArticles(): Promise<AljazaraApiResponse> {
  // return await tryFetch(`/articles`);
  return await tryFetch(`/items/articles?fields=*,photo.*,section_id.*&filter[is_featured][_eq]=true`);
}

export async function loadAllItems(): Promise<AljazaraApiResponse> {
  return await tryFetch('/items/articles');
}
