'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.css';

export default function SocialLinks() {
  const width_height = 21;
  const pathname = usePathname();
  const url = `https://aljazara.com${pathname}`;
  const [copied, setCopied] = useState(false);

  function copy(e: any) {
    e.preventDefault();

    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.socialLinks}>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target='_blank'>
        <Image src='/fb-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
      </a>
      <Link href={`https://twitter.com/intent/tweet?url=${url}`} target='_blank'>
        <Image src='/x-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
      </Link>
      <Link href={`https://wa.me/?text=${url}`} target='_blank'>
        <Image src='/whatsapp-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
      </Link>
      <Link href={`mailto:?subject=Check this out!&body=${url}`}>
        <Image src='/email-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />
      </Link>
      <Link href={url} onClick={(e) => copy(e)}>
        {copied ? '✅ تم' : <Image src='/link-icon.svg' alt='' width={width_height} height={width_height} loading='eager' />}
      </Link>

      <div className={styles.socialLinksText}>
        <p>شارك المقالة</p>
        <Image src='/chevronLeft.svg' alt='' width={width_height} height={width_height} loading='eager' />
      </div>
    </div>
  );
}
