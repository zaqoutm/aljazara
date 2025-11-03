import { AljazaraApiResponse } from '@/serviecs/AljazaraApiResponse';
import { loadArticlesBySectionTitle } from '@/serviecs/HomepageService';
import { getMainArticlesBySection } from '@/serviecs/SectionPageService';
import { getMixedLatestArticles } from '@/serviecs/SharedService';
import LoadMoreList from '../LoadMoreList/page';
import ArticleCard from '../articleCard/page';
import ListMixedArticles from '../listMixedArticles/page';
import MainArticle from '../mainArticle/mainArticle';
import styles from './styles.module.css';

interface SectionPageLayoutProps {
  sectionTitle: string;
}

export async function SectionPageLayout(props: SectionPageLayoutProps) {
  const mainArticles: AljazaraApiResponse = await getMainArticlesBySection(props.sectionTitle);
  const articlesBySection: AljazaraApiResponse = await loadArticlesBySectionTitle(props.sectionTitle);
  const mixedArticles: AljazaraApiResponse = await getMixedLatestArticles(10);

  return (
    <div className={styles.container}>
      {/* latest 2 Main articles */}
      <div className={styles.topContent}>
        {mainArticles.data.map((row, index) => (
          <div key={index} className={styles.mainArticleContainer}>
            <MainArticle article={row} flexibleSize />
          </div>
        ))}
      </div>

      {/* list + load more articles */}
      <div className={styles.bottomContent}>
        {/*  */}
        {/*  */}
        {/* server + client components */}
        {/* show articles here and onclcik client component will be attached */}
        <div>
          <div className={styles.moreArticles}>
            {articlesBySection?.data.map((row, index) => (
              <div key={index}>
                <ArticleCard article={row} borderTop={index > 0} />
              </div>
            ))}
          </div>
          {articlesBySection.data.length > 2 && <LoadMoreList sectionTitle={props.sectionTitle} />}
        </div>

        {/*  */}
        {/*  */}
        {/* mixed articles */}
        <div className={styles.mixedArticles}>
          {/* <AdContainer size='250_250' /> */}
          <ListMixedArticles listTitle='المزيد من المقالات' articlesList={mixedArticles} />
          {/* <AdContainer size='300_600' /> */}
        </div>
      </div>
    </div>
  );
}
