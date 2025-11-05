import CustomImage from '@/components/CustomImage/page';
import ListArticles from '@/components/listArticles/page';
import ListMixedArticles from '@/components/listMixedArticles/page';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import { getArticleByDocumentId, getPhotoURL, loadAllItems, loadArticlesBySectionTitle } from '@/serviecs/MainService';
import { getMixedLatestArticles } from '@/serviecs/SharedService';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './styles.module.css';

//
export async function generateStaticParams() {
  const articles = await loadAllItems();
  return articles.data.map((article: AljazaraArticle) => ({
    slug: article.slug,
  }));
}

//
export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;

  const article = await getArticleByDocumentId(slug);
  const currentArticle = article.data[0];

  if (!currentArticle) {
    return { title: 'المقالة غير موجودة' };
  }

  return {
    title: currentArticle.title,
    description: currentArticle.title || currentArticle.content?.slice(0, 120),
    openGraph: {
      title: currentArticle.title,
      description: currentArticle.title,
      images: [getPhotoURL(currentArticle.photo?.filename_disk) || '/aljazara-black.svg'],
    },
  };
}

export default async function Page({ params }: any) {
  const { slug } = params;

  const width_height = 21;
  const res: AljazaraApiResponse = await getArticleByDocumentId(slug);

  const article = res.data[0];
  if (!article) notFound();

  const relatedArticles = await loadArticlesBySectionTitle(article?.section_id?.title);
  const mixedArticles: AljazaraApiResponse = await getMixedLatestArticles(10);

  return (
    <div className={styles.main}>
      {article.title ? <SectionHeader title={article.title} /> : ''}

      <div className={styles.container}>
        {/* Article view, share links, more from same section */}
        <div className={styles.rightContainer}>
          <div>
            <div className={styles.imageContainer}>
              <CustomImage title={article.photo?.title} filename_disk={article.photo?.filename_disk} />
            </div>
            <p className={styles.imageCaption}>{article.photo?.description}</p>
          </div>
          {/* content */}
          <div className={styles.contentContainer}>
            {/*  */}
            {/* article body */}
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
            </div>

            <div className={styles.tagsContainer}>
              {article.is_featured && <Image src='/favorite-featured-icon.svg' alt='featured' width={12} height={12} priority={true} />}
              {article.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <Link href={'#'}>
                <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={'#'}>
                <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={'#'}>
                <Image src='/email-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={'#'}>
                <Image src='/whatsapp-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>
              <Link href={'#'}>
                <Image src='/link-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </Link>

              <div className={styles.socialLinksText}>
                <p>شارك المقالة</p>
                <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.moreNewsSection}>
            {relatedArticles && (
              <ListArticles
                listTitle={`المزيد من أخبار ال${article.section_id?.title_ar}`}
                sectionURL={article.section_id?.title ?? '#'}
                articlesList={relatedArticles}
              />
            )}
          </div>
        </div>

        {/*  */}
        {/*  */}
        <div className={styles.leftContainer}>
          {mixedArticles && <ListMixedArticles articlesList={mixedArticles} listTitle='المزيد من المقالات' />}
          {/* <AdContainer size='250_600' /> */}
        </div>
      </div>
    </div>
  );
}
