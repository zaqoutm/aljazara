import { AljazaraSection } from './AljazaraSection';

export interface AljazaraArticle {
  id: string;
  documentId: string;
  slug?: string;

  is_main_home?: boolean;
  is_main_section?: boolean;
  is_featured?: boolean;

  date_created?: string;
  date_updated?: string;

  title?: string;
  content?: string; // WYSIWYG input

  photo?: {
    title?: string;
    description?: string;
    filename_disk?: string;
  };
  tags?: string[];

  section?: AljazaraSection;
}
