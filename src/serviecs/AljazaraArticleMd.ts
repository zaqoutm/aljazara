export interface AljazaraArticleMd {
  slug?: string; // the folder name: articles/2026/01/sulug-here

  // data from md file header ---
  title?: string;
  date?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  is_main_home?: boolean;
  is_main_section?: boolean;
  is_featured?: boolean;
  // ---

  // the rest of the md file
  content?: any;
  image?: string;
  imageTitle?: string;
  section?: string;
}
