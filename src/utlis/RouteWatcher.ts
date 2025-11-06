'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('Route changed:', pathname);
  }, [pathname]);

  return null;
}
