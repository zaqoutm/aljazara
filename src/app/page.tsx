import * as motion from "motion/react-client";
import { connection } from "next/server";
import ArticleFeaturedCard from "../components/articleFeaturedCard/page";
import { HomePageSwitcher } from "../components/HomePageSwitcher/page";
import ListArticles from "../components/listArticles/page";
import MainArticle from "../components/mainArticle/mainArticle";
import * as service from "../data/homepageLoaders";
import { StrapiResponse } from "../interfaces/StrapiResponse";
import styles from "./page.module.css";

export default async function Home() {
  await connection();

  const businessArticlesResponse: StrapiResponse = await service.getArticlesBySection("business");
  const techArticlesResponse: StrapiResponse = await service.getArticlesBySection("technology");
  const culturalArticlesResponse: StrapiResponse = await service.getArticlesBySection("cultural");
  const featuredArticlesRes: StrapiResponse = await service.getFeaturedArticles();
  const mainArticlesResponse: StrapiResponse = await service.getMainArticle();

  return (
    <div className={styles.page}>
      {/* switcher on < tablet */}
      <div className={styles.switcher}>
        <HomePageSwitcher {...mainArticlesResponse} />
        {/* TODO: skeleton */}
      </div>

      <div className={styles.container}>
        {/* Main articles */}
        <main className={styles.main}>
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
          >
            {/* main article */}
            {mainArticlesResponse ? <MainArticle {...mainArticlesResponse.data[0]} /> : "Loading main article"}
          </motion.div>

          {/* business */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='أخبار المال والأعمال' sectionURL='business' articlesList={businessArticlesResponse} />
          </div>
          {/* tech */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='أخبار التكنولوجيا' sectionURL='technology' articlesList={techArticlesResponse} />
          </div>
          {/* cultural */}
          <div className={styles.articlesSection}>
            <ListArticles listTitle='مقالات ثقافية' sectionURL='cultural' articlesList={culturalArticlesResponse} />
          </div>
        </main>

        {/*  */}
        {/* Featured articles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
          className={styles.featuredSection}
        >
          <div className={styles.articlesList}>
            {featuredArticlesRes
              ? featuredArticlesRes.data.map((a, i) => <ArticleFeaturedCard key={a.documentId} article={a} borderTop={i > 0} />)
              : "Loading featured articles ..."}
          </div>
          {/* <AdContainer width={250} height={200} /> */}
          {/*  */}
        </motion.div>
      </div>
    </div>
  );
}
