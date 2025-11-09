import VersionWatcher from '@/utlis/VersionWatcher';
import type { Metadata } from 'next';
import { Almarai, Noto_Kufi_Arabic } from 'next/font/google';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';
import FooterComponent from '../components/footer/footer';
import NavigationComponent from '../components/navigation/navigation';
import SmallNavigation from '../components/smallNav/page';
import RouteWatcher from '../utlis/RouteWatcher';
import './globals.css';

// Fonts
// use variables in css
const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: '--font-noto-kufi',
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Aljazara الجزرة نيوز',
  description: 'Aljazara news webiste | أخبار الجزرة نيوز',
  metadataBase: new URL('https://aljazara.com'),

  openGraph: {
    url: 'https://aljazara.com',
    images: ['/ss-aljazara.png'],
  },
  alternates: {
    canonical: 'https://aljazara.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Aljazara',
              url: 'https://aljazara.com',
            }),
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-NMLFJJ7Z');
          `,
          }}
        />
        <meta name='google-site-verification' content='v6Pu6IUDS_vV4RttONhoaeRvXbVMmxPqQNnM95LGiGM' />
      </head>
      <body className={`${almarai.variable} ${notoKufi.variable} `}>
        <NextTopLoader speed={800} color='linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)' showSpinner={false} />
        <SmallNavigation />
        <NavigationComponent />
        <RouteWatcher />
        <VersionWatcher />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NMLFJJ7Z'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div className='children'>{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
