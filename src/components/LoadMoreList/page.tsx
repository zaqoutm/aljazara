'use client';
import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import { useState } from 'react';
import { loadMoreArticles } from '../../serviecs/ServerActions';
import ArticleCard from '../articleCard/page';
import styles from './styles.module.css';

export default function LoadMoreList({ ...props }) {
  // articles already loaded by server
  // document is not ready on server !
  const [articles, setArticles] = useState<AljazaraArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  /**
   * spread operator
   * [...x,z]
   *
   * callback pattern
   * setState(x => [...x,z])
   */
  async function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const results = await loadMoreArticles(props.sectionTitle, 5, page * 5); // start from 0, then 5
    setArticles((prev) => [...prev, ...results.data]);
    if (results.data.length > 0) setPage((prev) => prev + 1);
  }

  return (
    <div className={styles.moreArticles}>
      {articles?.map(
        (row, index) =>
          // exclude first 3 ROWS
          index > 2 && (
            <div key={index}>
              <ArticleCard article={row} borderTop={true} />
            </div>
          )
      )}

      {/*  */}
      {/*  */}
      <div className={styles.readMoreBtnContainer}>
        <button disabled={isLoading} onClick={handleLoadMore} className={styles.readMoreBtn}>
          {isLoading ? 'انتظر من فضلك...' : 'حمل المزيد'}
        </button>
      </div>
    </div>
  );
}
