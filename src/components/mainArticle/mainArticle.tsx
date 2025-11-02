import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface MainArticleProps {
  article: AljazaraArticle;
  flexibleSize?: boolean;
}

export default function MainArticle(props: MainArticleProps) {
  let article = props.article;

  if (!article) return <h1>Main article 404!</h1>;

  return (
    <Link href={`/articles/${article.slug}`} className={`${styles.main} ${props.flexibleSize && styles.sizeFlix}`}>
      {/* iamge */}
      <div className={styles.imageContainer}>
        <Image
          src={article.photo ? article.photo.url : '/aljazara-black.svg'}
          // src={'/aljazara-black.svg'}
          alt={article.photo && article.photo.alternativeText ? article.photo.alternativeText : 'Picture text'}
          width={200}
          height={200}
          priority={true}
        />
      </div>
      {/*  */}
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        {/* {article.section ? <p className={styles.badge}>{article.section?.titleAr}</p> : ''} */}
        {/* <p>{moment(article.createdAt).fromNow()}</p> */}

        <div className={styles.tagsContainer}>
          {article.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
