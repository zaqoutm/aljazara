import type { Metadata } from 'next';
import { Almarai, Noto_Kufi_Arabic } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import FooterComponent from '../components/footer/footer';
import NavigationComponent from '../components/navigation/navigation';
import SmallNavigation from '../components/smallNav/page';
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
      </head>
      <body className={`${almarai.variable} ${notoKufi.variable} `}>
        <NextTopLoader speed={800} color='linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)' showSpinner={false} />
        <SmallNavigation />
        <NavigationComponent />
        <div className='children'>{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
