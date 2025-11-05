import { AljazaraApiResponse } from './AljazaraApiResponse';
import { tryFetch } from './SharedService';

const API = process.env.NEXT_PUBLIC_API_PATH;
const current = process.env.CURRENT_IMPL;

const STRAPI = 'strapi';
const DIRECTUS = 'directus';

export function getPhotoURL(givenUrl?: string) {
  if (!givenUrl) return '/aljazara-black.svg'; // null photos
  return API?.substring(0, API.length - 'items/'.length) + '/assets/' + givenUrl;
}

export async function getArticleByDocumentId(documentId: string): Promise<AljazaraApiResponse> {
  switch (current) {
    case DIRECTUS:
      return await tryFetch(
        `/articles?fields=*,section_id.title,section_id.title_ar,photo.filename_disk,photo.description&filter[slug][_eq]=${documentId}`
      );
    default: // mock
      return await tryFetch(`/articles/home/main`); // mock
  }
}

export async function loadMainArticle(): Promise<AljazaraApiResponse> {
  switch (current) {
    case DIRECTUS:
      return await tryFetch(`/articles?fields=*,photo.filename_disk,photo.description&filter[is_main_home][_eq]=true&limit=1&sort=-date_created`);
    default:
      return await tryFetch(`/articles/home/main/`);
  }
}

export async function loadArticlesBySectionTitle(sectionTitle?: string, limit = 5): Promise<AljazaraApiResponse> {
  switch (current) {
    case DIRECTUS:
      return await tryFetch(
        `/articles?fields=*,photo.filename_disk,photo.description,section_id.title,section_id.title_ar&filter[section_id][title][_eq]=${sectionTitle}&limit=${limit}&sort=date_created`
      );
    default:
      return await tryFetch(`/articles`);
  }
}

export async function loadFeaturedArticles(): Promise<AljazaraApiResponse> {
  switch (current) {
    case DIRECTUS:
      return await tryFetch(
        `/articles?fields=*,photo.filename_disk,photo.description,section_id.title,section_id.title_ar&filter[is_featured][_eq]=true`
      );
    default:
      return await tryFetch(`/articles`);
  }
}

export async function loadAllItems(): Promise<AljazaraApiResponse> {
  return await tryFetch('/articles?fields.*');
}

export async function getMainArticlesBySection(sectionTitle: string): Promise<AljazaraApiResponse> {
  switch (current) {
    case DIRECTUS:
      return await tryFetch(
        `/articles?fields=*,photo.*&filter[is_main_section][_eq]=true&filter[section_id][title][_eq]=${sectionTitle}&limit=2&sort=date_created`
      );
    default:
      return await tryFetch(`/articles/2`);
  }
}

export async function getArticlesByPage(sectionTitle: string, pageSize = 5, offset_start = 0): Promise<AljazaraApiResponse> {
  return await tryFetch(
    `/articles?fields=*,photo.*&filter[section_id][title][_eq]=${sectionTitle}&sort=-date_created&limit=${pageSize}&offset=${offset_start}`
  );
}
