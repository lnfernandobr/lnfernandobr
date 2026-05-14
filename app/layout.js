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
    'Fernando Lima — desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
  applicationName: 'Fernando Lima',
  authors: [{ name: 'Fernando Lima', url: SITE_URL }],
  creator: 'Fernando Lima',
  publisher: 'Fernando Lima',
  keywords: [
    'Fernando Lima',
    'desenvolvedor',
    'engenheiro de software',
    'builder',
    'indie hacker',
    'build in public',
    'IA',
    'inteligência artificial',
    'produtos digitais',
    'SaaS',
    'Next.js',
    'React',
    'JavaScript',
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
    description:
      'Desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Lima',
    description:
      'Desenvolvedor e builder. Construindo produtos end-to-end com IA e mostrando tudo no caminho.',
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
  description: 'Desenvolvedor e builder. Construindo produtos end-to-end com IA.',
  jobTitle: 'Software Engineer',
  knowsAbout: [
    'Software Development',
    'Artificial Intelligence',
    'Product Development',
    'Web Development',
    'React',
    'Next.js',
  ],
  image: `${SITE_URL}/me.jpeg`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MS',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://github.com/lnfernandobr',
    'https://twitter.com/lnfernandobr',
    'https://x.com/lnfernandobr',
  ],
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
