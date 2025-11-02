import { AljazaraArticle } from './AljazaraArticle';

export interface AljazaraApiResponse {
  data: AljazaraArticle[];
  error: [];
}

export interface AljazaraApiSingleResponse {
  data: AljazaraArticle;
  error: [];
}
