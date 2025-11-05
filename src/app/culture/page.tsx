import { Metadata } from 'next';
import { SectionHeader } from '../../components/sectionHeader/sectionHeader';
import styles from './styles.module.css';

import { SectionPageLayout } from '../../components/SectionPageLayout/page';

const title = 'الجزرة ثقافة و فن';
const description = 'جميع مقالات الثقافة من الجزرة نيوز';

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL('https://aljazara.com'),

  openGraph: {
    title: title,
    description: description,
    url: 'https://aljazara.com',
    images: ['/ss-aljazara.png'],
  },
  alternates: {
    canonical: 'https://aljazara.com/clture',
  },
};

export default async function Page() {
  return (
    <main className={styles.main}>
      <SectionHeader title={'مقالات ثقافية'} />
      <SectionPageLayout sectionTitle='culture' />
    </main>
  );
}
