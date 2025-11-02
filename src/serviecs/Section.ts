import { AljazaraArticle } from '@/serviecs/AljazaraArticle';

export default interface Section {
  id?: string;
  title?: string;
  titleAr?: string;
  articles?: AljazaraArticle[];
}
