import { AljazaraArticleMd } from '@/serviecs/AljazaraArticleMd';
import { getAllArticles } from '@/utlis/mdreader';
import styles from './styles.module.css';

export default async function page() {
  let a: AljazaraArticleMd[] = await getAllArticles();

  // parse content to get the cover
  // or add it to meta

  // catch iframe with postcover attr

  return (
    <div className={styles.main}>
      {a.map((post) => (
        <div className={styles.post} key={post.date_created}>
          <h2>{post.slug}</h2>
          <div className={styles.linkFrame}>
            <a href='#'>{post.image ? <iframe src={post.image} /> : <img src='aljazara-black.svg' />}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
