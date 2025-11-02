import { AljazaraArticle } from './AljazaraArticle';

export interface AljazaraSection {
  id?: string;
  title?: string;
  titleAr?: string;
  articles?: AljazaraArticle[];
}
