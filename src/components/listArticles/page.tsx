import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '../articleCard/page';
import styles from './styles.module.css';

interface Props {
  listTitle: string;
  sectionURL: string;
  articlesList: AljazaraApiResponse;
}

export default function ListArticles({ listTitle, sectionURL, articlesList }: Props) {
  return (
    <>
      <div className={styles.sectioTitle}>
        <Link href={`/${sectionURL}`}>{listTitle}</Link>
        <Image src={'/chevronLeft.svg'} alt='chevron icon' width={18} height={18} />
      </div>
      <div className={styles.articlesList}>
        {articlesList.data.map((a, i) => (
          <ArticleCard key={a.documentId} article={a} borderTop={i > 0 ? true : false} />
        ))}
        <div className={styles.readMoreBtnContainer}>
          <Link className={styles.readMoreBtn} href={`/${sectionURL}`}>
            إقرأ المزيد
          </Link>
        </div>
      </div>
    </>
  );
}
