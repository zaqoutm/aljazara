'use client';
import { useEffect, useRef } from 'react';

export default function VersionWatcher() {
  const currentVersion = useRef<string | null>(null);

  useEffect(() => {
    const checkVersion = async () => {
      console.log('checking version..');

      try {
        const res = await fetch('/aljazara-build-version.json?_=' + Date.now());
        const data = await res.json();

        if (!currentVersion.current) {
          currentVersion.current = data.version;
        } else if (data.version !== currentVersion.current) {
          // console.log('new version detected: ', data.version);
          window.location.reload();
        }
      } catch (err) {
        console.error('Failed to check version', err);
      }
    };

    // const interval = setInterval(checkVersion, 60_000 * 60); // 1h
    const interval = setInterval(checkVersion, 1_000 * 60);
    checkVersion();

    return () => clearInterval(interval);
  }, []);

  return null;
}
