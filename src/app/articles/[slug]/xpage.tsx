import { notFound } from 'next/navigation';
import styles from './styles.module.css';

//
//
//
export async function generateStaticParams() {
  // const articles = await loadAllItems();
  // return articles.data.map((article: AljazaraArticle) => ({
  //   slug: article.slug,
  // }));
}

//
//
//
export async function generateMetadata({ params }: { params: { documentId: string } }) {
  // const article = await getArticleByDocumentId(params.documentId);
  // const currentArticle = article.data[0];
  // if (!currentArticle) {
  //   return { title: 'المقالة غير موجودة' };
  // }
  // return {
  //   title: currentArticle.title,
  //   description: currentArticle.title || currentArticle.content?.slice(0, 120),
  //   openGraph: {
  //     title: currentArticle.title,
  //     description: currentArticle.title,
  //     images: [currentArticle.photo?.filename_disk || '/aljazara-black.svg'],
  //   },
  // };
}

//
//
// Page starts here
//
//
type Props = {
  params: {
    documentId: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  const { documentId } = params;

  console.log(documentId);

  const width_height = 21;

  // const res: AljazaraApiResponse = await getArticleByDocumentId(documentId);
  // const data = res.data;
  // console.log(data);

  const article = {};
  if (!article) notFound();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          {/* content */}
          <div className={styles.contentContainer}>{/* article body */}</div>
        </div>
        {/*
         */}
      </div>
    </div>
  );
}
