import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import moment from "moment";
// import  "moment/locale/ar";
import Image from "next/image";
import Link from "next/link";
import ListArticles from "../../../components/listArticles/page";
import ListMixedArticles from "../../../components/listMixedArticles/page";
import { SectionHeader } from "../../../components/sectionHeader/sectionHeader";
import { getArticleByDocumentId, getArticlesBySection } from "../../../data/articlePageLoaders";
import { getMixedLatestArticles } from "../../../data/sharedArticlesLoader";
import { StrapiResponse, StrapiResponseSingle } from "../../../interfaces/StrapiResponse";
import styles from "./styles.module.css";

export async function generateStaticParams() {
  const articles = await getArticlesBySection("sectionName");
  return articles.data.map((article) => ({ documentId: article.documentId }));
}

export default async function ArticlePage({ params }: { params: Promise<{ documentId: string }> }) {
  const paramsResult = await params;
  const width_height = 21;

  // other api calls
  // get the article by document id
  const articleByDocumentId: StrapiResponseSingle = await getArticleByDocumentId(paramsResult.documentId);
  const article = articleByDocumentId.data;
  const content: BlocksContent = articleByDocumentId.data.content ?? [];
  let relatedArticles: StrapiResponse = { data: [], meta: "meta" };

  // mixed articles
  const mixedArticles: StrapiResponse = await getMixedLatestArticles(10);

  if (article.title) {
    relatedArticles = await getArticlesBySection(article.section?.title ?? "");
    // console.log(relatedArticles);
  }

  // get articles in the same section
  // get mixed news

  return (
    <div className={styles.main}>
      {article.title ? <SectionHeader title={article.title} /> : ""}

      <div className={styles.container}>
        {/* Article view, share links, more from same section */}
        <div className={styles.rightContainer}>
          <div>
            <div className={styles.imageContainer}>
              <Image
                src={article.photo ? article.photo.url : "/aljazara.svg"}
                alt={article.photo && article.photo.alternativeText ? article.photo.alternativeText : "Picture text"}
                width={200}
                height={200}
                priority={true}
              />
            </div>
            <p className={styles.imageCaption}>{article.photo?.caption}</p>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.createdAtContainer}>
              <p>{moment(article.createdAt).format("LLLL")}</p>
            </div>

            {/* ad */}

            {/*  */}
            <div className={styles.content}>
              <BlocksRenderer content={content}></BlocksRenderer>
            </div>

            <div className={styles.socialLinks}>
              <Link href={"#"}>
                <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={"#"}>
                <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={"#"}>
                <Image src='/email-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={"#"}>
                <Image src='/whatsapp-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={"#"}>
                <Image src='/link-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>

              <div className={styles.socialLinksText}>
                <p>شارك المقالة</p>
                <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </div>
            </div>

            <div className={styles.moreNewsSection}>
              {relatedArticles && (
                <ListArticles
                  listTitle={`المزيد من أخبار ال${article.section?.titleAr ?? ""}`}
                  sectionURL={article.section?.title ?? "#"}
                  articlesList={relatedArticles}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.leftContainer}>
          {mixedArticles && <ListMixedArticles articlesList={mixedArticles} listTitle='المزيد من المقالات' />}
        </div>
      </div>
    </div>
  );
}
