'use client';
import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { AljazaraArticle } from '@/serviecs/AljazaraArticle';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import ArticleFeaturedCard from '../articleFeaturedCard/page';
import ListArticles from '../listArticles/page';
import MainArticle from '../mainArticle/mainArticle';
import styles from './styles.module.css';

type SwitcherProps = {
  main: AljazaraArticle;
  business: AljazaraApiResponse;
  fratured: AljazaraApiResponse;
  tech: AljazaraApiResponse;
  cult: AljazaraApiResponse;
};

// TODO: list of different articles
export function HomePageSwitcher(props: SwitcherProps) {
  const [active, setActive] = useState('news');

  function makeActive(tab: string) {
    setActive(tab);
  }

  return (
    <div>
      {/* swithc */}
      <div className={styles.switcher}>
        <button onClick={() => makeActive('news')} className={`${styles.switcherButton} ${active == 'news' && styles.activeSwitch}`}>
          آخر الأخبار
        </button>
        <button onClick={() => makeActive('featured')} className={`${styles.switcherButton} ${active == 'featured' && styles.activeSwitch}`}>
          أخبار مميزة
        </button>
      </div>

      <div className={styles.content}>
        {/* news */}
        <div className={`${styles.newsTab} ${active != 'news' && styles.hideMe}`}>
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.1,
              duration: 2,
            }}
          >
            <MainArticle article={props.main} />
          </motion.div>
          <ListArticles listTitle='أخبار المال والأعمال' sectionURL='business' articlesList={props.business} />
          <ListArticles listTitle='أخبار التكنولوجيا' sectionURL='technology' articlesList={props.tech} />
          <ListArticles listTitle='مقالات ثقافية' sectionURL='cultural' articlesList={props.cult} />
        </div>
        {/* featured news */}
        <div className={`${styles.newsTab} ${active != 'featured' && styles.hideMe}`}>
          {props.fratured.data.map((a, i) => (
            <ArticleFeaturedCard key={a.documentId} article={a} borderTop={i > 0} />
          ))}{' '}
        </div>
      </div>
    </div>
  );
}
