import { Geist, Geist_Mono, Instrument_Serif, Press_Start_2P } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--mono',
  weight: ['300', '400', '500'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--serif-display',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  variable: '--pixel',
  weight: ['400'],
  display: 'swap',
});

const SITE_URL = 'https://fernandolima.pro';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fernando Lima',
    template: '%s | Fernando Lima',
  },
  description:
    'Site pessoal do Fernando Lima. Log do que tenho construído e pensado.',
  applicationName: 'Fernando Lima',
  authors: [{ name: 'Fernando Lima', url: SITE_URL }],
  creator: 'Fernando Lima',
  publisher: 'Fernando Lima',
  keywords: [
    'Fernando Lima',
    'site pessoal',
    'log',
    'build in public',
    'indie',
    'Mato Grosso do Sul',
    'Brasil',
  ],
  category: 'personal',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: 'Fernando Lima',
    title: 'Fernando Lima',
    description: 'Site pessoal. Log do que tenho construído e pensado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Lima',
    description: 'Site pessoal. Log do que tenho construído e pensado.',
    creator: '@lnfernandobr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: '#faf7ef',
  width: 'device-width',
  initialScale: 1,
};

const themeInitScript = `
try {
  var t = localStorage.getItem('theme');
  var dark = t === 'dark';
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
} catch (e) {}
`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fernando Lima',
  alternateName: 'lnfernandobr',
  url: SITE_URL,
  description: 'Site pessoal do Fernando Lima.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MS',
    addressCountry: 'BR',
  },
  sameAs: ['https://github.com/lnfernandobr'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fernando Lima',
  url: SITE_URL,
  inLanguage: ['pt-BR', 'en-US'],
  author: {
    '@type': 'Person',
    name: 'Fernando Lima',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${pressStart.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
