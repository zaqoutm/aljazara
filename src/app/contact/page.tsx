import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '../../components/sectionHeader/sectionHeader';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل معنا',
};

export default async function Page() {
  const width_height = 18;

  return (
    <div className={styles.main}>
      <SectionHeader title={'تواصل معنا'} />

      <div className={styles.content}>
        <div className={styles.flex}>
          <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
          <h1>عبر منصات التواصل الاجتماعي</h1>
        </div>
        <div className={styles.links}>
          <Link href={'https://facebook.com/aljazaranews'} target='_blank'>
            <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            facebook
          </Link>
          <Link href={'https://instagram.com/aljazaranews'} target='_blank'>
            <Image src='/insta-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            instagram
          </Link>
          <Link href={'https://x.com/aljazaranews'} target='_blank'>
            <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            منصة إكس
          </Link>
        </div>

        <br />
        <div className={styles.flex}>
          <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
          <h1>عبر البريد الإلكتروني</h1>
        </div>
        <div className={styles.links}>
          <Link href={'mailto:contact@aljazara.com'}>أرسل بريد </Link>
        </div>

        <br />
        <div className={styles.flex}>
          <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
          <h1>المطور</h1>
        </div>
        <div className={styles.links}>
          <Link href={'https://github.com/zaqoutm'} target='_blank'>
            Github.Com
          </Link>
          <Link href={'https://github.com/zaqoutm/aljazara'} target='_blank'>
            Aljazara project
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
