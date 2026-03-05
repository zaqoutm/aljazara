import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import Link from 'next/link';
import CustomImage from '../CustomImage/page';
import styles from './styles.module.css';
import { AljazaraArticleMd } from '@/serviecs/AljazaraArticleMd';

interface MainArticleProps {
  article: AljazaraArticleMd;
  flexibleSize?: boolean;
}

export default function MainArticle(props: MainArticleProps) {
  let article = props.article;

  if (!article) return <h1>Main article 404!</h1>;

  return (
    <Link href={`/articles/${article.slug}`} className={`${styles.main} ${props.flexibleSize && styles.sizeFlix}`}>
      {/* iamge */}
      {/*<div className={styles.imageContainer}></div>*/}

      <div className='post-cover'>
        <iframe src={article.image} width={'100%'} />
        {/*<CustomImage title={article.imageTitle} filename_disk={article.image} />*/}
      </div>

      {/*  */}
      {/* article title */}
      <div className={styles.titleContainer}>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>

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
