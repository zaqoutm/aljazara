import CustomImage from '@/components/CustomImage/page';
import ListArticles from '@/components/listArticles/page';
import ListMixedArticles from '@/components/listMixedArticles/page';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import { getArticleByDocumentId } from '@/serviecs/ArticlePageService';
import { loadAllItems, loadArticlesBySectionTitle } from '@/serviecs/HomepageService';
import { getMixedLatestArticles } from '@/serviecs/SharedService';
import { faker, fakerAR } from '@faker-js/faker';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './styles.module.css';

export async function generateStaticParams() {
  const articles = await loadAllItems();
  return articles.data.map((article: AljazaraArticle) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleByDocumentId(params.slug);

  if (!article) {
    return { title: 'المقالة غير موجودة' };
  }

  return {
    title: article.title,
    description: article.title || article.content?.slice(0, 120),
    openGraph: {
      title: article.title,
      description: article.title,
      images: [article.photo?.filename_disk || '/aljazara-black.svg'],
    },
  };
}

// Page starts here.
//
//
//
//
export default async function ArticlePage({ params }: { params: any }) {
  const docId = await params;
  const article: AljazaraArticle = await getArticleByDocumentId(docId.documentId);
  const mixedArticles: AljazaraApiResponse = await getMixedLatestArticles(10);
  let relatedArticles: AljazaraApiResponse = { data: [], error: [] };

  const width_height = 21;

  if (!article) notFound();

  relatedArticles = await loadArticlesBySectionTitle(article.section?.title || '');

  return (
    <div className={styles.main}>
      {article.title ? <SectionHeader title={article.title} /> : ''}

      <div className={styles.container}>
        {/*
         */}
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
            {/* article body */}
            <div className={styles.content}>
              <h1>#{article.section?.titleAr}</h1>
              <div className={styles.createdAtContainer}>
                <p>{moment(article.date_created).format('LLLL')}</p>
              </div>
              <br />
              <h1>{fakerAR.lorem.sentence()}</h1>
              <p>{fakerAR.lorem.paragraphs()}</p>
              <img src={faker.image.avatarGitHub() || 'aljazara-black.svg'} alt='' />
              <br />
              <h2>{fakerAR.lorem.sentence()}</h2>
              <p>{fakerAR.lorem.paragraphs()}</p>
              <br />
              <h3>{fakerAR.lorem.sentence()}</h3>
              <p>{fakerAR.lorem.paragraphs()}</p>
              <p>{fakerAR.lorem.paragraphs()}</p>
              {/* <BlocksRenderer content={content}></BlocksRenderer> */}
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

          <div className={styles.moreNewsSection}>
            {relatedArticles && (
              <ListArticles
                listTitle={`المزيد من أخبار ال${article.section?.titleAr ?? ''}`}
                sectionURL={article.section?.title ?? '#'}
                articlesList={relatedArticles}
              />
            )}
          </div>
        </div>
        {/*
         */}

        <div className={styles.leftContainer}>
          {mixedArticles && <ListMixedArticles articlesList={mixedArticles} listTitle='المزيد من المقالات' />}
          {/* <AdContainer size='250_600' /> */}
        </div>
      </div>
    </div>
  );
}
