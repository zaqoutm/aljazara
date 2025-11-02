import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function NavigationComponent() {
  const width_height = 18;

  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Top */}
        <div className={styles.navTop}>
          <Link href={'/'} className={styles.logo}>
            <Image src='/aljazara.svg' alt='aljazara logo' width={50} height={50} priority={true} />
          </Link>

          <div className={styles.socialLinks}>
            <Link href={'https://x.com/aljazaranews'}>
              <Image src='/x-icon-white.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://facebook.com/aljazaranews'}>
              <Image src='/fb-icon-white.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://instagram.com/aljazaranews'}>
              <Image src='/insta-icon-white.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          className={styles.navBottom}
        >
          <div className={styles.navBottomLinks}>
            {/* <Link href='/comps'>Components</Link> */}
            {/* <Link href='/articles'>كل المقالات</Link> */}
            <Link href='/business'>المال والأعمال</Link>
            <Link href='/technology'>التكنولوجيا</Link>
            <Link href='/cultural'>مقالات تثقيفية</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
