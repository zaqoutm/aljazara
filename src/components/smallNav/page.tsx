'use client';
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
    // { title: "", path: "" },
  ];
  const containerVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.25,
      },
    },
  };
  const containerKid = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.3,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.9,
      },
    },
  };
  const width_height = 18;

  return (
    // .navContainer in the global css
    <div className='navContainer'>
      <div className={`${styles.nav}`}>
        {/*  */}
        <div className={styles.navTop}>
          <button onClick={toggleMenu} className={`${isBurgerClicked && styles.moveBurgers}`}>
            {/* <Image className={styles.navToggleImage} src='/burger-menu-black.svg' priority={true} alt='burger icon' width={20} height={20} /> */}
            <div className={`${styles.menuButtonBurger} `}></div>
          </button>
          <Link href={'/'} onClick={closeMenu} className={styles.homePageLink}>
            <Image className={styles.navLogoImage} src='/aljazara-black.svg' priority={true} alt='aljazara logo' width={34} height={34} />
          </Link>
        </div>

        {/* links */}
        <motion.div className={`${styles.drawerLinks}`} variants={containerVariants} initial={false} animate={isOpen ? 'open' : 'closed'}>
          {/* kid */}
          <motion.ul variants={containerKid} className={`${styles.kid} ${!isOpen && styles.pointerNone}`}>
            {linksList.map((item, index) => (
              <motion.li variants={itemVariants} onClick={closeMenu} key={index}>
                <Link href={`/${item.path}`}>{item.title}</Link>
              </motion.li>
            ))}
          </motion.ul>

          <div className={styles.socialLinks}>
            <Link href={'https://x.com/aljazaranews'} target='_blank'>
              <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://facebook.com/aljazaranews'} target='_blank'>
              <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
            <Link href={'https://instagram.com/aljazaranews'} target='_blank'>
              <Image src='/insta-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
