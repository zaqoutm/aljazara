import { Metadata } from 'next';

const description = 'جميع المقالات من الجزرة نيوز، مرتبة من الأحدث للأقدم';
const title = 'الجزرة كل المقالات';

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
    canonical: 'https://aljazara.com/articles',
  },
};

export default async function Articles() {
  return <></>;
}
