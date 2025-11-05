import { Metadata } from 'next';
import { SectionHeader } from '../../components/sectionHeader/sectionHeader';
import styles from './styles.module.css';

import { SectionPageLayout } from '../../components/SectionPageLayout/page';

const title = 'الجزرة مال و اعمال';
const description = 'جميع مقالات الاقتصاد من الجزرة نيوز';

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
    canonical: 'https://aljazara.com/business',
  },
};

export default async function Page() {
  return (
    <main className={styles.main}>
      <SectionHeader title={'المال والأعمال'} />
      <SectionPageLayout sectionTitle='business' />
    </main>
  );
}
