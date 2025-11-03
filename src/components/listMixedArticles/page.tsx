import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import JustTitleArticleCard from '../justTitleCard/page';
import styles from './styles.module.css';

interface Props {
  listTitle: string;
  articlesList: AljazaraApiResponse;
}

export default function ListMixedArticles({ listTitle, articlesList }: Props) {
  return (
    <>
      <div className={styles.sectioTitle}>
        <h1>{listTitle}</h1>
      </div>
      <div className={styles.articlesList}>
        {articlesList.data.map((a) => (
          <JustTitleArticleCard key={a.id} article={a} borderTop={true} />
        ))}
      </div>
    </>
  );
}
