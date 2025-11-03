import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import Image from 'next/image';
import Link from 'next/link';
import CustomImage from '../CustomImage/page';
import styles from './styles.module.css';

type Props = {
  article: AljazaraArticle;
  borderTop: boolean;
};

export default function ArticleCard({ article, borderTop }: Props) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`${styles.main} ${article.is_featured && styles.featured} ${!borderTop && styles.noBorderTop}`}
    >
      {/* iamge */}
      <div className={styles.imageContainer}>
        <CustomImage title={article.photo?.title} filename_disk={article.photo?.filename_disk} />
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        {article.section && (
          <div className={styles.titleContainerBadges}>
            <div className={styles.tagsContainer}>
              {article.is_featured && <Image src='/favorite-featured-icon.svg' alt='featured' width={12} height={12} priority={true} />}
              {article.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
