import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import VersionComponent from './VersionComponent';

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image src='/jazara.svg' alt='Aljazara logo' width={37} height={76} />
        <div className={styles.footerLogoSlug}>
          <p>موقع الجزرة نيوز</p>
          <p>. © 2025-26</p>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <Link href='/about'>من نحن</Link>
        <Link href='/privacy'>سياسة الخصوصية</Link>
        <Link href='/contact'>اتصل بنا</Link>
      </div>

      <VersionComponent />
    </div>
  );
}
