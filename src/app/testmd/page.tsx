import AdContainer from '@/components/ads/page';
import { getNewsByCategory } from '@/utlis/mdreader';
import parse from 'html-react-parser';
import styles from './styles.module.css';

export default async function page() {
  const tech_news = await getNewsByCategory('tech', 10);
  console.log(tech_news);

  const options = {
    replace: (domNode: any) => {
      // ads
      if (domNode.type === 'tag' && domNode.attribs?.class === 'ad-container') {
        const size = domNode.attribs['data-size'];
        return <AdContainer size={size} />;
      }

      // cover
      if (domNode.name === 'iframe' && domNode.attribs?.src.includes('facebook.com')) {
        domNode.attribs.width = '100%';
        domNode.attribs['loading'] = 'lazy'; // remove for Hero 'cover' images
        return domNode;
      }
    },
  };

  return (
    <div className={styles.main}>
      {tech_news.map((postData: any) => (
        <div className={styles.post}>
          <h1 className={styles.title}>{postData.category}</h1>
          <h2>{postData.slug}</h2>

          <p>{postData.date}</p>
          {postData.content ? (
            // <div dangerouslySetInnerHTML={{ __html: postData.content.value }} />
            <div>{parse(postData.content, options)}</div>
          ) : (
            <p className={styles.noArticle}>no content for this article</p>
          )}
        </div>
      ))}
    </div>
  );
}
