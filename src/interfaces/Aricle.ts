import { type BlocksContent } from "@strapi/blocks-react-renderer";
import Section from "./Section";

export interface Article {
  // provided by strapi
  id?: string;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  title?: string;
  content?: BlocksContent;
  isFeatured?: boolean;

  isMain?: boolean;

  section?: Section;
  photo?: {
    alternativeText: string;
    caption: string;
    url: string;
  };
  tags?: ["tag1", "tag2_test", "tag3"];
}
