import { AljazaraArticle } from '@/serviecs/AljazaraArticle';

export default interface Section {
  id?: string;
  title?: string;
  title_ar?: string;
  articles?: AljazaraArticle[];
}
