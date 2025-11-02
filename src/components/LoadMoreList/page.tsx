'use client';
import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { useState } from 'react';
import { loadMoreArticles } from '../../serviecs/ServerActions';
import ArticleCard from '../articleCard/page';
import styles from './styles.module.css';

export default function LoadMoreList({ ...props }) {
  // articles already loaded by server
  // document is not ready on server !
  const [upadtedList, setUpdatedList] = useState<AljazaraApiResponse>();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * spread operator
   * [...x,z]
   *
   * callback pattern
   * setState(x => [...x,z])
   *
   *
   */
  async function handleLoadMore() {
    setIsLoading(true);
    let count = 5;
    if (upadtedList && upadtedList.data.length > 1) {
      count += upadtedList.data.length;
    }

    // server action
    console.log('loading ... ', props.sectionTitle);

    const x = await loadMoreArticles(props.sectionTitle, count);

    if (x) {
      setIsLoading(false);
    }

    setUpdatedList(x);
  }

  return (
    <div className={styles.moreArticles}>
      {upadtedList?.data.map(
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
          حمل المزيد {isLoading && ' - انتظر..'}
        </button>
      </div>
    </div>
  );
}
