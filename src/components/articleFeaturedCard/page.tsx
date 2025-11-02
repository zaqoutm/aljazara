import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  article: AljazaraArticle;
  borderTop: boolean;
};

export default function ArticleFeaturedCard({ article, borderTop }: Props) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`${styles.main} ${article.isFeatured && styles.featured} ${!borderTop && styles.noBorderTop}`}
    >
      {/* iamge */}
      <div className={styles.imageContainer}>
        {article.photo ? (
          <Image src={article.photo.url ? article.photo.url : '/aljazara.svg'} alt={''} width={200} height={200} priority={true} />
        ) : (
          'No img'
        )}
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        {article.section && (
          <div className={styles.titleContainerBadges}>
            <p className={styles.badge}>{article.section?.titleAr}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
