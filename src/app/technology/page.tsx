import { Metadata } from 'next';
import { SectionHeader } from '../../components/sectionHeader/sectionHeader';
import { SectionPageLayout } from '../../components/SectionPageLayout/page';
import styles from './styles.module.css';

const title = 'الجزرة تكنولوجيا';
const description = 'جميع مقالات التكنولوجيا من الجزرة نيوز';

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
    canonical: 'https://aljazara.com/technology',
  },
};

export default async function Page() {
  return (
    <main className={styles.main}>
      <SectionHeader title={'أخبار التكنولوجيا'} />
      <SectionPageLayout sectionTitle='technology' />
    </main>
  );
}
