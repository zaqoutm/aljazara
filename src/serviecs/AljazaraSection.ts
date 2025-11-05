import { AljazaraArticle } from './AljazaraArticle';

export interface AljazaraSection {
  id?: string;
  title?: string;
  title_ar?: string;
  articles?: AljazaraArticle[];
}
