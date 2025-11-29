'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function VersionComponent() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    checkV();
  }, []);

  async function checkV() {
    const res = await fetch('/aljazara-build-version.json?_=' + Date.now());
    const data = await res.json();
    setVersion(data.version + ' ');
    console.log(new Date());
  }

  return (
    <div className={styles.versionComponent}>
      <p>v {version}</p>
    </div>
  );
}
