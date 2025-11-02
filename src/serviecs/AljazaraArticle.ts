import { AljazaraSection } from './AljazaraSection';

export interface AljazaraArticle {
  id: string;
  documentId: string;
  slug?: string;

  isMainHome?: boolean;
  isMainSection?: boolean;
  isFeatured?: boolean;

  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  title?: string;
  content?: string; // 👈 Rich Text, view in dangerouslySetInnerHTML={{ __html: article.content }}

  photo?: {
    alternativeText: string;
    caption: string;
    url: string;
  };

  section?: AljazaraSection;
  tags?: string[];
}
