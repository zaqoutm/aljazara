import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function MainArticle(article: AljazaraArticle) {
  return (
    <Link href={`/articles/${article.slug}`} className={styles.main}>
      {/* iamge */}
      <div className={styles.imageContainer}>
        <Image
          src={article.photo ? article.photo.url : '/aljazara.svg'}
          alt={article.photo && article.photo.alternativeText ? article.photo.alternativeText : 'Picture text'}
          width={200}
          height={200}
          priority={true}
        />
      </div>
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        {article.section ? <p className={styles.badge}>{article.section?.titleAr}</p> : ''}
        <div className={styles.tagsContainer}>
          {article.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className={'flex'}>
          <span>{moment(article.createdAt).format('LL')}</span>
        </div>
      </div>
    </Link>
  );
}
