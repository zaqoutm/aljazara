import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import moment from 'moment';
import Link from 'next/link';
import styles from './styles.module.css';
moment.locale('ar');

type Props = {
  article: AljazaraArticle;
  borderTop: boolean;
};

export default function JustTitleArticleCard({ article, borderTop }: Props) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`${styles.main} ${article.is_featured && styles.featured} ${!borderTop && styles.noBorderTop}`}
    >
      {/* article title */}
      <div className={styles.titleContainer}>
        <div className={styles.cardTop}>
          <div className={styles.cardPunkt}></div>
          <p className={styles.time}>
            {moment(article.date_created).fromNow()} <span className={styles.badge}>{article.section_id?.title_ar}</span>
          </p>
        </div>
        <h1>{article.title}</h1>
      </div>
    </Link>
  );
}
