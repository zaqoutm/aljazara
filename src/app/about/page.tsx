import { Metadata } from 'next';
import { SectionHeader } from '../../components/sectionHeader/sectionHeader';
import styles from './styles.module.css';

const description = 'من نحن | شبكة الجزرة نيوز';
const title = 'الجزرة نيوز';

export const metadata: Metadata = {
  title: title,
  description: description,

  openGraph: {
    title: title,
    description: description,
    url: 'https://aljazara.com',
    images: ['/ss-aljazara.png'],
  },
  alternates: {
    canonical: 'https://aljazara.com/about',
  },
};

export default async function Page() {
  return (
    <main className={styles.main}>
      <SectionHeader title={title} />

      <div className={styles.content}>
        <p>
          موقع الجزرة نيوز موقع إخباري مهتم بأهم وأخر الأخبار العالمية والاقتصادية والثقافية وأخبار اللجوء والتكنولوجيا والتقنية بمصداقية وموضوعية.
        </p>
        <br />
        <p>
          سرعة في الطرح و مواكبة للاحداث لحظة بلحظة ويناقش القضايا والافكار التي ترتقي بالمجتمعات وتشارك في الارتقاء بالوعي الثقافي وتقدم المعلومات
          القيمة والشاملة التي تلبي احتياجات القارئ بمصداقية وحيادية ومهنية عالية. .
        </p>
      </div>
    </main>
  );
}
