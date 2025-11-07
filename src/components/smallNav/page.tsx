'use client';
import { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';
// https://motion.dev/docs/react-quick-start

export default function SmallNavigation() {
  const closeMenu = () => {
    setisOpen(false);
    setIsBurgerClicked(false);
  };
  const toggleMenu = () => {
    setIsBurgerClicked(!isBurgerClicked);
    setisOpen(!isOpen);
  };
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  // const [isOpen, setisOpen] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  // setInterval(() => {
  //   toggleMenu();
  // }, 3000);

  const linksList = [
    { title: 'المال والأعمال', path: 'business' },
    { title: 'التكنولوجيا', path: 'technology' },
    { title: 'مقالات تثقيفية', path: 'culture' },
    { title: 'منوعات', path: 'general' },
  ];
  const drawerLinksVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.1,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.15,
      },
    },
  };
  const ulVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.01,
        // staggerChildren: 0.3,
        // staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.03,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants: Variants = {
    closed: {
      y: -30,
    },
    open: {
      y: 0,
    },
  };
  const socialVariants: Variants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.01 },
    },
    open: {
      opacity: 1,
      transition: { duration: 1, delay: 0.2 },
    },
  };
  const width_height = 18;

  return (
    // .navContainer in the global css
    <div className={styles.navContainer}>
      <div className={`${styles.nav}`}>
        {/*  */}
        <div className={styles.navTop}>
          <button onClick={toggleMenu} className={`${isBurgerClicked && styles.moveBurgers}`}>
            {/* <Image className={styles.navToggleImage} src='/burger-menu-black.svg' priority={true} alt='burger icon' width={20} height={20} /> */}
            <div className={`${styles.menuButtonBurger} ${isOpen && styles.menuButtonBurgerOpened}`}></div>
          </button>
          <Link href={'/'} onClick={closeMenu} className={styles.homePageLink}>
            <Image className={styles.navLogoImage} src='/aljazara-black.svg' priority={true} alt='aljazara logo' width={34} height={34} />
          </Link>
        </div>

        {/* links container */}
        <motion.div
          className={`${styles.drawerLinks} ${!isOpen && styles.pointerNone}`}
          variants={drawerLinksVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          <motion.ul variants={ulVariants} initial={false} className={`${styles.kid}`}>
            {linksList.map((item) => (
              <motion.li variants={itemVariants} initial={false} onClick={closeMenu} key={item.path}>
                <Link href={`/${item.path}`}>{item.title}</Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className={styles.socialLinks} variants={socialVariants} initial={false}>
            <Link href={'https://x.com/aljazaranews'} target='_blank'>
              <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://facebook.com/aljazaranews'} target='_blank'>
              <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://instagram.com/aljazaranews'} target='_blank'>
              <Image src='/insta-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
