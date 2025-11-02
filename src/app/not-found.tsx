import { getMixedLatestArticles } from '@/serviecs/SharedService';
import Link from 'next/link';
import ListMixedArticles from '../components/listMixedArticles/page';
import { StrapiResponse } from '../interfaces/StrapiResponse';

export default async function NotFoundPage() {
  const mixedArticles: StrapiResponse = await getMixedLatestArticles(10);

  return (
    <div className='_404_page'>
      <div className='_404_page_info'>
        <h1>٤٠٤</h1>
        <p className='_404_page_info_1'>نعتذر لم نتمكن من العثور على الصفحة المطلوبة:</p>
        <Link href='/' className='_404_page_info_link'>
          ALJAZARA.COM ارجع الى الصفحة الرئيسية
        </Link>
      </div>

      <div className=''>
        <ListMixedArticles listTitle='أحدث المقالات' articlesList={mixedArticles} />
      </div>
    </div>
  );
}
