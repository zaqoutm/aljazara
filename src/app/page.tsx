import ArticleFeaturedCard from '@/components/articleFeaturedCard/page';
import ListArticles from '@/components/listArticles/page';
import MainArticle from '@/components/mainArticle/mainArticle';
import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { loadArticlesBySectionTitle, loadFeaturedArticles, loadMainArticle } from '@/serviecs/MainService';
import * as motion from 'motion/react-client';
import { connection } from 'next/server';
import styles from './page.module.css';

export default async function Home() {
  await connection();

  const mainArticlesResponse: AljazaraApiResponse = await loadMainArticle();
  const businessArticlesResponse: AljazaraApiResponse = await loadArticlesBySectionTitle('business');
  const techArticlesResponse: AljazaraApiResponse = await loadArticlesBySectionTitle('technology');
  const cultureArticlesResponse: AljazaraApiResponse = await loadArticlesBySectionTitle('culture');
  const featuredArticlesRes: AljazaraApiResponse = await loadFeaturedArticles();

  return (
    <div className={styles.page}>
      {/* switcher on < tablet */}
      <div className={styles.switcher}>
        {/* <HomePageSwitcher
          business={businessArticlesResponse}
          tech={techArticlesResponse}
          cult={cultureArticlesResponse}
          fratured={featuredArticlesRes}
          main={mainArticlesResponse.data[0]}
        /> */}

        {/* TODO: skeleton */}
      </div>

      <div className={styles.container}>
        {/* Main articles */}
        <main className={styles.main}>
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 2,
            }}
          >
            {/* main article */}
            {mainArticlesResponse ? <MainArticle article={mainArticlesResponse.data[0]} /> : 'Loading main article'}
          </motion.div>

          {/* business */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='أخبار المال والأعمال' sectionURL='business' articlesList={businessArticlesResponse} />
          </div>
          {/* tech */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='أخبار التكنولوجيا' sectionURL='technology' articlesList={techArticlesResponse} />
          </div>
          {/* culture */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='مقالات ثقافية' sectionURL='culture' articlesList={cultureArticlesResponse} />
          </div>
        </main>

        {/*  */}
        {/* Featured articles */}
        <div className={styles.featuredSection}>
          <div className={styles.articlesList}>
            {featuredArticlesRes && featuredArticlesRes.data.map((a, i) => <ArticleFeaturedCard key={a.id} article={a} borderTop={i > 0} />)}
          </div>
          {/* <AdContainer size='250_250' /> */}
          {/*  */}
        </div>
      </div>
    </div>
  );
}
