import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { getArticlesPageBySection } from '@/serviecs/SectionPageService';
import { getMixedLatestArticles } from '@/serviecs/SharedService';
import LoadMoreList from '../LoadMoreList/page';
import ArticleCard from '../articleCard/page';
import ListMixedArticles from '../listMixedArticles/page';
import MainArticle from '../mainArticle/mainArticle';
import styles from './styles.module.css';

export async function SectionPageLayout({ ...props }) {
  const articles: AljazaraApiResponse = await getArticlesPageBySection(props.sectionTitle, 1, 3);
  const mixedArticles: AljazaraApiResponse = await getMixedLatestArticles(10);

  return (
    <div className={styles.container}>
      {/* 2 first articles */}
      <div className={styles.topContent}>
        {articles.data.map(
          (row, index) =>
            index < 2 && (
              <div key={index} className={styles.articleBig}>
                <MainArticle {...row} />
              </div>
            )
        )}
      </div>
      {/* list + load more articles */}
      <div className={styles.bottomContent}>
        {/*  */}
        {/*  */}
        {/* server + client components */}
        {/* show articles here and onclcik client component will be attached */}
        <div>
          <div className={styles.moreArticles}>
            {articles?.data.map(
              (row, index) =>
                index > 1 && (
                  <div key={index}>
                    <ArticleCard article={row} borderTop={index > 2} />
                  </div>
                )
            )}
          </div>
          {articles.data.length > 2 && <LoadMoreList sectionTitle={props.sectionTitle} />}
        </div>

        {/*  */}
        {/*  */}
        {/* mixed articles */}
        <div className={styles.mixedArticles}>
          <ListMixedArticles listTitle='المزيد من المقالات' articlesList={mixedArticles} />
        </div>
      </div>
    </div>
  );
}
