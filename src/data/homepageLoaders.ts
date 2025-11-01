import { StrapiResponse } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getMainArticle(): Promise<StrapiResponse> {
  // return await tryFetch("/articles?filters[isMain][$eq]=true&populate=*", "articles");
  return await tryFetch("/articles?1/");
}

export async function getArticlesBySection(sectionTitle: string): Promise<StrapiResponse> {
  // return await tryFetch(`/articles?populate=*&sort[1]=publishedAt:desc&filters[section][title][$eq]=${sectionTitle}`);
  return await tryFetch(`/articles`);
}

export async function getFeaturedArticles(): Promise<StrapiResponse> {
  // return await tryFetch("/articles?populate=*&sort[1]=publishedAt:desc&filters[isFeatured][$eq]=true");
  return await tryFetch(`/articles`);
}
