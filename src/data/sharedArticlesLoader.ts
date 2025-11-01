import { StrapiResponse } from "../interfaces/StrapiResponse";
import { tryFetch } from "./shared";

export async function getMixedLatestArticles(max: number): Promise<StrapiResponse> {
  return await tryFetch(`/articles?sort[1]=publishedAt:desc&pagination[0]=start&pagination[limit]=${max}`, "articles");
}
